// SEE http://brewgr.com/calculations for calcs

import { IFermentable } from "../recipes/fermentable";
import { IYeast } from "../recipes/yeast";
import { IRecipe } from "../recipes/recipe";
import { IHop } from "../recipes/hop";

export class RecipeCalcsUtil {

    constructor(private recipe: IRecipe) { }

    public OriginalGravity(): number {

        let gravityPoints = this.GravityPoints(this.recipe.Fermentables, this.recipe.MashEfficiency);

        let ptsPerVol = gravityPoints / this.recipe.BatchSize;

        let og = 1 + (ptsPerVol / 1000);

        return og;
    }

    public FinalGravity(): number {

        let gravityPoints = this.GravityPoints(this.recipe.Fermentables, this.recipe.MashEfficiency);
        var fg = 1 + (((gravityPoints / this.recipe.BatchSize) * (1 - this.AvgAttenuation(this.recipe.Yeasts))) / 1000);

        return fg;
    }

    // A deviation of the Malt Color Units equation said to be more accurate for predicting 
    // the color of dark
    public SRM(): number {
        var mcu = 0;
        // Calculate the gravity point for this recipe
        this.recipe.Fermentables.forEach(function (item: IFermentable) {

            mcu = mcu + this.MCU(item.Lovibond, item.Lbs, this.recipe.BatchSize);

        });

        var srm = 1.49 * (mcu * .69);
        return srm;
    };

    //    Gravity = (Batch Size In Gallons / Boil Size In Gallons) * (Gravity - 1)
    //    Bigness Factor = 1.65 * Math.pow(0.000125, Gravity)
    //    Boil Time Factor = (1 - Math.pow(2.718281828459045235, (-0.04 * Boil Time))) / 4.15
    //    Utilization = Bigness Factor * Boil Time Factor
    //    If you are using hop pellets we then mutiply the utilization by 1.1.
    //    IBU = (Alpha Acid * Ounces) * Utilization * 74.90 / Batch Size In Gallons

    public IBU(): number {
        let gravity = (this.recipe.BatchSize / this.recipe.BoilSizeGal) * (this.OriginalGravity() - 1);
        let bignessFactor = 1.65 * Math.pow(0.000125, gravity);
        let boilTimeFactor = (1 - Math.pow(2.718281828459045235, (-0.04 * this.recipe.BoilTimeMin))) / 4.15;
        let utilization = bignessFactor * boilTimeFactor;

        let ibu = 0;

        this.recipe.Hops.forEach(function (hop: IHop) {
            ibu = ibu + (hop.AlphaAcid * hop.Oz) * utilization * 74.90 / this.recipe.batchSize;
        });

        return ibu;

    };

    public ABV(): number {

        let originalGravity: number = this.OriginalGravity();
        let finalGravity: number = this.FinalGravity();

        var abv = (((originalGravity - finalGravity) * 1.05) / finalGravity) / 0.79;
        return abv * 100;
    };




    protected MCU(grainColor: number, lbs: number, batchSize: number): number {
        var mcu = grainColor * lbs / batchSize;
        return mcu;
    };

    private GravityPoints(fermentables: IFermentable[], mashEfficency: number): number {

        var gravityPoints = 0;
        // Calculate the gravity point for this recipe
        fermentables.forEach(function (item: IFermentable) {

            switch (item.Usage) {
                case 'Mash':
                    gravityPoints += (item.GrainPotential * item.Lbs) * mashEfficency;
                    break;
                case 'Extract':
                    gravityPoints += (item.GrainPotential * item.Lbs);
                    break;
            }

        });

        return gravityPoints;
    };

    private AvgAttenuation(yeasts: IYeast[]) {
        var sum = 0;

        yeasts.forEach(function (y) {

            sum += y.Attenuation;

        });

        if (yeasts.length > 0) {
            return sum / yeasts.length;
        } else {
            return 0;
        }

    };

}