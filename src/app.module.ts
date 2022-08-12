import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CompanysModule } from './companys/companys.module';
import { ServicesModule } from './services/services.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
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
