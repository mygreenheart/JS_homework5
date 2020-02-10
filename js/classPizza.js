"use strict"
class Pizza {
    constructor(photo, name, price) {
        this.photo = photo;
        this.name = name;
        this.composition = new Map();
        this.price = price;
    }

    addComposition(name, calories) {
        this.composition.set(name, calories);
    }

    countCalories() {
        let calories = 0;
        for (const entry of this.composition.values()) {
            calories += entry;
        }
        return calories;
    }

    showComposition() {
        let composition = [];
        for (let entry of this.composition.keys()) {
            composition.push(entry);
        }
        return composition;
    }

}



