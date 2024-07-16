import { Module } from '@nestjs/common';
import { EmployeesController } from './employee.controller';
import { EmployeesService } from './employee.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
