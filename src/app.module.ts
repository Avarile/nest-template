import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CompanysModule } from './companys/companys.module';
import { ServicesModule } from './services/services.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

import HostConfig from './common/Config/Host.config';
import DatabaseConfig from './common/Config/Database.config';

@Module({
  imports: [
    // controlls
    ConfigModule.forRoot({
      isGlobal: true,
      load: [HostConfig, DatabaseConfig], // import of the condfig files
    }),

    // end of controlls

    UsersModule,
    CompanysModule,
    ServicesModule,
    SuppliersModule,
    AuthModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
