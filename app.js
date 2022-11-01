
//need to change direction based of direction I'm faceing 
//turnAround points to image in opposite array that switches current array and 
//array of images

let images = [

  //LOBBY
  //POSITION ONE
  {
      image:"images/lobby-1-F-1st.JPG", 
      forward:"images/lobby-3-F-1st.JPG", 
      backward:"images/lobby-1-B-1st.JPG", 
      left:"images/lobby-1-L-1st.JPG", 
      right:null,
   
  },
  {
      image:"images/lobby-1-B-1st.JPG",
      forward: null,
      backward:"images/lobby-1-F-1st.JPG",
      left:null, 
      right:"images/lobby-1-L-1st.JPG",
      turnAround:null
  },
  {
      image:"images/lobby-1-L-1st.JPG",
      forward:"images/lobby-2-F-1st.JPG", 
      backward:"images/lobby-1-F-1st.JPG", 
      left:null, 
      right:null,
      turnAround:null
  },   
  //LOBBY
  //POSITION TWO POSITION TWO POSITION TWO POSITION TWO POSITION TWO POSITION TWO
  {
      image:"images/lobby-2-F-1st.JPG", 
      forward:null, 
      backward:"images/lobby-2-B-1st.JPG", 
      left:null, 
      right:null,
      turnAround:null
  },     
  {
    image:"images/lobby-2-B-1st.JPG", 
    forward:null, 
    backward:"images/lobby-2-F-1st.JPG", 
    left:"images/lobby-2-L-1st.JPG", 
    right:"images/lobby-1-B-1st.JPG",
    turnAround:null
  },     
  {
    image:"images/lobby-2-L-1st.JPG", 
    forward:"images/lobby-3-F-1st.JPG", 
    backward:"images/lobby-2-B-1st.JPG", 
    left:null, 
    right:null,
    turnAround:null
  },     
  //LOBBY
  //POSITION THREE
  {
    image:"images/lobby-3-F-1st.JPG",
    forward:null, 
    backward:"images/lobby-3-B-1st.JPG", 
    left:"images/lobby-3-L-1st.JPG", 
    right:"images/lobby-3-R-1st.JPG",
    turnAround:null
  },   
  {
    image:"images/lobby-3-B-1st.JPG",
    forward:"images/lobby-1-B-1st.JPG", 
    backward:"images/lobby-3-F-1st.JPG", 
    left:null, 
    right:"images/lobby-2-F-1st.JPG",
    turnAround:null
  },   
  {
    image:"images/lobby-3-L-1st.JPG",
    forward:"images/lobby-4-F-1st.JPG", 
    backward:"images/lobby-3-F-1st.JPG", 
    left:null, 
    right:null,
    turnAround:null
  },   
  {
    image:"images/lobby-3-R-1st.JPG",
    forward:null, 
    backward:"images/lobby-3-F-1st.JPG", 
    left:null, 
    right:null,
    turnAround:null
  },   
//LOBBY
//POSITION FOUR
{
  image:"images/lobby-4-F-1st.JPG",
  forward:"images/lobby-5-F-2nd.JPG", 
  backward:"images/lobby-3-F-1st.JPG", 
  left:null, 
  right:null,
  turnAround:null
},   
//LOBBY
//POSITION FIVE
{
  image:"images/lobby-5-F-2nd.JPG",
  forward:null, 
  backward:"images/lobby-5-B-2nd.JPG", 
  left:null, 
  right:null,
  turnAround:null
},   
{
  image:"images/lobby-5-B-2nd.JPG",
  forward:"images/lobby-4-F-1st.JPG", 
  backward:"images/lobby-4-F-1st.JPG", 
  left:null, 
  right:null,
  turnAround:null
}, 
]


//variables
var index = 0;

//initialize image
function loadImage(){
  //add event listener to store button pressed
  
  //initialize image
  var img = document.createElement('img')
    img.src = images[index].image;
    document.getElementById('content').appendChild(img);
    //check buttons' on/off
    buttonOnOff()
}

//iterate image
function loadNextImage(){
  //grab button id and set new image to image held in that index location
  //create img variable to manipulate
  var img = document.getElementById('content').getElementsByTagName('img')[0]
  //replace old image with new
  img.src = images[index].image;
  //function to adjust buttons
  buttonOnOff();
}

//function to check and see if buttons should be enabled or disabled
function buttonOnOff(){
  if(images[index].forward !== null){
    document.getElementById('forward').disabled = false;
  }else{document.getElementById('forward').disabled = true;}
  if(images[index].backward !== null){
    document.getElementById('backward').disabled = false;
  }else{document.getElementById('backward').disabled = true;}
  if(images[index].left !== null){
    document.getElementById('left').disabled = false;
  }else{document.getElementById('left').disabled = true;}
  if(images[index].right !== null){
    document.getElementById('right').disabled = false;
  }else{document.getElementById('right').disabled = true;}

}


//add event listener for click to record button id
//change to else if? add case for wrong input 
function buttonID(direction){
    
  if(direction == 'forward'){
    newImage = images[index].forward
  }
  if(direction == 'backward'){
    newImage = images[index].backward
  }
  if(direction == 'left'){
    newImage = images[index].left
  }
  if(direction == 'right'){
    newImage = images[index].right
  }

  //update image based off direction picked
  index = images.findIndex(Object => {return Object.image == newImage});
}


//



//key listener for arrow key use 
// function setMyKeyDownListener() {
//   window.addEventListener(
//     "keydown",
//     function(event) {MyFunction(event.key)}
//   )
// }

// function MyFunction (the_Key) {
//     if (the_Key = 'ArrowUp'){
//       document.getElementById("forward").click()
//       alert("up")
//     }
//     if (the_Key = 'ArrowLeft'){
//       document.getElementById("left").click()
//       alert("up")
//     }
//     if (the_Key = 'ArrowRight'){
//       document.getElementById("right").click()
//       alert("up")
//     }
//     if (the_Key = 'ArrowDown'){
//       document.getElementById("backward").click()
//       alert("up")
//     }
//    return
// }

document.onkeydown = function(e) {
if(e.key=='ArrowUp'){
  document.getElementById('forward').click();
}
else if(e.key=='ArrowDown'){
  document.getElementById('backward').click();
}
else if(e.key=='ArrowLeft'){
  document.getElementById('left').click();
}
else if(e.key=='ArrowRight'){
  document.getElementById('right').click();
}
else if(e.key=='w'){
  document.getElementById('forward').click();
}
else if(e.key=='s'){
  document.getElementById('backward').click();
}
else if(e.key=='a'){
  document.getElementById('left').click();
}
else if(e.key=='d'){
  document.getElementById('right').click();
}

  
};





