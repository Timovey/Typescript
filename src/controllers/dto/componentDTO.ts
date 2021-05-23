import { Expose } from "class-transformer";
import { IsDefined, IsOptional } from "class-validator";

export class ComponentDto {
  @IsDefined()
  @Expose()
  name: string;

}