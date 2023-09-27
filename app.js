"use strict";

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
const table = document.getElementById("salesData");
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Store(location, minCust, maxCust, avgCookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
}
Store.prototype.createStore = function () {
  this.calculateSales();

  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = this.location;
  tr.appendChild(th);
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
  table.appendChild(tr);

  const totalTd = document.createElement("td");

  totalTd.textContent = this.totalCookieSold;
  tr.appendChild(totalTd);
};
Store.prototype.calculateSales = function () {
  // add a random number to the customersPerHour array
  for (let i = 0; i < hours.length; i++) {
    // get the number of customers for this hour
    const hourCustomers = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCustomers);

    // get the number of cookies sold this hour
    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
    this.cookiesPerHour.push(hourCookiesSold);

    // increase the total cookies by adding this hours sales to it
    this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    console.log(this.totalCookieSold);
  }
};

const seattle = new Store("seattle", 23, 65, 6.3);
const tokyo = new Store("tokyo", 3, 24, 1.2);
const dubai = new Store("dubai", 11, 38, 3.7);
const paris = new Store("paris", 20, 38, 2.3);
const lima = new Store("lima", 2, 16, 4.6);

const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  headerRow.appendChild(th);
}
const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

table.appendChild(headerRow);

seattle.createStore();
tokyo.createStore();
dubai.createStore();
paris.createStore();
lima.createStore();
