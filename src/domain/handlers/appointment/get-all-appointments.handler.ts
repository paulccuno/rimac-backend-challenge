import { Injectable } from '@nestjs/common';
import { IAppointmentRepository } from 'src/domain/repositories/appointment.repository';

@Injectable()
export class GetAllAppointmentsHandler {
  constructor(private readonly appointmentRepository: IAppointmentRepository) {}

  public async handler(): Promise<string[]> {
    return this.appointmentRepository.getAllAppointments();
  }
}
