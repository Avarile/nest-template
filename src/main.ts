import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api', {
    exclude: [], // right now I dont have anything to exclude.
  });
  // app.setGlobalPrefix('api', {exclude:['user']}) is another way

  // start of configuration of openApi
  const config = new DocumentBuilder()
    .setTitle('Document')
    .setDescription('Api desc')
    .setVersion('alpha')
    .addTag('First edition')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // end of openApi

  await app.listen(3000);
}
bootstrap();
