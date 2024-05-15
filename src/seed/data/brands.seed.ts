import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uiid } from "uuid";

export const BRANDS_SEED: Brand[]= [
    {
        id: uiid(),
        name: "Pimera brand",
        createAt: new Date().getTime(),
        updateAt: new Date().getTime()
    },
    {
        id: uiid(),
        name: "Pimera brand",
        createAt: new Date().getTime(),
        updateAt: new Date().getTime()
    },
    {
        id: uiid(),
        name: "Pimera brand",
        createAt: new Date().getTime(),
        updateAt: new Date().getTime()
    }
]