'use strict'

function DataSheet(Name, minHeart, maxHeart, minBlood, maxBlood, minTemp, maxTemp, minAcidity, maxAcidity){

    this.Name = Name;

    this.minHeart = minHeart;

    this.maxHeart = maxHeart;

    this.minBlood = minBlood;

    this.maxBlood = maxBlood;

    this.minTemp = minTemp;

    this.maxTemp = maxTemp;

    this.minAcidity = minAcidity;

    this.maxAcidity = maxAcidity;

    DataSheet.all.push(this);
}

