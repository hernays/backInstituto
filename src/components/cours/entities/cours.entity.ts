import { User } from 'src/components/users/entities/users.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Cour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: string;

  @Column()
  year: string;

  @Column()
  semestre: string;

  @Column()
  sede: string;

  @OneToMany(() => User, (user) => user.cour, { onDelete: 'CASCADE' })
  users: User[];
}
