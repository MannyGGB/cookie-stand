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
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    // add a random number to the customersPerHour array
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

seattle.calculateSales();
console.log(seattle);

const cookieSalesSeattle = document.getElementById("salesData");
const articleSeattle = document.createElement("article");

const h2 = document.createElement("h2");
h2.textContent = seattle.location;
articleSeattle.appendChild(h2);

const ul = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]}`;
  ul.appendChild(li);
}
articleSeattle.appendChild(ul);
cookieSalesSeattle.appendChild(articleSeattle);

//
const tokyo = {
  location: "tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    // add a random number to the customersPerHour array
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

tokyo.calculateSales();
console.log(tokyo);

const cookieSalesTokyo = document.getElementById("salesData");
const articleTokyo = document.createElement("article");

const h2a = document.createElement("h2");
h2a.textContent = tokyo.location;
articleTokyo.appendChild(h2a);

const ul1 = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]}`;
  ul1.appendChild(li);
}

articleTokyo.appendChild(ul1);
cookieSalesTokyo.appendChild(articleTokyo);

//
const dubai = {
  location: "dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    // add a random number to the customersPerHour array
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

dubai.calculateSales();
console.log(dubai);

const cookieSalesDubai = document.getElementById("salesData");
const articleDubai = document.createElement("article");

const h2b = document.createElement("h2");
h2b.textContent = dubai.location;
articleDubai.appendChild(h2b);

const ul2 = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]}`;
  ul2.appendChild(li);
}

articleDubai.appendChild(ul2);
cookieSalesDubai.appendChild(articleDubai);

//
const paris = {
  location: "paris",
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    // add a random number to the customersPerHour array
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

paris.calculateSales();
console.log(paris);

const cookieSalesParis = document.getElementById("salesData");
const articleParis = document.createElement("article");

const h2c = document.createElement("h2");
h2c.textContent = paris.location;
articleParis.appendChild(h2c);

const ul3 = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${paris.cookiesPerHour[i]}`;
  ul3.appendChild(li);
}

articleParis.appendChild(ul3);
cookieSalesParis.appendChild(articleParis);

//
const lima = {
  location: "lima",
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    // add a random number to the customersPerHour array
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

lima.calculateSales();
console.log(lima);

const cookieSalesLima = document.getElementById("salesData");
const articleLima = document.createElement("article");

const h2d = document.createElement("h2");
h2d.textContent = lima.location;
articleLima.appendChild(h2d);

const ul4 = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${lima.cookiesPerHour[i]}`;
  ul4.appendChild(li);
}

articleLima.appendChild(ul4);
cookieSalesLima.appendChild(articleLima);
