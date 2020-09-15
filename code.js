var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["823faff5-1e16-4ceb-84cd-39e4bda760c7","5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8","251332b3-7aeb-40af-ac0f-1cceb3d1db5b","a8f36482-803d-4474-94a6-b14b425df10b","54c7b714-082d-432f-b761-58b3991e4165","ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7","d139dd9a-da12-4cd9-b00a-750f503fca7e","5089ade4-e6fa-4ed4-a6d4-d2dc5f196718","1970b491-ad18-4a54-bf5a-86916f4988ab","397fb6b0-1338-475b-bea5-b11c45a3fb1d","24312045-0181-4264-bc4c-f68fa5d01af0","0c8f06da-017c-49e9-b8c6-2ab555744295"],"propsByKey":{"823faff5-1e16-4ceb-84cd-39e4bda760c7":{"name":"balloon1","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"9MnHb_No7VaM..CwkLvxiDMtDoo457Mr","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/823faff5-1e16-4ceb-84cd-39e4bda760c7.png"},"5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8":{"name":"balloon2","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"trU1RKKTzoH9UY19RBoU4oBQ9vY1vjYS","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8.png"},"251332b3-7aeb-40af-ac0f-1cceb3d1db5b":{"name":"balloon3","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"IESGu2JCUR6R3ToSnxhyFSxyHaooEslm","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/251332b3-7aeb-40af-ac0f-1cceb3d1db5b.png"},"a8f36482-803d-4474-94a6-b14b425df10b":{"name":"balloon4","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"CJxusIEpyDouAewQ8nTKW2n.9RFIzcby","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/a8f36482-803d-4474-94a6-b14b425df10b.png"},"54c7b714-082d-432f-b761-58b3991e4165":{"name":"arrow1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"n0f1gS4J5wAAKOv9Z12NCuY_2RMmfYzN","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/54c7b714-082d-432f-b761-58b3991e4165.png"},"ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7":{"name":"arro","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"3GsWyxGwW4ey8bLN72CG47iKFYj9k5tr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7.png"},"d139dd9a-da12-4cd9-b00a-750f503fca7e":{"name":"scifi","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"GKjegb3rfV3t.DXAf44uOYex.aBLZhWb","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/d139dd9a-da12-4cd9-b00a-750f503fca7e.png"},"5089ade4-e6fa-4ed4-a6d4-d2dc5f196718":{"name":"Ship","sourceUrl":null,"frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"pV8BwNhkykgVPuJXvlav5NVj3oH_TTfq","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/5089ade4-e6fa-4ed4-a6d4-d2dc5f196718.png"},"1970b491-ad18-4a54-bf5a-86916f4988ab":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/xsrqTyODuU36entq5.q.XvNGnXCEnTWy/category_vehicles/enemyGreen1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"xsrqTyODuU36entq5.q.XvNGnXCEnTWy","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xsrqTyODuU36entq5.q.XvNGnXCEnTWy/category_vehicles/enemyGreen1.png"},"397fb6b0-1338-475b-bea5-b11c45a3fb1d":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/HmEdMW8OcdHcZ9V2HAzDdwYOGq5pZpc_/category_vehicles/enemyGreen2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"HmEdMW8OcdHcZ9V2HAzDdwYOGq5pZpc_","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HmEdMW8OcdHcZ9V2HAzDdwYOGq5pZpc_/category_vehicles/enemyGreen2.png"},"24312045-0181-4264-bc4c-f68fa5d01af0":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/MWC194esqFKe2M5MrwwqQV3usBbOoZpz/category_vehicles/enemyGreen3.png","frameSize":{"x":103,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"MWC194esqFKe2M5MrwwqQV3usBbOoZpz","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MWC194esqFKe2M5MrwwqQV3usBbOoZpz/category_vehicles/enemyGreen3.png"},"0c8f06da-017c-49e9-b8c6-2ab555744295":{"name":"arr","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"KTRdT4DJdHrfi0MRXa7m5YWNxdZNZGTX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0c8f06da-017c-49e9-b8c6-2ab555744295.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var score = 0;
var gameState="Start";


var background1=createSprite("200,200,400,400");
 background1.setAnimation("scifi");
 background1.scale=2;
 background1.x=background1.width/2;
 



var bow=createSprite(210,380,10,10);
bow.setAnimation("Ship");
bow.scale=.5;
var balloonsGroup= createGroup();

var balloonsGroup = createGroup();
var arrowsGroup = createGroup();



/*var balloon3=createSprite(110,180,10,10);
balloon3.setAnimation("blue");*/

  function arrow(){

if(World.frameCount%7===0){
  var arrow=createSprite(370,178,30,10)
arrow.velocityY=-6;
arrow.setAnimation("arr");
arrow.scale=.7;
arrow.x=bow.x;
arrow.y=bow.y;
arrowsGroup.add(arrow);
}
}




   function spawnBalloons(){
  if(World.frameCount % 60===0){
//var randX = randomNumber(20,200);
var randY = randomNumber(20,380);
    var balloon = createSprite(randY,0,10,40);
    balloon.velocityY=6;
    var r =randomNumber(1,3);
    balloon.setAnimation("enemy"+r);
    balloon.scale=.5;
    balloon.lifetime=100;
    balloonsGroup.add(balloon);
    balloonsGroup.debug=true;
  }
  }







function draw() {
  if(keyDown("space")&&gameState==="Start"){
  gameState="Play";
  playSound("assets/category_achievements/retro_game_classic_power_up_3.mp3");
}
    if(gameState==="Play"){
      background("white");
        drawSprites();
     if(keyDown("space")){
    arrow();
    playSound("assets/category_digital/ping.mp3");
      }
   background1.velocityX=-2;
  spawnBalloons();
     if(background1.x<0){
     background1.x=background1.width;
     }
     if(balloonsGroup.isTouching(arrowsGroup)){
      balloonsGroup.destroyEach();
      arrowsGroup.destroyEach();
       score++;
       playSound("assets/category_alerts/retro_game_powerup_7.mp3")
       if(score%100===0){
         playSound("assets/category_achievements/retro_game_classic_power_up_2.mp3");
       }
       if(arrowsGroup.x>400){
         score--;
       }
     }
  

bow.x=World.mouseX;

}
      text("SCORE "+score,320,100);
}
  /*if(balloonsGroup.isTouching(arrowsGroup)){
  score ++;}*/
text("PRESS SPACE",200,200);
  
 
 /* for(var i=150;i>=5;i=i-40){
    var balloon1=createSprite(20,i*2,10,10);  
    balloon1.setAnimation("red");
  } 
  
   for(var ii=110;ii>=70;ii=ii-40){
     var balloon2=createSprite(50,ii*2,10,10);
     balloon2.setAnimation("green");
   }
   for(var iii=110;iii>=70;iii=iii-40){
     var balloon4=createSprite(80,iii*2,10,10);
     balloon4.setAnimation("yellow");
   }*/
   





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
