import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {Product} from './entities/product.entity';
import { productsservice } from './services/products.service';
import { ProductController } from './Controller/product.controller';
import { productImage } from "./entities/product.image.entity";
import { Category } from "./entities/category.entity";
import { Categoryservice } from "./services/category.service";
import { CategoryController } from "./Controller/category.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Product,productImage,Category])],
        //aqui va los servicios
    controllers:[ProductController,CategoryController],
    providers: [productsservice,Categoryservice],
})
export class ProductsModule{}