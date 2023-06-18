import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursService } from '../services/cours.service';

@Controller('cours')
export class CoursController {
  constructor(private coursService: CoursService) {}
  @Get('obtenercursos')
  getAll() {
    return this.coursService.findAll();
  }

  @Get('obtenercurso/:id')
  getOne(@Param('id') id: any) {
    return this.coursService.findOne(id);
  }

  @Post('create')
  create(@Body() body: any) {
    return this.coursService.create(body);
  }

  @Put('actualizarcurso/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.coursService.update(id, body);
  }

  @Delete('eliminarcurso/:id')
  delete(@Param('id') id: number) {
    return this.coursService.delete(id);
  }
}
