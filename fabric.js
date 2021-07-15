class Fabric {
    constructor(fabrics) {
        this.fabrics = fabrics // [{key: value}, {key: value}]
    }
    
    getFabricByName(value) {
        return this.fabrics[value]
    }

    setFabricByName(key, value) {
        this.fabrics[key] = value 
    }

    getIndexByFabricName(fabricKey) { // Red
        return Object.keys(this.fabrics).indexOf(fabricKey)
    }

    getIndexByFabricValue(fabricValue) { // 'RED'
        return Object.values(this.fabrics).indexOf(fabricValue)
    }
}

module.exports = Fabric