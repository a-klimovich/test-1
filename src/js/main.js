function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.394682, lng: 1.168623},
    zoom: 4
  });
}


var list = document.querySelector('#list');

function addClass() {
  list.classList.add('active')
}

function hideClass() {
  list.classList.remove('active')
}

function homepageMenu_1() {
  let element = document.getElementById("l1");
  element.classList.toggle("active");
}
function homepageMenu_2() {
  let element = document.getElementById("l2");
  element.classList.toggle("active");
}
function homepageMenu_3() {
  let element = document.getElementById("l3");
  element.classList.toggle("active");
}
function homepageMenu_4() {
  let element = document.getElementById("l4");
  element.classList.toggle("active");
}

function mapMenu_1() {
  let element = document.getElementById("lm1");
  element.classList.toggle("active");
}
function mapMenu_2() {
  let element = document.getElementById("lm2");
  element.classList.toggle("active");
}
function mapMenu_3() {
  let element = document.getElementById("lm3");
  element.classList.toggle("active");
}
function mapMenu_4() {
  let element = document.getElementById("lm4");
  element.classList.toggle("active");
}




