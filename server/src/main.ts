import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const DEFAULT_PORT = 8080;

async function bootstrap() {
  const PORT = process.env.PORT || DEFAULT_PORT;

  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
  });
}

bootstrap();
