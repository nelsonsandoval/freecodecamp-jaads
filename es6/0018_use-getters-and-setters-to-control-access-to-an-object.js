// Only change code below this line
class Thermostat{
  constructor(ftemperature){
    this._celsius = 5/9 * (ftemperature - 32);
  }
  get temperature(){
    return this._celsius;
  }
  set temperature(ftemperature){
    this._celsius = ftemperature;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius