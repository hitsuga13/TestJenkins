import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  byeWorld(): string {
    return 'Bubye World!';
  }
}
