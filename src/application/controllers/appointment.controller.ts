import { Controller, Delete, Get, Post } from '@nestjs/common';
import { GetAllAppointmentsHandler } from 'src/domain/handlers/appointment/get-all-appointments.handler';

@Controller('appointments')
export class AppointmentController {
  constructor(private getAllAppointmentsHandler: GetAllAppointmentsHandler) {}

  @Get()
  public async getAllAppointments() {
    return await this.getAllAppointmentsHandler.handler();
  }

  @Get('s')
  public async getAppointment() {
    return 'Get an Appointment';
  }

  @Post('s')
  public async createAppointment() {
    return 'Create an Appointment';
  }

  @Post()
  public async updateAppointment() {
    return 'Update an Appointment';
  }

  @Delete()
  public async removeAppointment() {
    return 'Remove an Appointment';
  }
}
