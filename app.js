// create a Color Object which contains the various colors
// create a Size Object which contains the various sizes
// create a Fabric Object which contains the various fabrics
const Color         = require('./color')
const Fabric        = require('./fabric')
const Size          = require('./size')
const TShirt        = require('./tshirt') 
const FabricCost    = require('./fabriccost')
const ProductPriceStrategy = require('./productpricestrategy')
const labour = 4.5
const profitRate = 30

// const FabricPrices  = { Wool: 15, Cotton: 15.5, Polyester: 17, Rayon: 19.5, Linen: 34.5, Cashmere: 160, Silk: 250 }
const CreditDebit   = 1.2
const MoneyBank     = 1.1
const Cash          = 1

let myColors        = new Color({ Red: 'RED', Orange: 'ORANGE', Yellow: 'YELLOW', Green: 'GREEN', Blue: 'BLUE', Indigo: 'INDIGO', Violet: 'VIOLET' })
let mySizes         = new Size({ XS: 'XS', S: 'S', M: 'M', L: 'L', XL: 'XL', XXL: 'XXL', XXXL: 'XXXL' })
let myFabrics       = new Fabric({ Wool: 'WOOL', Cotton: 'COTTON', Polyester: 'POLYESTER', Rayon: 'RAYON', Linen: 'LINEN', Cashmere: 'CASHEMERE', Silk: 'SILK' })
let myFabricCosts   = new FabricCost({ Wool: 0.8, Cotton: 0.95, Polyester: 0.99, Rayon: 1.2, Linen: 2.7, Cashmere: 4.6, Silk: 7.2 })
let myTShirt        = new TShirt(myColors.getColorByName('Red'), mySizes.getSizeByName('XS'), myFabrics.getFabricByName('Wool')) // 1. e.g. Fabric.Wool
// Object.keys(Fabric)[Object.values(Fabric).indexOf(fabric)]
myTShirt.price      = new ProductPriceStrategy(myFabricCosts, labour, profitRate, 'Wool').getPrice() // 2. myTShirt..... fabric
console.log(myTShirt)


// 1. replace 'Wool' on lines 22, 24
// 2. create a PaymentStrategy where you give the product (tshirt) and the selection of payment and returns the final price to pay
// 3. For all 343 tshirts calculate the actual final prices for ALL of the Payment Strategies



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



console.log(buyATShirt(myTShirt))
// let tshirts = generateTShirts(Color,Size,Fabric) // 3. for all the tshirts calculate the prices for every single Payment Strategy
// console.log(tshirts)


