
//need to change direction based of direction I'm faceing 
//turnAround points to image in opposite array that switches current array and 
//array of images

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
    console.log(index)
    console.log(images[index].image)
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
  console.log(index)
  console.log(images[index].image)
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



document.onkeydown = function(e) {
 //maybe add to if statements?
  e.preventDefault(); 
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





