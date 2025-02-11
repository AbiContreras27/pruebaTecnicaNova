import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from "./config/config"


@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }), TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const dbConfig = config.get('typeorm');

        if (!dbConfig) {
          throw new Error('config de TypeORM no encontrada en el ConfigModule')
        }
        return dbConfig

      }

    })],
  controllers: [],
  providers: [],
})
export class AppModule { }