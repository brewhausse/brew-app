import { IFermentable } from "./fermentable";
import { IHop } from "./hop";
import { IYeast } from "./yeast";

export interface IRecipe {

    Id: number;
    Title: string;
    BatchSize: number;
    BoilTimeMin: number;
    BoilSizeGal: number;
    MashEfficiency: number;

    Fermentables: IFermentable[];
    Hops: IHop[];
    Yeasts: IYeast[];
}

