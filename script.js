// 'use strict'
// console.log('hello world')

// function DataSheet(Name, minHeart, maxHeart, minBlood, maxBlood, minTemp, maxTemp, BodAnom){

//     this.Name = Name;

//     this.minHeart = minHeart;

//     this.maxHeart = maxHeart;

//     this.minBlood = minBlood;

//     this.maxBlood = maxBlood;

//     this.minTemp = minTemp;

//     this.maxTemp = maxTemp;

//     this.BodAnom = BodAnom;

//     this.HeartRate = []

//     this.BloodPressure = []

//     this.Temperature = []

//     // DataSheet.all.push(this);
// }

// DataSheet.prototype.calcHeartRate = function(){
//     for(let i = 0; i <= 180; i++){

//         this.HeartRate.push(random(this.minHeart, this.maxHeart));

//     }
// };

// DataSheet.prototype.calcBloodPressure = function(){
//     for(let i = 0; i <= 120; i++){
        
//         this.BloodPressure.push(random(this.minBlood, this.maxBlood));

//     }
// };

// DataSheet.prototype.calcTemperature = function(){
//     for(let i = 0; i <= 114; i++){
        
//         this.Temperature.push(random(this.minTemp, this.maxTemp));

//     }
// };

// DataSheet.prototype.render = function(){
//     this.calcHeartRate();
//     this.calcBloodPressure();
//     this.calcTemperature();


//     let tableDataElement = document.createElement('td');

//     tableDataElement.textContent = this.Name;

//     tableRow.appendChild(tableDataElement)


//         tableDataElement.textContent = this.HeartRate[i];

//         tableRow.appendChild(tableDataElement);
//     }
// };



// new DataSheet('Harry', 64, 72, 90, 119, 90, 96, 'grey skin');

'use strict'

console.log('hello world');
// Karen Westly N
// ***************Heart***************
const randomNumberElementKWH = document.getElementById("heartKW");
const randomHeartKW = Math.floor(Math.random() * 100) + 60;
randomNumberElementKWH.innerHTML = randomHeartKW;
// ***************Blood Pressure***************
const randomNumberElementKWB = document.getElementById("bloodKW");
const randomBloodKW = Math.floor(Math.random() * 120) + 80;
randomNumberElementKWB.innerHTML = randomBloodKW;
// ***************Temprature***************
const randomNumberElementKWT = document.getElementById("tempKW");
const randomTempKW = Math.floor(Math.random() * 95) + 85;
randomNumberElementKWT.innerHTML = randomTempKW;

// Kirby Dillon Y
// ***************Heart***************
const randomNumberElementKDH = document.getElementById("heartKD");
const randomHeartKD = Math.floor(Math.random() * 59) + 1;
randomNumberElementKDH.innerHTML = randomHeartKD;
// ***************Blood Pressure***************
const randomNumberElementKDB = document.getElementById("bloodKD");
const randomBloodKD = Math.floor(Math.random() * 120) + 80;
randomNumberElementKDB.innerHTML = randomBloodKD;
// ***************Temprature***************
const randomNumberElementKDT = document.getElementById("tempKD");
const randomTempKD = Math.floor(Math.random() * 95) + 85;
randomNumberElementKDT.innerHTML = randomTempKD;

// Mariabella Edwena Y
// ***************Heart***************
const randomNumberElementMEH = document.getElementById("heartME");
const randomHeartME = Math.floor(Math.random() * 100) + 60;
randomNumberElementMEH.innerHTML = randomHeartME;
// ***************Blood Pressure***************
const randomNumberElementMEB = document.getElementById("bloodME");
const randomBloodME = Math.floor(Math.random() * 120) + 80;
randomNumberElementMEB.innerHTML = randomBloodME;
// ***************Temprature***************
const randomNumberElementMET = document.getElementById("tempME");
const randomTempME = Math.floor(Math.random() * 200) + 150;
randomNumberElementMET.innerHTML = randomTempME;

// Theobald Hoyt N
// ***************Heart***************
const randomNumberElementTHH = document.getElementById("heartTH");
const randomHeartTH = Math.floor(Math.random() * 100) + 80;
randomNumberElementTHH.innerHTML = randomHeartTH;
// ***************Blood Pressure***************
const randomNumberElementTHB = document.getElementById("bloodTH");
const randomBloodTH = Math.floor(Math.random() * 120) + 80;
randomNumberElementTHB.innerHTML = randomBloodTH;
// ***************Temprature***************
const randomNumberElementTHT = document.getElementById("tempTH");
const randomTempTH = Math.floor(Math.random() * 100) + 90;
randomNumberElementTHT.innerHTML = randomTempTH;

// BUTTONS
const buttons =document.querySelectorAll(".No");
const threshold = 2;
const url = "page.html";

const clickCounts = {};
buttons.forEach((button) => {
    clickCounts[button.id] = 0;
        button.addEventListener("click", function() {
          clickCounts[button.id]++;
          if (clickCounts[button.id] >= threshold) {
            window.location.href = url;
          }
        });
    });

    // BUTTONS
const buttonsy =document.querySelectorAll(".Yes");
const thresholdy = 4;
const urly = "page2.html";

const clickCountsy = {};
buttonsy.forEach((button) => {
    clickCountsy[button.id] = 0;
        button.addEventListener("click", function() {
          clickCountsy[button.id]++;
          if (clickCountsy[button.id] >= thresholdy) {
            window.location.href = urly;
          }
        });
    });
// const No = document.querySelectorAll(".No");
// let clickCount1 = 0;

// No.addEventListener("click", () => {
//     clickCount1++;

//     No.innerText = 'No';

//     if (clickCount1 >= 2){
//             window.location.href = "page.html";
//         }
//     }
// );
