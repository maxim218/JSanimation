"use strict";

function getPositionAnimationLRObject(){
    let obj = {
        intervalValue: 0,
        finishX: 0,
        element: null,
        speed: 0
    };

   obj.initElement = function(element){
       this.element = element;
   };

   obj.initFinishPosition = function(finishX){
       this.finishX = finishX;
   };

   obj.initSpeed = function(speed){
       this.speed = speed;
   };

   obj.stopAnimation = function(){
       clearInterval(this.intervalValue);
       console.log(this.element.id + ":  Animation stop");
   };

   obj.initAllProperties = function(element, finishX, speed){
        this.initElement(element);
        this.initFinishPosition(finishX);
        this.initSpeed(speed);
   };

   obj.startAnimation = function(){
       console.log(this.element.id + ":  Animation start");
       const t = this;
       this.intervalValue = setInterval(function(){
           let xx = parseInt(t.element.style.marginLeft);

           if(xx < t.finishX){
               xx += t.speed;
           }

           if(xx >= t.finishX){
               xx = t.finishX;
               t.element.style.marginLeft = xx + "px";
               console.log(t.element.id + ":  Animation works " + t.element.style.marginLeft);
               t.stopAnimation();
               return;
           }

           t.element.style.marginLeft = xx + "px";
           console.log(t.element.id + ":  Animation works " + t.element.style.marginLeft);

       }, 45);
   };

   return obj;
}


window.onload = function(){
    document.getElementById("box1").style.marginLeft = '50px';
    document.getElementById("box1").style.marginTop = '100px';

    let box_1_animation = getPositionAnimationLRObject();
    box_1_animation.initAllProperties( document.getElementById("box1") , 600 , 7);
    box_1_animation.startAnimation();

    document.getElementById("box2").style.marginLeft = '50px';
    document.getElementById("box2").style.marginTop = '200px';

    let box_2_animation = getPositionAnimationLRObject();
    box_2_animation.initAllProperties( document.getElementById("box2") , 600 , 5);
    box_2_animation.startAnimation();

};