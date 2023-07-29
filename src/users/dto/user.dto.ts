import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { isBuiltin } from "module";


export class createUserdto{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    pasword: string;



    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    sexo: string;

    @IsNotEmpty()
    @IsOptional()
    @IsBuolean()

    active: boolean;







    
    
}

function IsBuolean(): (target: createUserdto, propertyKey: "active") => void {
    throw new Error("Function not implemented.");
}
