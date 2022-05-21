console.log("script.js is running..");

//COLLAPSIBLE BOX (Logo) - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible //
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//COLLAPSIBLE BOX (Typografi) - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible //
var coll = document.getElementsByClassName("collapsible-typografi");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//COLLAPSIBLE BOX (Knapper1) - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible //
let collButton = document.querySelectorAll("[class*=collapsible]");

console.log(collButton);

for (let i = 0; i < collButton.length; i++) {
  collButton[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    console.log(content);
    content.classList.toggle("invisible");
  });
}

//COLLAPSIBLE BOX (Layout) - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible //
var coll = document.getElementsByClassName("collapsible-layout");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//Search function --> formular side
let searchable = [
  'Antenna',
  'Antenna measurements',
  'Antenna flexibility',
  'Antenna range',
  'Missions',
  'Newly created mission',
  'Caution',
  'Equipment',
  'Operator',
  'Flexibility and range',
  'Gathering data',
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrappersearch');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results
    .map((item) => {
      return `<li><a href="searchresults.html">${item}</a></li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML ='<ul>${content}</ul>';
}
