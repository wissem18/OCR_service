/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as tesseract from 'node-tesseract-ocr';

@Injectable()
export class OcrService {

  parseImage(imageBuffer) {
    return tesseract
      .recognize(imageBuffer)
      .then((text) => {
        return text.split('\n');
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}

