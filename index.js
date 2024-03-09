class SmartTeaK {
    constructor(teaType, initialTemperature, brewingTimeSeconds) {
      this.teaType = teaType;
      this.currentTemperature = initialTemperature;
      this.targetTemperature = initialTemperature;
      this.brewingTimeSeconds = brewingTimeSeconds;
      this.isBrewing = false;
    }
  
    setTargetTemperature(targetTemperature) {
      this.targetTemperature = targetTemperature;
      console.log(`Target temperature set to ${this.targetTemperature}°C for ${this.teaType}.`);
    }
  
    startBrewing() {
      if (!this.isBrewing) {
        console.log(`SmartTeaK is brewing your ${this.teaType}. Please wait for ${this.brewingTimeSeconds} seconds.`);
        this.isBrewing = true;
  
        setTimeout(() => {
          console.log(`Your SmartTeaK-brewed ${this.teaType} is ready! Enjoy.`);
          this.isBrewing = false;
        }, this.brewingTimeSeconds * 1000);
      } else {
        console.log('SmartTeaK is already brewing. Please wait for it to finish.');
      }
    }
  
    displayTeaKettleInfo() {
      console.log(`
        SmartTeaK Information:
        Tea Type: ${this.teaType}
        Current Temperature: ${this.currentTemperature}°C
        Target Temperature: ${this.targetTemperature}°C
        Brewing Time: ${this.brewingTimeSeconds} seconds
        Brewing Status: ${this.isBrewing ? 'In Progress' : 'Not Brewing'}
      `);
    }
  }
  
  // Example usage
  const smartEarlGreyTeaKettle = new SmartTeaK('Earl Grey', 80, 180);
  
  smartEarlGreyTeaKettle.displayTeaKettleInfo();
  smartEarlGreyTeaKettle.setTargetTemperature(90);
  smartEarlGreyTeaKettle.startBrewing();
  