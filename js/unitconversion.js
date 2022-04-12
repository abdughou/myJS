let val = 20;

function length() {
    let heading_length = document.getElementById("heading-length")
    let data_length = document.getElementById("data-length")    
    let metersPerFeet = 0.3048;
    let feetsPerMeter = 3.28084;    
    let heading = "Length Meter/Feet"
    let meters = val * feetsPerMeter
    let feets = val * metersPerFeet
    let data = `${val} meters = ${feets} feets | ${val} feets = ${meters} meters`
    heading_length.textContent = heading
    data_length.textContent = data    
}

function volume() {
    let heading_volume = document.getElementById("heading-volume")
    let data_volume = document.getElementById("data-volume")    
    let litersPerGallon = 3.78541;
    let gallonsPerLiter = 0.264172;      
    let heading = "Volume Liters/Gallons"
    let gallons = val * gallonsPerLiter
    let litters = val * litersPerGallon
    let data = `${val} gallons = ${litters} litters | ${val} litters = ${gallons} gallons`
    heading_volume.textContent = heading
    data_volume.textContent = data
}

function mass() {
    let heading_mass = document.getElementById("heading-mass")
    let data_mass = document.getElementById("data-mass") 
    let kgsPerLb = 3.78541;
    let lbsPerKg = 0.264172;      
    let heading = "Mass Kilos/Pounds"
    let kgs = val * kgsPerLb
    let lbs = val * lbsPerKg
    let data = `${val} kgs = ${lbs} lbs | ${val} lbs = ${kgs} kgs`
    heading_mass.textContent = heading
    data_mass.textContent = data

}
