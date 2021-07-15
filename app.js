// create a Color Object which contains the various colors
// create a Size Object which contains the various sizes
// create a Fabric Object which contains the various fabrics
var Color = require('./color')

// const Color         = { Red: 'RED', Orange: 'ORANGE', Yellow: 'YELLOW', Green: 'GREEN', Blue: 'BLUE', Indigo: 'INDIGO', Violet: 'VIOLET' }
const Size          = { XS: 'XS', S: 'S', M: 'M', L: 'L', XL: 'XL', XXL: 'XXL', XXXL: 'XXXL' }
const Fabric        = { Wool: 'WOOL', Cotton: 'COTTON', Polyester: 'POLYESTER', Rayon: 'RAYON', Linen: 'LINEN', Cashmere: 'CASHEMERE', Silk: 'SILK' }
const FabricPrices  = { Wool: 15, Cotton: 15.5, Polyester: 17, Rayon: 19.5, Linen: 34.5, Cashmere: 160, Silk: 250 }
const CreditDebit = 1.2
const MoneyBank   = 1.1
const Cash        = 1


class TShirt {
    constructor(color, size, fabric) {
        this.color = color
        this.size = size
        this.fabric = fabric
        this.price = FabricPrices[Object.keys(Fabric)[Object.values(Fabric).indexOf(fabric)]]
    }
}

function buyATShirt(tshirt) {
    return { creditDebit: tshirt.price * CreditDebit, moneyBank: tshirt.price * MoneyBank, cash: tshirt.price }
}

function generateTShirts(Color, Size, Fabric, tshirts = []) {
    let sizeOfColors = Object.keys(Color).length
    // let sizeOfColors = 2
    for(let i = 0; i < sizeOfColors; i++) {
        for(let j = 0; j < sizeOfColors; j++) {
            for(let k = 0; k < sizeOfColors; k++) {
               tshirts.push(new TShirt(Object.values(Color)[i], Object.values(Size)[j], Object.values(Fabric)[k]))
            }
        }
    }
    return tshirts
}

let myColors = new Color({ Red: 'RED', Orange: 'ORANGE', Yellow: 'YELLOW', Green: 'GREEN', Blue: 'BLUE', Indigo: 'INDIGO', Violet: 'VIOLET' })
let myTShirt = new TShirt(myColors.getColorByName('Red'), Size.XS, Fabric.Wool)
console.log(myTShirt)

console.log(buyATShirt(myTShirt))
// let tshirts = generateTShirts(Color,Size,Fabric)
// console.log(tshirts)


