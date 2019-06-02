import { UserDTO } from './user.dto';
import { CarDTO } from './car.dto';

export class DriverDTO extends UserDTO {
    car: CarDTO;
}
