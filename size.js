class Size {
    constructor(sizes) {
        this.sizes = sizes // [{key: value}, {key: value}]
    }
    
    getSizeByName(value) {
        return this.sizes[value]
    }

    setSizeByName(key, value) {
        this.sizes[key] = value 
    }

    getIndexBySizeName(sizeKey) { // Red
        return Object.keys(this.sizes).indexOf(sizeKey)
    }

    getIndexBySizeValue(sizeValue) { // 'RED'
        return Object.values(this.sizes).indexOf(sizeValue)
    }
}

module.exports = Size