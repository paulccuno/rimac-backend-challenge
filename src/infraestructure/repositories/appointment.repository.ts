import { Injectable } from '@nestjs/common';
import { IAppointmentRepository } from 'src/domain/repositories/appointment.repository';
import { DynamoDBService } from 'src/external-services/aws/dynamodb.service';

@Injectable()
export class AppointmentRepository implements IAppointmentRepository {
  constructor(private readonly dynamoDBService: DynamoDBService) {}

  async getAllAppointments(): Promise<any[]> {
    return ['hola']
    // return [this.dynamoDBService.getItem({ insuredId: 0 })];
    throw new Error('Method not implemented.');
  }

  async getAppointment(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async createAppointment(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async updateAppointment(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async removeAppointment(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
