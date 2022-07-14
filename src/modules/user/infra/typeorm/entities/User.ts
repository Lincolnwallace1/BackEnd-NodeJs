import { 
Column,
CreateDateColumn,
Entity,
PrimaryGeneratedColumn, 
UpdateDateColumn} from "typeorm";

import { Exclude } from 'class-transformer';
import PhotoURLTransformer from '../../../utils/PhotoURLTransformer';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Exclude()
  @Column({ type: 'varchar', length: 255, unique: true  })
  login!: string;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 1024, nullable: true, transformer: new PhotoURLTransformer() 
  })
  photo!: string | null;

  @Exclude()
  @Column({ type: 'varchar', length: 255 })
  password?: string;

  @Exclude()
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;
}
