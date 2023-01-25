import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Tarhely } from './tarhely.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/api/tarhely')
  listTarhelyek() {
    const tarhelyRepo = this.dataSource.getRepository(Tarhely);
    return tarhelyRepo.find();
  }

  @Get('/api/tarhely/:id')
  showIdTarhely(@Param('id') id: number) {
    const tarhelyRepo = this.dataSource.getRepository(Tarhely);
    return tarhelyRepo.find();
  }

  @Post('/api/tarhely/:id')
  newTarhely(@Body() tarhely: Tarhely) {
    tarhely.id = undefined;
    const tarhelyRepo = this.dataSource.getRepository(Tarhely);
    tarhelyRepo.save(tarhely);
  }

  @Delete('/api/tarhely/:id')
  deleteTarhely(@Param('id') id: number) {
    const tarhelyRepo = this.dataSource.getRepository(Tarhely);
    tarhelyRepo.delete(id);
  }
}
