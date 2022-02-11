var jardim;
var gato,gatoPNG1,gatoPNG2,gatoPNG3;
var rato,ratoPNG1,ratoPNG2,ratoPNG3;
function preload() {
    //load the images here
    jardim = loadImage("garden.png");

    gatoPNG1 = loadAnimation("cat1.png");
    gatoPNG2 = loadAnimation("cat2.png","cat3.png");
    gatoPNG3 = loadAnimation("cat4.png");

    ratoPNG1 = loadAnimation("mouse1.png");
    ratoPNG2 = loadAnimation("mouse2.png","mouse3.png");
    ratoPNG3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    gato = createSprite(870,600);
    gato.addAnimation("gatodeitadinho",gatoPNG1);
    gato.scale = 0.2;
    
    rato = createSprite(200,600);
    rato.addAnimation("ratocomendinho",ratoPNG1);
    rato.scale  = 0.15;
}

function draw() {

    background(jardim);
    //Write condition here to evalute if cat and mouse 
    if(gato.x - rato.x < (gato.width - rato.width)/2)
    { 
        gato.velocityX=0;
        gato.addAnimation("gatoSentadinho", gatoPNG3);
        gato.x =300;
        gato.changeAnimation("gatoSentadinho");

        rato.addAnimation("gatoSentadinho", ratoPNG3);
        rato.changeAnimation("gatoSentadinho");
    }  


    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        gato.velocityX = -5; 
        gato.addAnimation("gatoAndandinho", gatoPNG2);
        gato.changeAnimation("gatoAndandinho");
        
        rato.addAnimation("ratoAssenadinho", ratoPNG2);
        rato.changeAnimation("ratoAssenadinho");


    }
}