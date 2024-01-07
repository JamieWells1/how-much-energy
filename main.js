let mass = 0;

function calculate() {
  const velocityUnitDropdown = document.getElementById("velocityUnitDropdown");
  const objectDropdown = document.getElementById("objectDropdown");
  const speedInput = document.getElementById("speedInput");
  let unit =
    velocityUnitDropdown.options[velocityUnitDropdown.selectedIndex].value;
  let object = objectDropdown.options[objectDropdown.selectedIndex].value;
  let speed = speedInput.value;
  if (unit == "mph") {
    velocity = speed * 0.44704;
  } else if (unit == "kph") {
    velocity = speed * 0.277778;
  } else if (unit == "ms") {
    velocity = speed;
  }

  if (object == "freightTrain") {
    mass = 11300000;
  } else if (object == "neutrino") {
    mass = 0.000000000000000000000000000000000000125;
  } else if (object == "upQuark") {
    mass = 0.0000000000000000000000000000035;
  } else if (object == "electron") {
    mass = 0.00000000000000000000000000000016;
  } else if (object == "proton") {
    mass = 0.00000000000000000000000000167;
  } else if (object == "uraniumAtom") {
    mass = 0.00000000000000000000000039;
  } else if (object == "glucoseMolecule") {
    mass = 0.0000000000000000000000003;
  } else if (object == "ant") {
    mass = 0.000002;
  } else if (object == "pea") {
    mass = 0.0002;
  } else if (object == "marble") {
    mass = 0.0065;
  } else if (object == "football") {
    mass = 0.45;
  } else if (object == "human") {
    mass = 70;
  } else if (object == "car") {
    mass = 2000;
  } else if (object == "burjKhalifa") {
    mass = 500000000;
  } else if (object == "moon") {
    mass = 7350000000000000000000000;
  } else if (object == "earth") {
    mass = 597000000000000000000000000;
  } else if (object == "jupiter") {
    mass = 19000000000000000000000000000;
  } else if (object == "sun") {
    mass = 2000000000000000000000000000000;
  } else if (object == "uyScuti") {
    mass = 50000000000000000000000000000000;
  } else if (object == "neutronStar") {
    mass = 4000000000000000000000000000000;
  } else if (object == "milkyWay") {
    mass = 6000000000000000000000000000000000000000000;
  } else if (object == "largestBlackHole") {
    mass = 130000000000000000000000000000000000000000;
  }

  energy = 0.5 * mass * velocity ** 2;

  let energyDisplay = energy.toLocaleString();

  energyText = document.getElementById("energyDisplay");
  energyText.innerText = energyDisplay + " Joules";
}
