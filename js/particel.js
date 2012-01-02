var particel = function () {
    this.setPosition; //set the new position
    this.positions = new Array(); //the position in pixel x,y array
    this.positions['x'] = 0;
    this.positions['y'] = 0;
    this.speed; //the speed in pixel per second
    this.directionS; //the direction in grad
    this.color; // here is the color of this pixel
    this.lifetime; //the lifetime in seconds of this particel
    this.size = 2;
    this.newElementsPerRound;
    this.speedx;
    this.multiplikatorX;
    this.multiplikatorY;
    this.alpha;
    this.radius;
}
        
/**
* set the new position
* x, and y, use direction and speed to calc the new
* position
*/

/**
* sets the speed factor of this particel
*/
particel.prototype.setDirecton = function (direction) {
    this.directionS = direction;
}
        
/**
* sets the new color
*/
particel.prototype.setColor = function (color) {
    this.color = color;
}
        
        
/**
* this must be called after set speed and direction is called
*/
particel.prototype.setPosition = function (x,y) {
    this.positions.x = x;
    this.positions.y = y;
}
        
/**
* sets the lifetime of this particel in paintCirculates or seconds ?
* in seconds
*/
particel.prototype.setLifetime = function (lifetime) {
    this.lifetime = lifetime;
} 

particel.prototype.setSpeed = function (speed) {
    this.speed = speed;
}

/**
 * sets the speed for the x coordinate
 */
particel.prototype.setSpeedX = function (speed) {
    this.speedx = speed;
}

/**
 * this is an easy way to set  the direction for the
 * x and y coordinates
 */
particel.prototype.setAlpha = function (alpha) {
    this.alpha = alpha;
}

particel.prototype.setRadius = function (radius) {
    this.radius = radius;
}

/**
 * this is an easy way to set  the direction for the
 * x and y coordinates
 */
particel.prototype.setMultiplicator = function (multiplicator) {
    this.multiplikatorX = multiplicator.x;
    this.multiplikatorY = multiplicator.y;
}
        
/**
 * this mehtod calculates the new position
 */
particel.prototype.calcNewPosition = function () {
    //calc here the new position!!
    this.positions.x = (this.speed*Math.cos(this.alpha) ) +  this.positions.x,
    this.positions.y = (this.speed*Math.sin(this.alpha ) ) + this.positions.y;
}
    
    
/**
* this method draws itself to an given canvas 2d context
*/
particel.prototype.getPaintInformation = function (context) {
    this.lifetime = this.lifetime  - 1;
    if(this.lifetime <= 0) {
        return false;
    } else {
        context.beginPath();  
        context.strokeStyle = this.color;
        context.strokeRect(this.positions.x,this.positions.y,this.size,this.size); // Outer circle
        this.calcNewPosition();
        return context;
    }
} 