jQuery(function() {

  let score = 0;
  let body = document.body
  let scoreKeeper = document.getElementById('score')
  scoreKeeper.innerText = "Your Score " + score;
  //set custom cursor

  body.style.cursor = "url('fishy2.png'), auto"


//Create rocks on the left and right of the water:
function sideRocksLeft(){
  let srl=document.createElement("img")
  srl.id='rocksleft'
  srl.src='leftrockslong.png'
  body.appendChild(srl);
  srl.onmouseover = function(){
    alert("Fish don't swim on rocks!")
  }
}
sideRocksLeft();

function sideRocksRight(){
  let srr=document.createElement("img")
  srr.id='rocksright'
  srr.src='rightrockslong.png'
  body.appendChild(srr);
  srr.onmouseover = function (){
    alert("Fish don't swim on rocks!")
  }
}
sideRocksRight();


// create flowing cats and make them move randomly:
function createCats(){
  let cat =document.createElement("img")
  cat.className='cat1'
  cat.src='cat7.png'
  body.appendChild(cat)
  cat.onmouseover = function() {
    gameOver()
  }
moveCat(cat);
};

function createFood(){
  let food=document.createElement("img")
  food.className='food1'
  food.id='crab'
  food.src='crab.png'
  body.appendChild(food)
  food.onmouseover = function(){
    getPoints()

  }
  moveFood(food)
  };

function createFoodTwo(){
  let food2=document.createElement("img")
  food2.className='food1'
  food2.id='shell'
  food2.src='shell.png'
  body.appendChild(food2)
  food2.onmouseover = function(){
      getPointsTwo()

    }
    moveFoodTwo(food2)
    };

function moveCat (cat){
  //limit window innerwidth to make cats fall between side rocks:
  let rand = Math.floor(Math.random() * (window.innerWidth-200))
  if (rand < 200){
    rand +=200
  }
  cat.setAttribute('style', "left: " + rand+"px; animation-duration: " +
  Math.floor(Math.random() * 6 + 3) + "s; animation-delay: " +
  Math.floor(Math.random() * 12 + 1) + "s")
};

function moveFood (food){
  //limit window innerwidth to make cats fall between side rocks:
  let rand = Math.floor(Math.random() * (window.innerWidth-200))
  if (rand < 200){
    rand +=200
  }
  food.setAttribute('style', "left: " + rand+"px; animation-duration: " +
  Math.floor(Math.random() * 12 + 3) + "s; animation-delay: " +
  Math.floor(Math.random() * 40 + 4) + "s")
};

function moveFoodTwo (food2){
  //limit window innerwidth to make cats fall between side rocks:
  let rand = Math.floor(Math.random() * (window.innerWidth-200))
  if (rand < 200){
    rand +=200
  }
  food2.setAttribute('style', "left: " + rand+"px; animation-duration: " +
  Math.floor(Math.random() * 8 + 3) + "s; animation-delay: " +
  Math.floor(Math.random() * 50 + 20) + "s")
};

//multiply the number of cats
function multiplyCats() {
  for (let i=0; i<10; i++){
    createCats();
  }
}
multiplyCats();

function multiplyFood() {
  for (let i=0; i<20; i++){
    createFood();
  }
  }
multiplyFood();

function multiplyFoodTwo() {
  for (let i=0; i<20; i++){
    createFoodTwo();
  }
  }
multiplyFoodTwo();

function getPoints() {
$("#crab").remove()
score+=10
scoreKeeper.innerText = "Your Score " + score
}

function getPointsTwo() {
$("#shell").remove()
score+=20
scoreKeeper.innerText = "Your Score " + score
}

function timesUp(){
  let water= document.getElementById('water')
  let link = '<a class="playAgain" href="index.html">Play Again!!!</a>';
  $("#water").append(link)
  $(".cat1").hide()
  $("#rocksleft").hide()
  $("#rocksright").hide()
  $("#counter").hide()
  $(".food1").hide()
}


function countdown() {
    var seconds = 61;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > -1 ) {
            setTimeout(tick, 1000);
        } else {
            timesUp()
        }
    }
    tick();
}
countdown();

function gameOver(){
  let water= document.getElementById('water')
  let link = '<a class="playAgain" href="index.html">Play Again!!!</a>';
  water.setAttribute('style', "background-image: url(catfluff1.jpg)");
  $("#water").append(link)
  $(".cat1").hide()
  $("#rocksleft").hide()
  $("#rocksright").hide()
  $("#score").hide()
  $(".food1").hide()
  $("#counter").hide()
  body.style.cursor = "url('fishy3.png'), auto"
  alert("Meeeowch! " + "Your final score was " + score)
}

});
