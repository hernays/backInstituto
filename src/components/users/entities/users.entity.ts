import { Cour } from 'src/components/cours/entities/cours.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

  @Column()
  edad: string;

  @Column()
  direccion: string;

  @ManyToOne(() => Cour, (cour) => cour.users, { onDelete: 'CASCADE' })
  cour: Cour;
}
