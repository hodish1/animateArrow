var path = document.querySelector('svg path');
var svg = document.querySelector('svg');
var click = true;

svg.addEventListener('mousemove',function(e){
  if(!click){
    return;
  }
   if(e.clientY < 130){ 
     path.style.d = 'path("m0 0 , a1 1.2 , 45 , 0 1 , 0 300")';
     path.style.opacity = '1';
     svg.style.width="100%";
  }else if(e.clientY > 170){
    path.style.d = 'path("m0 0 , a1 1.2 , -45 , 0 1 , 0 300")';
    path.style.opacity = '1';
    svg.style.width="100%";
  }else{
     path.style.d = 'path("m0 0 , a1 1 , 0 , 0 1 , 0 300")';
     path.style.opacity = '1';
     svg.style.width="100%";
  }
  if(e.clientX > 300){
    path.style.d = 'path("m0 0 , a0 1 , 0 , 0 1 , 0 300")';
    path.style.opacity = '0';
    svg.style.width="20";
  }
});

path.addEventListener('click',function(e){
    path.style.d = 'path(" M0 0 , a5 1 , 0 , 0 1 , 0 300")';
    path.style.opacity = '0';
    click = false;
    setTimeout(function(){
       click = true;
       svg.style.width="20";
    },1000)
});