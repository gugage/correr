var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
  
boyImg = loadAnimation("jake1,jake2,jake3,jake4")
  pathImg = loadImage("path.png")
  
  }
  
  function setup(){
    createCanvas(400,400);
  
    boy = createSprite(50,170,30)
  boy.addAnimation("runnig",boyImg)
  
  boy.scale = 0,5
  
    path = createSprite(300,190,600,20)
  path.addImage(seaImg)
  path.velocityX = -5;
  


  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela 

path.scale=1.2;

 

//crie um sprite de menino
//adicione uma animação de corrida para ele            
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
