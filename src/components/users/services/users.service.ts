import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Cour } from 'src/components/cours/entities/cours.entity';
import { SaveUsers } from '../interface/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private users: Repository<User>,
    @InjectRepository(Cour) private cours: Repository<Cour>,
  ) {}

  async findAll() {
    const res = await this.users.find();
    if (!res) {
      throw new NotFoundException('No se encontraron Resultados');
    }
    return res;
  }

  async findOne(id: any) {
    const user = await this.users.findOne({
      where: { id },
      relations: {
        cour: true,
      },
    });
    return user;
  }

  async create(body: SaveUsers) {
    const cour = await this.cours.findOne({ where: { id: body.courId } });
    if (!cour) {
      throw new NotFoundException('No se encontraron Resultados');
    }
    const newUser = new User();
    newUser.cour = cour;
    newUser.nombre = body.nombre;
    newUser.apellido = body.apellido;
    newUser.email = body.email;
    newUser.edad = body.edad;
    newUser.direccion = body.direccion;
    return this.users.save(newUser);
  }

  async update(id: any, body: SaveUsers) {
    const user = await this.users.find(id);
    const existe = user.filter((elements) => elements.id == id);
    if (existe.length === 0) {
      throw new HttpException(
        `No existe el producto ${id}`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      const res = await this.users.update(id, body);
      if (res.affected) {
        return { message: 'Datos actualizados con existo' };
      } else {
        return { message: 'Se produjo un error en el servidor' };
      }
    }
  }

  async delete(id: any) {
    const user = await this.users.find(id);
    const existe = user.filter((elements) => elements.id == id);
    if (existe.length === 0) {
      throw new HttpException(
        `No existe el producto ${id}`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      await this.users.delete(id);
      return true;
    }
  }
}
