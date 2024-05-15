import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService
  ){
  }
  
  populateDB(){
    this.brandService.fillBrandsSeedData(BRANDS_SEED);
    this.carsService.fillCarsSeedData(CARS_SEED)
    return "Seed succesfull";
  }
}
