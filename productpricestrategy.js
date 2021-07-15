// cost <--  materials + labour
// price <-- cost + %

class ProductPriceStrategy {
    constructor(fabricCosts, labour, profitRate, fabric) {
        this.fabricCosts = fabricCosts
        this.labour = labour
        this.profitRate = profitRate
        this.fabric = fabric
    }

    getPrice() {
        let finalPrice = (this.fabricCosts.getFabricCostByName(this.fabric) + this.labour) * this.profitRate
        return finalPrice
    }
}

module.exports = ProductPriceStrategy