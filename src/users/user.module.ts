import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])], providers:[
        //aqui van los servicios
    ],
    controllers:[

        //aqui van los controladores

    ],
})
export class usersModule{}