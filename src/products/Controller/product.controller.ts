import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, } from '@nestjs/common';
import { productsservice } from '../services/products.service';
import { createProductdto } from "../dto/product.dto";

@Controller('products')
export class ProductController {
    constructor(
        private readonly productsservice:productsservice){}

    @Post()
    async create (@Body() productdto:createProductdto){
        return await this.productsservice.create(productdto);
    }
    @Get()
    findAll(){
        return this.productsservice.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.productsservice.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.productsservice.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createProductDto :createProductdto,
        
    )
    {
        return this.productsservice.update(id, createProductDto)
    }
}

    
