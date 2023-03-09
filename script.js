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

    this.

    DataSheet.all.push(this);
}

DataSheet.prototype.calcHeartRate = function(){
    for(let i = 0; i++){

        this.HeartRate.push(random(this.minHeart, this.maxHeart));

    }
};

DataSheet.prototype.calcBloodPressure = function(){
    this.calcHeartRate();

    for(let i = 0; i++){
        
        this.BloodPressure.push(random(this.minBlood, this.maxBlood));

    }
}