let petName = "";
let hungerPoints = 50;
let happinessPoints = 50;
let intervalId;

function namePet() {
  petName = prompt("Digite um nome para o seu bichinho");
  document.getElementById("pet-name").textContent = "Nome: " + petName;
}

function feedPet() {
  if (petName === "") {
    alert("Você precisa nomear seu bichinho primeiro!");
  } else {
    hungerPoints -= 10;
    if (hungerPoints < 0) {
      hungerPoints = 0;
    }
    updatePoints();
  }
}

function petPet() {
  if (petName === "") {
    alert("Você precisa nomear seu bichinho primeiro!");
  } else {
    happinessPoints += 10;
    if (happinessPoints > 100) {
      happinessPoints = 100;
    }
    updatePoints();
  }
}

function takePetForAWalk() {
  if (petName === "") {
    alert("Você precisa nomear seu bichinho primeiro!");
  } else {
    happinessPoints += 10;
    if (happinessPoints > 100) {
      happinessPoints = 100;
    }
    hungerPoints += 10;
    if (hungerPoints < 0) {
      hungerPoints = 0;
    }
    updatePoints();
  }
}

function bathePet() {
  if (petName === "") {
    alert("Você precisa nomear seu bichinho primeiro!");
  } else {
    happinessPoints -= 10;
    if (happinessPoints < 0) {
      happinessPoints = 0;
    }
    updatePoints();
  }
}

function updatePoints() {
  document.getElementById("hunger-points").textContent = hungerPoints;
  document.getElementById("happiness-points").textContent = happinessPoints;
  
  if (hungerPoints >= 100 || happinessPoints <= 0) {
    clearInterval(intervalId);
    alert("Seu bichinho morreu :(");
  }
}

function increaseHungerAndDecreaseHappiness() {
  hungerPoints += 10;
  happinessPoints -= 10;
  if (hungerPoints > 100) {
    hungerPoints = 100;
  }
  if (happinessPoints < 0) {
    happinessPoints = 0;
  }
  updatePoints();
}

function startTimer() {
  intervalId = setInterval(increaseHungerAndDecreaseHappiness, 5000);
}

namePet();
startTimer();
