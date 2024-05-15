import { Cars } from "src/cars/interfaces/cars.interfaces";
import { v4 as uiid } from "uuid"; 
export const CARS_SEED: Cars[]=[
    {
        id: uiid(),
        brand: "toyota",
        model: "corola"
    },
    {
        id: uiid(),
        brand: "toyota",
        model: "corola"
    },
    {
        id: uiid(),
        brand: "toyota",
        model: "corola"
    }
]