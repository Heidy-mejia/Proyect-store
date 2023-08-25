import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";


export class createCategorydto{
    @IsNotEmpty()
    @IsNumber()
    id?: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    categoria: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    create_ad: Date;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;  
    
}