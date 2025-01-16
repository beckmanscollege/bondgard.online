var cowBtn = document.querySelector("#cow-button");
var pigBtn = document.querySelector("#pig-button");
var horseBtn = document.querySelector("#horse-button");
var chickenBtn = document.querySelector("#chicken-button");
var catBtn = document.querySelector("#cat-button");
var restartBtn = document.querySelector("#restart-button");

var allImages = [];

cowBtn.onclick = function () {
  document.getElementById("cow-sound").play();
  var cowImg = document.createElement("img");
  cowImg.style.position = "absolute";
  cowImg.style.left = Math.random() * 100 + "%";
  cowImg.style.top = Math.random() * 100 + "%";
  cowImg.style.width = 100 + Math.random() * 100 + "px";

  var randomNumber = Math.random();

  if (randomNumber < 0.5) {
    cowImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/cow-1-pxl-1.2.png?v=1737022090939";
  } else {
    cowImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/cow-2-pxl-1.2.png?v=1737022092985";
  }
  document.body.appendChild(cowImg);
  allImages.push(cowImg);
};

pigBtn.onclick = function () {
  document.getElementById("pig-sound").play();
  var pigImg = document.createElement("img");
  pigImg.style.position = "absolute";
  pigImg.style.left = Math.random() * 100 + "%";
  pigImg.style.top = Math.random() * 100 + "%";
  pigImg.style.width = 100 + Math.random() * 100 + "px";

  var randomNumber = Math.random();

  if (randomNumber < 0.5) {
    pigImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/pig-2-pxl-1.2.png?v=1737022100800";
  } else {
    pigImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/pig-1-pxl-1.2.png?v=1737022099606";
  }
  document.body.appendChild(pigImg);
  allImages.push(pigImg);
};

horseBtn.onclick = function () {
  document.getElementById("horse-sound").play();
  var horseImg = document.createElement("img");
  horseImg.style.position = "absolute";
  horseImg.style.left = Math.random() * 100 + "%";
  horseImg.style.top = Math.random() * 100 + "%";
  horseImg.style.width = 100 + Math.random() * 100 + "px";

  var randomNumber = Math.random();

  if (randomNumber < 0.5) {
    horseImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/horse-1-pxl-1.2.png?v=1737022270645";
  } else {
    horseImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/horse-2-pxl-1.2.png?v=1737022097060";
  }
  document.body.appendChild(horseImg);
  allImages.push(horseImg);
};

chickenBtn.onclick = function () {
  document.getElementById("chicken-sound").play();
  var chickenImg = document.createElement("img");
  chickenImg.style.position = "absolute";
  chickenImg.style.left = Math.random() * 100 + "%";
  chickenImg.style.top = Math.random() * 100 + "%";
  chickenImg.style.width = 100 + Math.random() * 100 + "px";

  var randomNumber = Math.random();

  if (randomNumber < 0.45) {
    chickenImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/hen-1-pxl-1.2.png?v=1737022083527";
  } else if (randomNumber < 0.9) {
    chickenImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/hen-2-pxl-1.2.png?v=1737022085485";
  } else {
    chickenImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/chicken-1-pxl-1.2.png?v=1737022079560";
  }
  document.body.appendChild(chickenImg);
  allImages.push(chickenImg);
};

catBtn.onclick = function () {
  document.getElementById("cat-sound").play();
  var catImg = document.createElement("img");
  catImg.style.position = "absolute";
  catImg.style.left = Math.random() * 100 + "%";
  catImg.style.top = Math.random() * 100 + "%";
  catImg.style.width = 100 + Math.random() * 100 + "px";

  var randomNumber = Math.random();

  if (randomNumber < 0.5) {
    catImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/cat-2-pxl-1.2.png?v=1737027248394";
  } else {
    catImg.src =
      "https://cdn.glitch.global/00ffaf65-2464-4b67-80f5-c035446fb0f9/cat-1-pxl-1.2.png?v=1737027250366";
  }
  document.body.appendChild(catImg);
  allImages.push(catImg);
};

restartBtn.onclick = function () {
  document.getElementById("restart-sound").play();

  allImages.forEach(function (img) {
    img.remove();
  });

  allImages = [];
};
