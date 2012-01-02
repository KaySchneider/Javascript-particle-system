var canvasPainter = function () {
    this.objects = new Array(); //save all the objects in this array
    this.canvas = null;
            
}

/**
 * register an large type of arrayset wich includes paintable objects
 */
canvasPainter.prototype.registerSet = function (particelObjSets) {
    // 
    // console.log(this.objects, typeof this.objects);
    var concatHelper = this.objects;
    concatResult = concatHelper.concat(particelObjSets);
    this.objects = concatResult;
            
}
   

/**
 * register an single paintable Object in the canvas
 */
canvasPainter.prototype.registerObject = function (particelObj) {
    // 
    // console.log(this.objects, typeof this.objects);
           
    this.objects.push(particelObj);
            
}
       
/**
         * print out the canvas object, paint all the objects
         */
canvasPainter.prototype.writeInfo = function () {
    var ctx = document.getElementById('silvester');
    context = ctx.getContext("2d");
    
    context.clearRect(0,0,800,800); // clear canvas  
    context.beginPath();  
    context.strokeStyle = "black";
    context.fillRect(0,0,800,800)
    context.strokeRect(0,0,800,800); // Outer circle
    context.closePath();
    
    if(typeof  this.objects === undefined || typeof this.objects == 'undefined' ) {
        return -1;
    } else {
        //make an copy before start the loops
        var renderingObjects = this.objects;
        for (var i = 0; i < renderingObjects.length; i++) {
            // console.log(this.objects[i]);
            if( renderingObjects[i].getPaintInformation(context) == false) {
                this.objects.splice(i,1) ;
            }
            //delete this item of the array and kill the objectxx   
        }
      
        
    }
    
}
        