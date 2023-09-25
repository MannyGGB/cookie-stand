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
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

seattle.calculateSales();
console.log(seattle);

const cookieSales = document.getElementById("cookie sales");
const article = document.createElement("article");

const h2 = document.createElement("h2");
h2.textContent = seattle.location;
article.appendChild(h2);

const ul = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]}`;
  ul.appendChild(li);
}

article.appendChild(ul);
cookieSales.appendChild(article);

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
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

tokyo.calculateSales();
console.log(tokyo);

const cookieSales1 = document.getElementById("cookie sales");
const article1 = document.createElement("article");

const h2a = document.createElement("h2");
h2a.textContent = tokyo.location;
article.appendChild(h2a);

const ul1 = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]}`;
  ul1.appendChild(li);
}

article1.appendChild(ul1);
cookieSales.appendChild(article1);

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
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

dubai.calculateSales();
console.log(dubai);

const cookieSales2 = document.getElementById("cookie sales");
const article2 = document.createElement("article");

const h2b = document.createElement("h2");
h2b.textContent = dubai.location;
article2.appendChild(h2b);

const ul2 = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]}`;
  ul2.appendChild(li);
}

article2.appendChild(ul2);
cookieSales.appendChild(article2);

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
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

paris.calculateSales();
console.log(paris);

const cookieSales3 = document.getElementById("cookie sales");
const article3 = document.createElement("article");

const h2c = document.createElement("h2");
h2c.textContent = paris.location;
article3.appendChild(h2c);

const ul3 = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]}`;
  ul3.appendChild(li);
}

article3.appendChild(ul3);
cookieSales.appendChild(article3);

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
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

lima.calculateSales();
console.log(lima);

const cookieSales4 = document.getElementById("cookie sales");
const article4 = document.createElement("article");

const h2d = document.createElement("h2");
h2d.textContent = lima.location;
article4.appendChild(h2d);

const ul4 = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]}`;
  ul4.appendChild(li);
}

article4.appendChild(ul4);
cookieSales.appendChild(article4);
