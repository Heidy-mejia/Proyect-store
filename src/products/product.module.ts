import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {Product} from './entities/product.entity';
import { productsservice } from './services/products.service';
import { ProductController } from './Controller/product.controller';
import { productImage } from "./entities/product.image.entity";
import { Category } from "./entities/category.entity";
import { Categoryservice } from "./services/category.service";
import { CategoryController } from "./Controller/category.controller";

import { proveedoresController } from "./Controller/proveedores.controller";
import { Proveedoresservice } from "./services/proveedores.service";
import { Proveedor } from "./entities/proveedor.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product,productImage,Category,Proveedor])],
        //aqui va los servicios
    controllers:[ProductController,CategoryController,proveedoresController],
    providers: [productsservice,Categoryservice,Proveedoresservice],
})
export class ProductsModule{}