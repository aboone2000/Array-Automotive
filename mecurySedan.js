
//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
            super(make, model, year, color, mileage);
        this.maximumPassengers = 5
        this.passenger = 0
        this. numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false

    
    }
    checkservice(){
        if (this.mileage > 30000){
            this.scheduleService = true
            return this.scheduleService
        }  
    }
    roomAvaliable(num){
        if(this.passenger < this.maximumPassengers){
            if((num + this.passenger) <= this.maximumPassengers){
                this.passenger = num;
                return this.passenger;
            } else{
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.")

            }

        }else{
            console.log(this.model + " "+this.make + "is full");
        }
    }
start(){
    if(this.fuel > 0){
        console.log("Engine has started")
        this.start = true
    } else{
        console.log("No Fuel!!");
        return this.start = false
    }
}

}
let myCar = new Car('Audi', 'Etron-GT', '2022','Gray')

myCar.start()
myCar.roomAvaliable(5)
myCar.checkservice()

console.log(myCar)