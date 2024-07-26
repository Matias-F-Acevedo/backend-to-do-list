import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDo } from './entities/to-do.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ToDoService {

  constructor(
    @InjectRepository(ToDo)
    private toDoRepository: Repository<ToDo>,
  ) {}

  create(createToDoDto: CreateToDoDto) {
    const toDo = this.toDoRepository.create(createToDoDto);
    return this.toDoRepository.save(toDo);
  }

  async findAll(){
    return this.toDoRepository.find();
  }

  async findOne(id: number){
    const toDo = await this.toDoRepository.findOneBy({ id:`${id}` });
    if (!toDo) {
      throw new NotFoundException(`ToDo with ID ${id} not found`);
    }
    return toDo;
  }


  async update(id: number, updateToDoDto: UpdateToDoDto) {
    const toDo = await this.findOne(id);
    const updatedTodo = {...toDo, ...updateToDoDto};
    return await this.toDoRepository.save(updatedTodo);
  }


  async remove(id: number){
    const result = await this.toDoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
  }
}
