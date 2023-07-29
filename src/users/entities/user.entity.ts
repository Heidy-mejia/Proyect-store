import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn({type:'int4'})
    id: number;
    

    @Column({type: 'varchar', length:80, nullable: false})
    name:string;

    @Column({type: 'varchar',length:300})
    pasword: string;

    @Column({type: 'varchar',length:300})
    email: string;
    
    @Column({type: 'varchar',length:300})
    sexo: string;
    
    @Column({type: 'boolean', default: true })
    active: boolean;
    
   

}

