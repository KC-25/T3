'use strict'
console.log('hello world')

const TableElement = document.getElementById('E');

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

    // DataSheet.all.push(this);
}

DataSheet.prototype.calcHeartRate = function(){
    for(let i = 0; i <= 180; i++){

        this.HeartRate.push(random(this.minHeart, this.maxHeart));

    }
};

DataSheet.prototype.calcBloodPressure = function(){
    for(let i = 0; i <= 120; i++){
        
        this.BloodPressure.push(random(this.minBlood, this.maxBlood));

    }
};

DataSheet.prototype.calcTemperature = function(){
    for(let i = 0; i <= 114; i++){
        
        this.Temperature.push(random(this.minTemp, this.maxTemp));

    }
};

DataSheet.prototype.render = function(){
    this.calcHeartRate();
    this.calcBloodPressure();
    this.calcTemperature();

    const tableRow = document.createElement('tr');

    let tableDataElement = document.createElement('td');

    tableDataElement.textContent = this.Name;

    tableRow.appendChild(tableDataElement)

    for(let i = 0; i <= 10;  i++){
        tableDataElement = document.createElement('td');

        tableDataElement.textContent = this.HeartRate[i];

        tableRow.appendChild(tableDataElement);
    }
};

DataSheet.all = [];

new DataSheet('Harry', 64, 72, 90, 119, 90, 96, 'grey skin');
