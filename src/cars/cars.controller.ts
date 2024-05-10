/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) {
    }

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get('/:id')
    getCarById( @Param('id', ParseIntPipe) id:number)
    {
        console.log("🚀 ~ CarsController ~ id:", id)
        return this.carsService.findById(id);
    }
}
