import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{

    @PrimaryGeneratedColumn({type:'int4'})
    id: number;
    

    @Column({type: 'varchar', length:80, nullable: false})
    name:string;
    
    @Column({type: 'varchar',length:300})
    description: string;
    
    @Column({type: 'int4', nullable: false })
    price: number;
    
    @Column({type: 'int8',nullable: false })
    stock: number;

}








