import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Product } from '../entities/product.entity';
import { createProductdto } from '../dto/product.dto';
import { productImage } from '../entities/product.image.entity';
import { InjectRepository } from "@nestjs/typeorm";




@Injectable()
export class productsservice{
    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>,

        @InjectRepository(productImage)
        private readonly productImageRepo: Repository<productImage>,


        private readonly dataSource: DataSource,
    ){}

    //async create(createProductDto:createProductdto){
     //   const product = this.productRepo.create(createProductDto);
    //    await  this.productRepo.save(product);
    //    return product;
   // }

   //crear un producto y arreglar una imagen

   async create (productDto: createProductdto){
    const { images = [], ...detailsProducts} =productDto;

    const product = await this.productRepo.create({
        ...detailsProducts,
        images: images.map ((image) => this.productImageRepo.create ({url:image}),
        ),
    })
    await this.productRepo.save(product);
    return product;
   }
    //Encontrar un registro
    //findOne(id: number){
        //return this.productRepo.findOneBy({id})
   // }
    //mostrar todos los registros
    findOne (id:number) {
        return  this.productRepo. findOne({
            where:{id},
            relations:{
                autor:true,
            }
        })

    }



    findAll(){
        return   this.productRepo.find({
            order: {id: 'ASC'},
            relations:{
                images: true,
            }
        });
    }
    //eliminar un registro
    async remove(id:number){
        const product =await this.findOne(id);
        await this.productRepo.remove(product);
        return 'Producto eliminado';
    }

    //actualizar un registro
    //async update(id: number, cambios: createProductdto){
    //    const oldProduct = await this.findOne(id);
    //    const updateProduct = await this.productRepo.merge(oldProduct, cambios);
    //    return this.productRepo.save(updateProduct);
   // }

   async update (id:number,cambios :createProductdto){
    const {images, ...updateAll} =cambios
    const product=await this.productRepo.preload({
        id: id,
        ...updateAll,
    });

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    if (images){
        await queryRunner.manager.delete(productImage,{product:{id}})

        product.images =images.map((image) =>
        this.productImageRepo.create({url:image}),
        );
        
    }else {
        product.images = await this.productImageRepo.findBy({product: {id}});

    }

        await queryRunner.manager.save(product);

        await queryRunner.commitTransaction();
        await queryRunner.release();
        return product;
    

    
   }
}