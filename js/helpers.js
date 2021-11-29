let getRandomNumber = (size) => {
  return Math.floor(Math.random() * size);
};

let getDistance = (e, target) => {
  let diffx = e.offsetX - target.x;
  let diffy = e.offsetY - target.y;
  return Math.sqrt(diffx * diffx + diffy * diffy);
};

let getDistanceHint = (distance) => {
  let $map = document.getElementById("map");
  if (distance < 80) {
    return "Boiling hot!!";
  } else if (distance < 120) {
    return "Really hot :O";
  } else if (distance < 160) {
    return "Hot!";
  } else if (distance < 200) {
    return "Warm :P";
  } else if (distance < 240) {
    return "Cold!";
  } else if (distance < 280) {
    return "Really cold xD";
  } else {
    return "It's freezing!!";
  }
};
