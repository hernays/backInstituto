import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('obtenerusuarios')
  getAll() {
    return this.usersService.findAll();
  }

  @Get('usuario/:id')
  getOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Post('create')
  create(@Body() body: any) {
    return this.usersService.create(body);
  }

  @Put('actualizarusuario/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.usersService.update(id, body);
  }

  @Delete('eliminarusuario/:id')
  delete(@Param('id') id: number) {
    return this.usersService.delete(id);
  }

}
