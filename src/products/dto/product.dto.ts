import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Product } from "../entities/product.entity";

export class createProductdto{
    @IsNotEmpty()
    @IsNumber()
    id?: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @IsString()
    @IsOptional()
    filename: string;

    @IsDateString()
    @IsOptional()
    created_at: string;

    @IsDateString()
    @IsOptional()
    categoria_id: number;

    @IsArray({each: true})
    @IsString()
    @IsOptional()
    images?: string[];







    
    
}