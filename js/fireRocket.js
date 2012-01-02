/**
 * the fireRocket bundles x-numbers of particles to
 * one rocket on the cloud!
 */
var fireRocket = function () {
    this.particlesAnz = 3200;
    this.i = 0;
    this.color = this.getRandomColor();
    this.particleObj = new Array();
    this.startPositionX = ( Math.random() * (600 - 300 + 1) + 300);
    this.startPositionY = ( Math.random() * (600 - 300 + 1) + 300);
    this.startAlpha = 10;
    this.r =  Math.random() * (20 - 1 + 1) + 1;
}

/**
 * returns an random color 
 *
 */
fireRocket.prototype.getRandomColor = function () {
    var colors = new Array('red', 'purple','silver','yellow', 'pink', 'blue', 'white');
    max = colors.length;
    var op =  Math.floor(Math.random() * (max - 0 + 1)) + 0;
    return colors[op];
}


/**
 * now set all the start Points to the center of the canvas
 */
fireRocket.prototype.startRocket = function () {
    for(x = 0; x <= this.particlesAnz;x++) {
        this.createNewParticle(); 
    }
    this.sendToPaint();
  
}

/**
 * returns an random operator with an 50% chance for every 
 * item
 */
fireRocket.prototype.getRandomOperator = function ( ) {
    var op =  Math.floor(Math.random() * (1 - 0 + 1)) + 0;
   
    if(op == 1) {
        return '+';
    } 
    if(op == 0) {
        return '-';
    } 
}

/**
 * returns an random color
 */
fireRocket.prototype.getColorParticle = function (particle) {
    var op =  Math.floor(Math.random() * (1 - 0 + 1)) + 0;
   
    if(op == 0 || op == 2) {
        return this.color;
    } 
    if(op == 1) {
        return "#E2FF00";
    } 
}
/**
 * creates an new particle of the rocket 
 * and sets some random params
 */
fireRocket.prototype.createNewParticle = function () {
    particle = new particel();
    particle.setLifetime(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
    particle.setPosition((this.r*Math.cos(this.startAlpha) ) +  this.startPositionX, (this.r*Math.sin(this.startAlpha ) ) + this.startPositionY);
    particle.setAlpha(this.startAlpha);
    particle.setRadius(this.r);
    this.startAlpha++;
    if(this.startAlpha == 380) {
        this.startAplha = 0;
    }
    var argument = new Array();
    argument.x= this.getRandomOperator();
    argument.y = this.getRandomOperator();
    particle.setMultiplicator( argument );
    var particelColor = this.getColorParticle(particle);
    
    particle.setColor(particelColor);
    particle.setSpeed( Math.random() * (10 - 2 + 1) + 2);
    particle.setSpeedX( Math.random() * (10 - 2 + 1) + 2  );
    if(particelColor == '#E2FF00') {
       particle.setLifetime(3);
       particle.setSpeed(1);
    }
    this.registerParticle(particle);

}

/**
 * sends all the particle to the canvas Painter
 */
fireRocket.prototype.sendToPaint = function () {
    painter.registerSet(this.particleObj);
}

/**
 * register the particle here in the rocket
 */
fireRocket.prototype.registerParticle = function (particleObj) {
    this.particleObj.push(particleObj);
}