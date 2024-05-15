/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Cars } from './interfaces/cars.interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Cars[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla' 
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic' 
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee' 
        },
    ];

    findAll() {
        return this.cars;
    }
    findById(id: string) {
        const cars = this.cars.find(car => car.id == id);
        if (!cars) throw new NotFoundException(`No se encontro el id  ${id}`);
        return cars
    }

    createNewCar(newCarDto: CreateCarDto) {
        const car: Cars = {
            id: uuid(),
            brand: newCarDto.brand,
            model: newCarDto.model
        }
        this.cars.push(car);
        return this.cars
    }
    updateCar(id: string, updateCar: UpdateCarDto) {
        let carDB = this.findById(id);
        if (updateCar.id && updateCar.id !== id) throw new BadRequestException("Los ids no coinciden")

        this.cars = this.cars.map( car => {
            if ( car.id === id ) {
                carDB = { ...carDB,...updateCar, id }
                return carDB;
            }
            return car;
        })
        return carDB;
    }
    deleteCar(id:string){
        const existCar = this.findById(id);
        if (!existCar) throw new NotFoundException('No existe el id solicitado')
        this.cars = this.cars.filter(cars => cars.id !== id);
        return "Id eliminado"
    }
    fillCarsSeedData( cars: Cars[]){
        this.cars = cars;
    }

}
