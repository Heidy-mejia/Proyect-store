import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcasModule } from './marcas/marcas.module';
import { ModelsModule } from './models/models.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/product.module';
import { UsersModule } from './users/users.module';



@Module({
  
 
  
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      username:'postgres',
      password:'12345678',
      port:5432,
      database:'storep',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true,

    }),
    
   
    MarcasModule,
    ProductsModule,
    UsersModule,
    ModelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
