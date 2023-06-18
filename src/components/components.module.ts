import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CoursModule } from './cours/cours.module';

@Module({
  controllers: [],
  imports: [UsersModule, CoursModule],
})
export class ComponentsModule {}
