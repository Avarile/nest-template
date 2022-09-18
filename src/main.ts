import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseReformer } from './interceptors/global/global.reformer.response';
import { ResponseExceptionReformer } from './interceptors/global/global.reformer.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseReformer());
  app.useGlobalFilters(new ResponseExceptionReformer());

  // Global prefix
  app.setGlobalPrefix('api/v1/', {
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

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
