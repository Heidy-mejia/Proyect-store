import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../../users/entities/user.entity';

@Entity()
export class Product{

    @PrimaryGeneratedColumn({type:'int4'})
    id?: number;
    

    @Column({type: 'varchar', length:80, nullable: false})
    name:string;
    
    @Column({type: 'varchar',length:300})
    description: string;
    
    @Column({type: 'int4', nullable: false })
    price: number;
    
    @Column({type: 'int8',nullable: false })
    stock: number;

    @Column({type: 'int8',nullable: false })
    user_id: number;

    //Relaciones
    @ManyToOne(()=>User )
    @JoinColumn({
        name: 'user_id',//el campo que relaciona a mi tabla
        referencedColumnName: 'id',// este es el id del usuario

    })
    autor: User;


}








