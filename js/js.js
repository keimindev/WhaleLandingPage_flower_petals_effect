TweenLite.set("#container",{perspective:600});
TweenLite.set(".flower-img",{xPercent:"-50%",yPercent:"-50%"});

var total = 60;
var warp = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;
 
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'flower-img'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   warp.appendChild(Div);
   animm(Div);

  var leaf = document.createElement('div');
  leaf.classList.add('flower');
  Div.appendChild(leaf);
  var leafs = document.createElement('div');
  leafs.classList.add('flower-leaf');
  leaf.appendChild(leafs);

 }
 
 function animm(elm){   
   TweenMax.to(elm,R(8,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(2,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(4,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};


