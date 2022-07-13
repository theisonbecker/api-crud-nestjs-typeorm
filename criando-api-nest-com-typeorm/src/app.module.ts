import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from 'src/modules/person.module';


@Module({
  imports: [PersonModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
