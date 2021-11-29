let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clicks = 0;

let width = 400;
let height = 400;

let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

$map.addEventListener("click", function (e) {
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h3>${distanceHint}</h3>`;
  if (distance < 40) {
    alert(`Congrats! You found the treasure in ${clicks} clicks.`);
    location.reload();
  }
});
