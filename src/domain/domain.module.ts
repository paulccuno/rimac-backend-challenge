import { Module } from '@nestjs/common';
import { GetAllAppointmentsHandler } from './handlers/appointment/get-all-appointments.handler';
import { InfraestructureModule } from 'src/infraestructure/infraestructure.module';
import { ExternalServicesModule } from 'src/external-services/external-services.module';

@Module({
  providers: [GetAllAppointmentsHandler],
  imports: [ExternalServicesModule, InfraestructureModule],
  exports: [GetAllAppointmentsHandler],
})
export class DomainModule {}
