import { Module } from '@nestjs/common';
import { CoursController } from './controller/cours.controller';
import { CoursService } from './services/cours.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cour } from './entities/cours.entity';
import { User } from '../users/entities/users.entity';
import { UsersController } from '../users/controller/users.controller';
import { UsersService } from '../users/services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cour, User])],
  controllers: [CoursController, UsersController],
  providers: [CoursService, UsersService],
  exports: [TypeOrmModule],
})
export class CoursModule {}
