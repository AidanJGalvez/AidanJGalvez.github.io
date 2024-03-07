
document.querySelector('services').addEventListener('click', function() {
    document.querySelector('.smalldesc').classList.toggle('expand');
  });

document.querySelector('section').addEventListener('click', function() {
    document.querySelector('.smalldesc').classList.toggle('expand');
  });

document.querySelector('aside').addEventListener('click', function() {
    document.querySelector('.smalldesc').classList.toggle('expand');
  });

document.querySelector('code').addEventListener('click', function() {
    document.querySelector('.smalldesc').classList.toggle('expand');
  });

function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

function openLocation() {
  document.getElementById("myLocationpanel").style.width = "100%";
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

function closeLocation() {
  document.getElementById("myLocationpanel").style.width = "0";
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var acc = document.getElementsByClassName("services");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var acc = document.getElementsByClassName("section");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var acc = document.getElementsByClassName("aside");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


var acc = document.getElementsByClassName("code");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

document.body.style.position = 'fixed';
document.body.style.top = `-${window.scrollY}px`;
document.body.style.position = '';
document.body.style.top = '';

const scrollY = document.body.style.top;
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);
