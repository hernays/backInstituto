import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentsModule } from './components/components.module';
import { User } from './components/users/entities/users.entity';
import { Cour } from './components/cours/entities/cours.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'secrect51',
      database: 'instituto',
      entities: [User, Cour],
      autoLoadEntities: true,
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    ComponentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
