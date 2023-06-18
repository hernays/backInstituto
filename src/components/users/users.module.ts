import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controller/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Cour } from '../cours/entities/cours.entity';
import { CoursController } from '../cours/controller/cours.controller';
import { CoursService } from '../cours/services/cours.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Cour])],
  providers: [UsersService, CoursService],
  controllers: [UsersController, CoursController],
  exports: [TypeOrmModule],
})
export class UsersModule {}
