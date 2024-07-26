import { Module } from '@nestjs/common';
import { ToDoModule } from './to-do/to-do.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'to_do_list',
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),ToDoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
