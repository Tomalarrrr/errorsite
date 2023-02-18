const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
var dots = elem.getAttribute('data-dots')
var marked = elem.getAttribute('data-percent');
var percent = Math.floor(dots * marked / 100);
var rotate = 360 / dots;
var points = "";
for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
}
elem.innerHTML = points;
const pointsMarked = elem.querySelectorAll('.points');
for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add('marked')
}})
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

$('.textdial h3').eq(0).text(monthNames[currentMonth+2]);
$('.textdial h3').eq(1).text(monthNames[currentMonth+3]);
$('.textdial h3').eq(2).text(monthNames[currentMonth+4]);