import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {Product} from './entities/product.entity';
import { productsservice } from './services/products.service';
import { ProductController } from './Controller/product.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
        //aqui van los servicios
    controllers:[ProductController],
    providers: [productsservice],
})
export class ProductsModule{}