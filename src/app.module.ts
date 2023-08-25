import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcasModule } from './marcas/marcas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/product.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';






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
    FilesModule,
    

    
    
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
