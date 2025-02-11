import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerGlobal } from './Middleware/logger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.use(LoggerGlobal)

  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Aplicacion esta corriendo en: ${process.env.PORT || 3000}`)
  });
}
bootstrap();
