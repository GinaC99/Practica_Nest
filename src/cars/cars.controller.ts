/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
    @Post()
    postNewCar(@Body() request: any){
        return request;
    }

    @Patch("/:id")
    patchCar(@Body() request:any){
        return request
    }
    @Delete("/:id")
    deleteCar(@Param('id', ParseIntPipe) id:number){
        return id
    }
}
