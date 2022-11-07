
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
      forward:"first/cr-1-f.JPG", 
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
    left:"images/lobby-3-B-1st.JPG", 
    right:null,
    turnAround:null
  },   
  {
    image:"images/lobby-3-R-1st.JPG",
    forward:"images/100S-20-F.JPG", 
    backward:"images/lobby-33-F.JPG", 
    left:null, 
    right:null,
    turnAround:null
  }, 
  {
    image:"images/lobby-33-F.JPG", 
    forward:"images/lobby-3-L-1st.JPG", 
    backward:"images/lobby-3-R-1st.JPG", 
    left:"images/lobby-3-B-1st.JPG", 
    right:null
    },  
//LOBBY
//POSITION FOUR
{
  image:"images/lobby-4-F-1st.JPG",
  forward:"images/lobby-5-F-2nd.JPG", 
  backward:null, 
  left:null, 
  right:"images/lobby-S-R.JPG",
  turnAround:null
},   
{
  image:"images/lobby-S-R.JPG",
  forward:"images/lobby-3-R-1st.JPG", 
  backward:null, 
  left:"images/lobby-4-F-1st.JPG", 
  right:null,
  turnAround:null
},  
//LOBBY
//POSITION FIVE
{
  image:"images/lobby-5-F-2nd.JPG",
  forward:"images/200S-1-F.JPG", 
  backward:"images/lobby-5-B-2nd.JPG", 
  left:null, 
  right:null,
  turnAround:null
},   
{
  image:"images/lobby-5-B-2nd.JPG",
  forward:"images/lobby-4-F-1st.JPG", 
  backward:"images/lobby-5-F-2nd.JPG", 
  left:null, 
  right:null,
  turnAround:null
}, 
 {
  image:"images/100S-13-B.JPG", 
  forward:null, 
  backward:"images/100S-13-F.JPG", 
  left:"images/200S-12-R.JPG", 
  right:null
  },
  {
  image:"images/100S-13-F.JPG", 
  forward:"images/100S-14-F.JPG", 
  backward:"images/100S-13-B.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-14-F.JPG", 
  forward:"images/100S-15-F.JPG", 
  backward:"images/100S-15-B.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-15-B.JPG", 
  forward:"images/100S-13-B.JPG", 
  backward:"images/100S-15-F.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-15-B.JPG", 
  forward:null, 
  backward:"images/100S-15-F.JPG", 
  left:null, 
  right:null
  },
    {
  image:"images/100S-15-F.JPG", 
  forward:"images/100S-16-F.JPG", 
  backward:"images/100S-15-B.JPG", 
  left:null, 
  right:null
  },
   {
  image:"images/100S-16-F.JPG", 
  forward:"images/100S-17-F.JPG", 
  backward:"images/100S-16-B.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-16-B.JPG", 
  forward:"images/100S-33-F.JPG", 
  backward:"images/100S-16-F.JPG", 
  left:null, 
  right:null
   },
   {
  image:"images/100S-33-F.JPG", 
  forward:"images/100S-15-B.JPG", 
  backward:"images/100S-16-F.JPG", 
  left:null, 
  right:null
  },
   {
  image:"images/100S-17-F.JPG", 
  forward:"images/100S-18-F.JPG", 
  backward:"images/100S-16-B.JPG", 
  left:null, 
  right:null
  },
{
  image:"images/100S-18-F.JPG", 
  forward:"images/100S-19-F.JPG", 
  backward:"images/100S-18-B.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-18-B.JPG", 
  forward:"images/100S-16-B.JPG", 
  backward:"images/100S-18-F.JPG", 
  left:null, 
  right:null
  },


 {
 image:"images/100S-19-F.JPG", 
 forward:"images/lobby-33-F.JPG", 
 backward:"images/100S-19-B.JPG", 
 left:null, 
 right:null
  },
{
 image:"images/100S-19-B.JPG", 
 forward:"images/100S-18-B.JPG", 
 backward:"images/100S-19-F.JPG", 
 left:null, 
 right:null
},

  {
  image:"images/100S-13-F.JPG", 
  forward:"images/100S-14-F.JPG", 
  backward:"images/100S-13-B.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-14-F.JPG", 
  forward:"images/100S-15-F.JPG", 
  backward:"images/100S-15-B.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-15-B.JPG", 
  forward:"images/100S-13-B.JPG", 
  backward:"images/100S-15-F.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-15-B.JPG", 
  forward:null, 
  backward:"images/100S-15-F.JPG", 
  left:null, 
  right:null
  },
    {
  image:"images/100S-15-F.JPG", 
  forward:"images/100S-16-F.JPG", 
  backward:"images/100S-15-B.JPG", 
  left:null, 
  right:null
  },
   {
  image:"images/100S-16-F.JPG", 
  forward:"images/100S-17-F.JPG", 
  backward:"images/100S-16-B.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-16-B.JPG", 
  forward:"images/100S-33-F.JPG", 
  backward:"images/100S-16-F.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-33-F.JPG", 
  forward:"images/100S-15-B.JPG", 
  backward:"images/100S-16-F.JPG", 
  left:null, 
  right:null
  },
{
  image:"images/100S-17-F.JPG", 
  forward:"images/100S-18-F.JPG", 
  backward:"images/100S-16-B.JPG", 
  left:null, 
  right:null
  },
{
  image:"images/100S-18-F.JPG", 
  forward:"images/100S-19-F.JPG", 
  backward:"images/100S-18-B.JPG", 
  left:null, 
  right:null
  },
  {
  image:"images/100S-18-B.JPG", 
  forward:"images/100S-16-B.JPG", 
  backward:"images/100S-18-F.JPG", 
  left:null, 
  right:null
  },


 {
  image:"images/100S-19-F.JPG", 
  forward:"images/lobby-33-F.JPG", 
  backward:"images/100S-19-B.JPG", 
  left:null, 
  right:null
  },
{
  image:"images/100S-19-B.JPG", 
   forward:"images/100S-18-B.JPG", 
  backward:"images/100S-19-F.JPG", 
  left:null, 
  right:null
},
{
  image:"images/100S-20-F.JPG",
  forward:"images/100S-19-B.JPG", 
  backward:"images/lobby-33-F.JPG", 
  left:null, 
  right:null,
  turnAround:null
}, 

//SECOND FLOOR
{
  image:"images/200S-1-F.JPG",
  forward:"images/200S-2-F.JPG", 
  backward:"images/200S-1-B.JPG", 
  left:"images/200S-1-L.JPG", 
  right:"images/200S-1-R.JPG",
  turnAround:null
},
{
  image:"images/200S-1-B.JPG",
  forward:"images/lobby-5-B-2nd.JPG", 
  backward:"images/200S-1-F.JPG", 
  left:"images/200S-1-R.JPG", 
  right:"images/200S-1-L.JPG",
  turnAround:null
},

{
  image:"images/200S-1-L.JPG",
  forward:"images/200S-3-F.JPG", 
  backward:null, 
  left:"images/200S-1-B.JPG", 
  right:"images/200S-1-F.JPG",
  turnAround:null
},
{
  image:"images/200S-1-R.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-1-F.JPG", 
  right:"images/200S-1-B.JPG",
  turnAround:null
},
{
  image:"images/200S-2-F.JPG",
  forward:"images/200S-4-F.JPG", 
  backward:"images/200S-2-B.JPG", 
  left:"images/200S-2-L.JPG", 
  right:null,
  turnAround:null
},
{
  image:"images/200S-2-B.JPG",
  forward:"images/200S-1-B.JPG", 
  backward:"images/200S-2-F.JPG", 
  left:"images/200S-1-R.JPG", 
  right:"images/200S-2-L.JPG",
  turnAround:null
},
{
  image:"images/200S-2-L.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-2-B.JPG", 
  right:"images/200S-2-F.JPG",
  turnAround:null
},
{
  image:"images/200S-3-F.JPG",
  forward:null, 
  backward:"images/200S-3-B.JPG", 
  left:"images/200S-3-L.JPG", 
  right:null,
  turnAround:null
},
{
  image:"images/200S-3-L.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-3-B.JPG", 
  right:"images/200S-3-F.JPG",
  turnAround:null
},
{
  image:"images/200S-3-B.JPG",
  forward:"images/200S-1-F.JPG", 
  backward:"images/200S-3-F.JPG", 
  left:null, 
  right:"images/200S-3-L.JPG",
  turnAround:null
},
{
  image:"images/200S-4-F.JPG",
  forward:"images/200S-5-F.JPG", 
  backward:"images/200S-4-B.JPG", 
  left:"images/200S-4-L.JPG", 
  right:"images/200S-4-R.JPG",
  turnAround:null
},
{
  image:"images/200S-4-B.JPG",
  forward:"images/200S-2-B.JPG", 
  backward:null, 
  left:"images/200S-4-R.JPG", 
  right:"images/200S-4-L.JPG",
  turnAround:null
},
{
  image:"images/200S-4-L.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-5-F.JPG", 
  right:"images/200S-4-F.JPG",
  turnAround:null
},
{
  image:"images/200S-4-R.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-5-F.JPG", 
  right:"images/200S-4-B.JPG",
  turnAround:null
},
{
  image:"images/200S-5-F.JPG",
  forward:"images/200S-7-F.JPG", 
  backward:"images/200S-4-B.JPG", 
  left:"images/200S-6-L.JPG", 
  right:"images/200S-4-R.JPG",
  turnAround:null
},
{
  image:"images/200S-6-L.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-4-B.JPG", 
  right:"images/200S-5-F.JPG",
  turnAround:null
},
{
  image:"images/200S-7-B.JPG",
  forward:"images/200S-4-B.JPG", 
  backward:"images/200S-4-F.JPG", 
  left:null, 
  right:"images/200S-7-L.JPG",
  turnAround:null
},
{
  image:"images/200S-7-F.JPG",
  forward:"images/200S-8-F.JPG", 
  backward:"images/200S-7-B.JPG", 
  left:"images/200S-7-L.JPG", 
  right:null,
  turnAround:null
},
{
  image:"images/200S-7-L.JPG",
  forward:null, 
  backward:"images/200S-7-B.JPG", 
  left:"images/200S-7-B.JPG", 
  right:"images/200S-7-F.JPG",
  turnAround:null
},
// {
//   image:"images/200S-7-R.JPG",
//   forward:null, 
//   backward:"images/200S-7-B.JPG", 
//   left:"images/200S-7-F.JPG", 
//   right:"images/200S-7-B.JPG",
//   turnAround:null
// },
{
  image:"images/200S-8-F.JPG",
  forward:"images/200S-9-F.JPG", 
  backward:"images/200S-8-B.JPG", 
  left:"images/200S-8-L.JPG", 
  right:"images/200S-8-R.JPG",
},
{
  image:"images/200S-8-B.JPG",
  forward:"images/200S-7-B.JPG", 
  backward:"images/200S-8-F.JPG", 
  left:"images/200S-8-R.JPG", 
  right:"images/200S-8-L.JPG",
},
{
  image:"images/200S-8-L.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-8-B.JPG", 
  right:"images/200S-8-F.JPG",
},
{
  image:"images/200S-8-R.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-8-F.JPG", 
  right:"images/200S-8-B.JPG",
},
{
  image:"images/200S-9-F.JPG",
  forward:"images/200S-10-B.JPG", 
  backward:"images/200S-9-B.JPG", 
  left:"images/200S-9-L.JPG", 
  right:"images/200S-9-R.JPG",
},
{
  image:"images/200S-9-L.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-9-B.JPG", 
  right:"images/200S-9-F.JPG",
},
{
  image:"images/200S-9-R.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-9-F.JPG", 
  right:"images/200S-9-B.JPG",
},
{
  image:"images/200S-9-B.JPG",
  forward:"images/200S-8-B.JPG", 
  backward:"images/200S-10-B.JPG", 
  left:"images/200S-9-R.JPG", 
  right:"images/200S-9-L.JPG",
},
{
  image:"images/200S-10-B.JPG",
  forward:"images/200S-11-F.JPG", 
  backward:"images/200S-10-F.JPG", 
  left:null, 
  right:null,
},
{
  image:"images/200S-10-F.JPG",
  forward:"images/200S-9-B.JPG", 
  backward:"images/200S-10-B.JPG", 
  left:null, 
  right:null,
},
{
  image:"images/200S-11-F.JPG",
  forward:"images/200S-12-F.JPG", 
  backward:"images/200S-11-B.JPG", 
  left:null, 
  right:null,
},
{
  image:"images/200S-11-B.JPG",
  forward:"images/200S-10-F.JPG", 
  backward:"images/200S-11-F.JPG", 
  left:null, 
  right:null,
},
{
  image:"images/200S-12-F.JPG",
  forward:null, 
  backward:null, 
  left:"images/200S-12-R.JPG", 
  right:"images/200S-12-B.JPG",
},

{
  image:"images/200S-12-B.JPG",
  forward:null, 
  backward:"images/200S-12-F.JPG", 
  left:null, 
  right:"images/200S-12-R.JPG",
},
{
  image:"images/200S-12-R.JPG",
  forward:"images/100S-13-F.JPG", 
  backward:"images/200S-12-F.JPG", 
  left:"images/200S-12-B.JPG", 
  right:null,
},
{
  image:"images/200S-12-F.JPG",
  forward:"images/100S-13-F.JPG", 
  backward:"images/200S-12-B.JPG", 
  left:null, 
  right:null,
},

//couch room 
//first floor
{
  image:"first/cr-1-f.JPG", 
  forward:"first/cr-3-f.JPG", 
  backward:"first/cr-1-b.JPG", 
  left:null, 
  right:"first/cr-2-f.JPG",

},
{
  image:"first/cr-1-b.JPG", 
  forward:"images/lobby-2-B-1st.JPG", 
  backward:"first/cr-1-f.JPG", 
  left:null, 
  right:null,

},
{
  image:"first/cr-2-f.JPG", 
  forward:null, 
  backward:"first/cr-2-b.JPG", 
  left:null, 
  right:null,

},
{
  image:"first/cr-2-b.JPG", 
  forward:null, 
  backward:"first/cr-2-f.JPG", 
  left:"first/cr-1-b.JPG", 
  right:"first/cr-3-f.JPG",

},
{
  image:"first/cr-3-f.JPG", 
  forward:"first/entrance-1-f.JPG", 
  backward:"first/cr-3-b.JPG", 
  left:null, 
  right:null,

},
{
  image:"first/cr-3-b.JPG", 
  forward:"first/cr-1-b.JPG", 
  backward:"first/cr-3-f.JPG", 
  left:"first/cr-2-f.JPG", 
  right:null,

},
{
  image:"first/entrance-1-f.JPG", 
  forward:null, 
  backward:"first/entrance-1-b.JPG", 
  left:"first/entrance-2-f.JPG", 
  right:"first/entrance-3-f.JPG",

},
{
  image:"first/entrance-1-b.JPG", 
  forward:"first/cr-3-b.JPG", 
  backward:"first/entrance-1-f.JPG", 
  left:"first/entrance-3-f.JPG", 
  right:"first/entrance-2-f.JPG",

},
{
  image:"first/entrance-2-f.JPG", 
  forward:null, 
  backward:"first/entrance-2-b.JPG", 
  left:null, 
  right:"first/entrance-info.JPG",

},
{
  image:"first/entrance-2-b.JPG", 
  forward:"first/entrance-3-f.JPG", 
  backward:"first/entrance-2-f.JPG", 
  left:null, 
  right:"first/entrance-1-b.JPG",

},
{
  image:"first/entrance-info.JPG", 
  forward:null, 
  backward:"first/entrance-2-b.JPG", 
  left:"first/entrance-2-f.JPG", 
  right:null,

},
{
  image:"first/entrance-3-f.JPG", 
  forward:"first/1-n-1-f.JPG", 
  backward:"first/entrance-3-b.JPG", 
  left:null, 
  right:null,

},
{
  image:"first/entrance-3-b.JPG", 
  forward:"first/entrance-2-f.JPG", 
  backward:"first/entrance-3-f.JPG", 
  left:"first/entrance-1-b.JPG", 
  right:null,

},
{
  image:"first/1-n-1-f.JPG", 
  forward:"first/1-n-2-f.JPG", 
  backward:"first/1-n-1-b.JPG", 
  left:null, 
  right:null,

},
{
  image:"first/1-n-1-b.JPG", 
  forward:"first/entrance-3-b.JPG", 
  backward:"first/1-n-1-f.JPG", 
  left:null, 
  right:null,

},
{
  image:"first/1-n-2-f.JPG", 
  forward:"first/1-n-3-f.JPG", 
  backward:"first/1-n-2-b.JPG", 
  left:"first/1-n-2-l.JPG", 
  right:null,

},
{
  image:"first/1-n-2-b.JPG", 
  forward:"first/1-n-1-b.JPG", 
  backward:"first/1-n-2-f.JPG", 
  left:null, 
  right:"first/1-n-2-l.JPG",

},
{
  image:"first/1-n-2-l.JPG", 
  forward:null, 
  backward:null, 
  left:"first/1-n-2-b.JPG", 
  right:"first/1-n-2-f.JPG",

},
{
  image:"first/1-n-3-f.JPG", 
  forward:"first/1-n-4-f.JPG", 
  backward:"first/1-n-3-b.JPG", 
  left:"first/1-n-3-l.JPG", 
  right:"first/1-n-3-r.JPG",

},
{
  image:"first/1-n-3-b.JPG", 
  forward:"first/1-n-2-b.JPG", 
  backward:"first/1-n-3-f.JPG", 
  left:"first/1-n-3-r.JPG", 
  right:"first/1-n-3-l.JPG",

},
{
  image:"first/1-n-3-r.JPG", 
  forward:null, 
  backward:null, 
  left:"first/1-n-3-f.JPG", 
  right:"first/1-n-3-b.JPG",

},
{
  image:"first/1-n-3-l.JPG", 
  forward:null, 
  backward:null, 
  left:"first/1-n-3-b.JPG", 
  right:"first/1-n-3-f.JPG",

},

//starting to download photos from icloud instead of transferring from iphone
//icloud downloads as jpeg
//makes the images 1mb instead of 3. might be enought to host all pictures on github. 
{
  image:"first/1-n-4-f.JPG", 
  forward:"first/1-n-5-f.JPG", 
  backward:"first/1-n-4-b.JPG", 
  left:"first/1-n-4-l.jpeg", 
  right:"first/1-n-4-r.JPG",

},
{
  image:"first/1-n-4-b.JPG", 
  forward:"first/1-n-3-b.JPG", 
  backward:"first/1-n-4-f.JPG", 
  left:"first/1-n-4-r.JPG", 
  right:null,

},
{
  image:"first/1-n-4-r.JPG", 
  forward:null, 
  backward:null, 
  left:"first/1-n-4-f.JPG", 
  right:"first/1-n-4-b.JPG",
},
{
  image:"first/1-n-4-l.jpeg", 
  forward:null, 
  backward:null, 
  left:"first/1-n-4-b.JPG", 
  right:"first/1-n-4-f.JPG",
},
{
  image:"first/1-n-5-f.JPG", 
  forward:"first/1-n-6-f.JPG", 
  backward:"first/1-n-5-b.JPG", 
  left:"first/1-n-5-l.JPG", 
  right:null,
},
{
  image:"first/1-n-5-b.JPG", 
  forward:"first/1-n-4-b.JPG", 
  backward:"first/1-n-5-f.JPG", 
  left:null, 
  right:"first/1-n-5-l.JPG",
},
{
  image:"first/1-n-5-l.JPG", 
  forward:null, 
  backward:null, 
  left:"first/1-n-5-b.JPG", 
  right:"first/1-n-5-f.JPG",
},
{
  image:"first/1-n-6-b.jpeg", 
  forward:"first/1-n-5-b.JPG", 
  backward:"first/1-n-6-f.JPG", 
  left:"first/1-n-5-l.JPG", 
  right:"first/1-n-6-l.JPG",
},
{
  image:"first/1-n-6-f.JPG", 
  forward:null, 
  backward:"first/1-n-6-b.jpeg", 
  left:"first/1-n-6-l.JPG", 
  right:"first/1-n-6-r.JPG",
},
{
  image:"first/1-n-6-r.JPG", 
  forward:null, 
  backward:"first/1-n-6-l.JPG", 
  left:"first/1-n-6-f.JPG", 
  right:"first/1-n-6-b.jpeg",
},
{
  image:"first/1-n-6-l.JPG", 
  forward:null, 
  backward:"first/1-n-6-r.JPG", 
  left:"first/1-n-6-b.jpeg", 
  right:"first/1-n-6-f.JPG",
},


]



var index = 80;

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
  e.preventDefault();
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





