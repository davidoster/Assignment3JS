class TShirt {
    constructor(color, size, fabric, price) {
        this.color = color
        this.size = size
        this.fabric = fabric
        this.price = price // FabricPrices[Object.keys(Fabric)[Object.values(Fabric).indexOf(fabric)]]
    }
}

module.exports = TShirt