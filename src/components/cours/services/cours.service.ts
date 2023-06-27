import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cour } from '../entities/cours.entity';
import { Repository } from 'typeorm';
import { User } from 'src/components/users/entities/users.entity';
import { Cours } from '../interface/cours.interface';

@Injectable()
export class CoursService {
  constructor(
    @InjectRepository(Cour) private cours: Repository<Cour>,
    @InjectRepository(User) private users: Repository<User>,
  ) {}

  findAll() {
    return this.cours.find();
  }

  async findOne(id: any) {
    const res = await this.cours.findOne({
      where: { id },
      relations: {
        users: true,
      },
    });
    return res;
  }

  create(body: Cours) {
    const newCour = this.cours.create(body);
    return this.cours.save(newCour);
  }

  async update(id: any, body: Cours) {
    const res = await this.cours.update(id, body);
    return res;
  }

  async delete(id: any) {
    const cour = await this.cours.find(id);
    const existe = cour.filter((elements) => elements.id == id);
    if (existe.length === 0) {
      throw new HttpException(
        `No existe el producto ${id}`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      await this.cours.delete(id);
      return true;
    }
  }
}
