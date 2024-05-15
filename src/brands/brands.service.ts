import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uiid } from 'uuid';
import { NotFoundError } from 'rxjs';

@Injectable()
export class BrandsService {
  private brands:Brand[] = [
    {
      id: uiid(),
      name: 'Toyota',
      createAt: new Date().getTime()
    }
  ]
  create(createBrandDto: CreateBrandDto) {
    const {name} = createBrandDto;
    const brand:Brand = {
      id: uiid(),
      name: name.toLowerCase(),
      createAt: new Date().getTime(),
      updateAt: new Date().getTime()
    }
    this.brands.push(brand)
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id)
    if (!brand) throw new NotFoundException(`no se encontro el id ${id}`)
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let branDB = this.findOne(id);
    this.brands = this.brands.map(databrand => {
      if ( databrand.id === id){
        branDB.updateAt = new Date().getTime();
        branDB = {...branDB,...UpdateBrandDto }
        return  branDB;
      } else {
        return databrand;
      }
      
    })
      
    return branDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter(databrand => databrand.id !== id);
    return this.brands;
  }
  fillBrandsSeedData( brandsSeed: Brand[]){
    this.brands = brandsSeed;
  }
}
