/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) {
    }

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get('/:id')
    getCarById( @Param('id', ParseUUIDPipe) id:string)
    {
        return this.carsService.findById(id);
    }

    @Post()
    postNewCar(@Body() newCar: CreateCarDto){
        return this.carsService.createNewCar(newCar)
    }

    @Patch("/:id")
    patchCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCar:UpdateCarDto){
        return this.carsService.updateCar(id, updateCar);
    }

    @Delete("/:id")
    deleteCar(@Param('id', ParseUUIDPipe) id:string){
        return this.carsService.deleteCar(id);
    }
}
