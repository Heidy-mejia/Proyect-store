
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";
import { Module } from "@nestjs/common";


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
