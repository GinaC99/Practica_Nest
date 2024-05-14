/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:1,
            brand: 'Toyota',
            model: 'Corolla'

        },
        {
            id:2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id:3,
            brand: 'Chevrolet',
            model: 'Corolla'

        },
        {
            id:4,
            brand: 'Jeep',
            model: 'Corolla'

        }
    ]

    findAll(){
        return this.cars;
    }
    findById(id:number){
        const cars = this.cars.find(car => car.id == id);
        return cars ? cars: new NotFoundException(`No se encontro el id  ${id}`);
    }
    
}
