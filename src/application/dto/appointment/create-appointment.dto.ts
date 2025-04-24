import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';

export enum CountryISO {
  PE,
  CL,
}

export class ScheduleDetailDto {
  @IsNumber()
  centerId: number;

  @IsNumber()
  specialityId: number;

  @IsNumber()
  medicId: number;

  @IsDateString()
  date: string;
}

export class CreateAppointmentRequestDto {
  @IsString()
  @Length(5, 5)
  insuredId: string;

  @IsNumber()
  scheduleId: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => ScheduleDetailDto)
  scheduleDetail: ScheduleDetailDto;

  @IsEnum(CountryISO)
  countryISO: string;
}
