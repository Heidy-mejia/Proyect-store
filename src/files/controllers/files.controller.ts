import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from "../services/files.services";
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadImage(@UploadedFile() file: Express.Multer.File){
      console.log(file);

      }
      
    @Get('products/:imageId')
    getImage(){
      return 'Hola mundo';
    }

}


