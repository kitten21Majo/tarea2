var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a10dae09-1e6c-4516-be57-3e2f729ba730","739ee822-83b6-48b0-8b60-710b6e083267"],"propsByKey":{"a10dae09-1e6c-4516-be57-3e2f729ba730":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":13,"looping":true,"frameDelay":12,"version":"8jmlbpbwQ7GZgl9lK7BWyPhOJwwi1VAY","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/a10dae09-1e6c-4516-be57-3e2f729ba730.png"},"739ee822-83b6-48b0-8b60-710b6e083267":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":4,"version":"RJHul6mBG7Dj3p5DADzTXmfc2GREVTYi","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/739ee822-83b6-48b0-8b60-710b6e083267.png"}}};
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

var sprite = createSprite(38,28);

function setup() {
 thief=createSprite(18,372) 
thief.setAnimation("animation_1");
thief.scale=0.3

sprite.setAnimation("animation_2")
sprite.scale=0.8
  
}






laser1= createSprite(50,155,160,5);
laser1.shapeColor="red";
laser1.velocityY=3;



laser2 = createSprite(300,200,100,5);
laser2.shapeColor="red";
laser2.velocityY=-3;

laser3= createSprite(100,185,10,10)
laser3.shapeColor="red";
laser3.velocityX=10

laser4=createSprite(300,230,10,10)
laser4.shapeColor="red"
laser4.velocityX=-10



function draw() {
 background("silver");

if (keyDown(RIGHT_ARROW)) {
thief.x=thief.x +7;
  
}

if (keyDown(LEFT_ARROW)) {
 thief.x=thief.x -7;
  
}

if (keyDown(UP_ARROW)) {
thief.y=thief.y -8;
}

if (keyDown(DOWN_ARROW)) {
thief.y=thief.y +8;
  
}

 createEdgeSprites();
thief.bounceOff(edges);
laser4.bounceOff(edges)
laser3.bounceOff(edges)
laser2.bounceOff(edges)
laser1.bounceOff(edges)

 
if (laser1.isTouching(thief)||laser2.isTouching(thief)||laser3.isTouching(thief)||laser4.isTouching(thief)) {
fill(0);
textSize(24)
 text("You Loose",124,200)
thief.velocityX=0 
thief.velocityY=0
laser1.velocityY=0
laser2.velocityY=0  
laser3.velocityX=0  
laser4.velocityX=0
 


}
 
 
 


if (sprite.isTouching(thief)) {
fill(0);
 textSize(24)
 text("you win",124,200)
laser1.velocityY=0
laser2.velocityY=0  
laser3.velocityX=0  
laser4.velocityX=0
thief.velocityX=0              
  }
   
 
 
 
 
 drawSprites();

}























  


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
