'use strict'

function DataSheet(Name, minHeart, maxHeart, minBlood, maxBlood, minTemp, maxTemp, BodAnom){

    this.Name = Name;

    this.minHeart = minHeart;

    this.maxHeart = maxHeart;

    this.minBlood = minBlood;

    this.maxBlood = maxBlood;

    this.minTemp = minTemp;

    this.maxTemp = maxTemp;

    this.BodAnom = BodAnom;

    this.HeartRate = []

    this.BloodPressure = []

    this.Temperature = []

    DataSheet.all.push(this);
}

DataSheet.prototype.calcHeartRate = function()  {
    for(let i = 0; i++){

        this.HeartRate.push(random(this.minHeart, this.maxHeart));

    }
};

DataSheet.prototype.calcBloodPressure = function(){
    for(let i = 0; i++){
        
        this.BloodPressure.push(random(this.minBlood, this.maxBlood));

    }
};

DataSheet.prototype.calcTemperature = function(){
    for(let i = 0; i++){
        
        this.Temperature.push(random(this.minTemp, this.maxTemp));

    }
};


new DataSheet('Harry', 64, 72, 90, 119, 90, 96, 'grey skin')