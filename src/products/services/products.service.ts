import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from '../entities/product.entity';
import { createProductdto } from '../dto/product.dto';




@Injectable()
export class productsservice{
    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>
    ){}

    async create(createProductDto:createProductdto){
        const product = this.productRepo.create(createProductDto);
        await  this.productRepo.save(product);
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
        });
    }
    //eliminar un registro
    async remove(id:number){
        const product =await this.findOne(id);
        await this.productRepo.remove(product);
        return 'Producto eliminado';
    }

    //actualizar un registro
    async update(id: number, cambios: createProductdto){
        const oldProduct = await this.findOne(id);
        const updateProduct = await this.productRepo.merge(oldProduct, cambios);
        return this.productRepo.save(updateProduct);
    }
}