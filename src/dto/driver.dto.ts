import { UserDTO } from './user.dto';
import { CarDTO } from './car.dto';

export class DriverDTO extends UserDTO {
    car: CarDTO;
}

export interface RegisterDriverDTO {
    name: string;
    document: string;
    photoUrl: string;
    car: {
        name: string;
        color: string;
        registrationPlate: string;
    };
}
