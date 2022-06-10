namespace Utility{
    export namespace Taxes{
        export function calculateIva(price:number):number{
            return (price*0.19)+price
        }
        export function calculatePenalityIva(price:number):number{
            return (price*0.30)+price
        }
    }
}