/*

const Color = { Red: 'RED', Orange: 'ORANGE', Yellow: 'YELLOW', Green: 'GREEN', Blue: 'BLUE', Indigo: 'INDIGO', Violet: 'VIOLET' }
Color.Red

*/


class Color {
    constructor(colors) {
        this.colors = colors // [{key: value}, {key: value}]
    }
    
    getColorByName(value) {
        return this.colors[value]
    }

    setColorByName(key, value) {
        this.colors[key] = value 
    }

    getIndexByColorName(colorKey) { // Red
        return Object.keys(this.colors).indexOf(colorKey)
    }

    getIndexByColorValue(colorValue) { // 'RED'
        return Object.values(this.colors).indexOf(colorValue)
    }
}

module.exports = Color

// let myColors = new Color({ Red: 'RED', Orange: 'ORANGE', Yellow: 'YELLOW', Green: 'GREEN', Blue: 'BLUE', Indigo: 'INDIGO', Violet: 'VIOLET' })
// console.log(myColors.getColorByName('Red'))
// myColors.setColorByName('Maroon', 'MAROON')
// console.log(myColors.getColorByName('Maroon'))
// console.log(myColors.getIndexByColorName('Maroon'))
// console.log(myColors.getIndexByColorValue('MAROON'))


