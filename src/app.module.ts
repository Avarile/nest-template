import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CompanysModule } from './companys/companys.module';
import { ServicesModule } from './services/services.module';
import { SuppliersModule } from './suppliers/suppliers.module';
// import { AuthModule } from './auth/auth.module';

// start of the database config
// import { DatabaseModule } from './database/database.module';
// import { ConfigModule } from '@nestjs/config';
// import HostConfig from './common/Config/Host.config';
// import DatabaseConfig from './common/Config/Database.config';
// import { databaseProviders } from './database/database.providers';
// end of the database config

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    // controlls
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
    //   load: [HostConfig, DatabaseConfig], // import of the condfig files
    // }),

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'testDB2',
      entities: [User],
      synchronize: true,
    }),

    UsersModule,
    CompanysModule,
    ServicesModule,
    SuppliersModule,
    // AuthModule,
    // DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
