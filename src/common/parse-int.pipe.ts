import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = Number(value);
    if (isNaN(val)) {
      return new BadRequestException('Not is a number');
    }
    return val;
  }
}
