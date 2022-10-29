class Vehicle { 
    constructor(make, model, year) {
        this.make = make; 
        this.model = model; 
        this.year = year; 
    }
    honk() {
        return "Beep." 
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`; 
    }
}

class Car extends Vehicle {
    numWheels() {
        return '4'; 
    }
}

class Motorcycle extends Vehicle {
    numWheels() {
        return '2'; 
    }
    revEngine() {
        return 'VROOM!!!'; 
    }
}

class Garage{
    constructor(capacity) {
        this.capacity = capacity; 
        this.vehicle = []; 
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!'; 
        }
        if (this.vehicle.length >= this.capacity) {
            return 'sorry, we are full'; 
        }
        this.vehicle.push(newVehicle); 
        return 'Vehicle added!';  
    }
}