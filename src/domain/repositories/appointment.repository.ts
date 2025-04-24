export abstract class IAppointmentRepository {
  constructor() {}

  abstract getAllAppointments(): Promise<any[]>;

  abstract getAppointment(): Promise<any>;

  abstract createAppointment(): Promise<any>;

  abstract updateAppointment(): Promise<any>;

  abstract removeAppointment(): Promise<any>;
}
