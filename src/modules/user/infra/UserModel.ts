import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;
  
  @CreateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  deleted_at: Date;
  
  @Column()
  is_valid: boolean;

  @Column()
  is_admin: boolean;

  @Column({ array: true })
  knowledges: string;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };