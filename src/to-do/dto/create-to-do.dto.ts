import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class  CreateToDoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsOptional()
  status?: boolean;
}