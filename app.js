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
  table.appendChild(tr);
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
const stores = [
  new Store("Seattle", 23, 65, 6.3),
  new Store("Tokyo", 3, 24, 1.2),
  new Store("Dubai", 11, 38, 3.7),
  new Store("Paris", 20, 38, 2.3),
  new Store("Lima", 2, 16, 4.6),
];

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

for (let i = 0; i < stores.length; i++) {
  stores[i].createStore();
}

const form = document.getElementById("newShop");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const location = event.target.location.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const avgCookiesPerCust = event.target.avgCookiesPerCust.value;

  const newShop = new Store(location, +minCust, +maxCust, +avgCookiesPerCust); //adding the + makes sure the variable is a number

  newShop.createStore();
  renderTotalRow();
});

function renderTotalRow() {
  const oldTr = document.getElementById("totalrow");
  oldTr?.remove();

  const tr = document.createElement("tr");
  tr.setAttribute("id", "totalrow");
  const th = document.createElement("th");
  th.textContent = "Hourly Total";
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let k = 0; k < stores.length; k++) {
      hourlyTotal = hourlyTotal + stores[k].cookiesPerHour[i];
    }
    const td = document.createElement("td");
    td.textContent = hourlyTotal;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
renderTotalRow();
