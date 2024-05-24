/* eslint-disable prettier/prettier */
import { Controller,  Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { OcrService } from './ocr/ocr.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly ocrService: OcrService,
  ) {}
@Post('upload')
 @UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.ocrService.parseImage(file.buffer);
  }
  
}
