class FabricCost {
    constructor(costs) {
        this.costs = costs
    }
    
    getFabricCostByName(value) {
        return this.costs[value]
    }

    setFabricCostByName(key, value) {
        this.costs[key] = value 
    }

    getIndexByFabricCostName(fabricCostKey) {
        return Object.keys(this.costs).indexOf(fabricCostKey)
    }

    getIndexByFabricCostValue(fabricCostValue) {
        return Object.values(this.costs).indexOf(fabricCostValue)
    }
}

module.exports = FabricCost