import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ? use class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      // ! ignore other attribute no exist in DTO
      whitelist: true,
      // ! show alert for data send is no exist in DTO
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
