import GameObject from "../engine/gameobject.js";
import UI from "../engine/ui.js";

import Player from "./Player.js";

class EndUI extends GameObject
{
    constructor(x, y)
    {
        super(x,y);
        this.uiComp = new UI("This is what you did and should have done", x, y);
        this.addComponent(this.uiComp);
    }
    
    update(deltaTime)
    {
        FinaleText();
        super.update(deltaTime);
    }
    
    FinaleText()
    {
        const child = this.Children.hidden();
        
        if(!child && this.HiddingSpots.hiddingSpot == "Bed")
        {
            this.uiComp = new UI("A bed is a good spot if you are closses to one to hide under the covers and cover your head with a pillow",  this.canvas.height/2, this.canvas.width/2);
            this.addComponent(this.uiComp);
        }   
        
        if(!child && this.HiddingSpots.hiddingSpot == "Table")
        {
           this.uiComp = new UI("This is the best spot to go to in a earthquake to protect urself frolm tebre in the house.", this.canvas.height/2, this.canvas.width/2);
           this.addComponent(this.uiComp);
        }
        
        if(!child && this.HiddingSpots.hiddingSpot == "Bath")
        {
           this.uiComp = new UI("This is not a good spot to go to that there is no cover and it could harme you (dont lisiton to the transformer movie)", this.canvas.height/2, this.canvas.width/2);
           this.addComponent(this.uiComp);
        }   
        
        if(this.Doorway.GoThrow == true)
        {
           this.uiComp = new UI("You went throw a doorway you should not go throw one unless you are stuck and force to, witch be carfull whil going throw", this.canvas.height - 90, this.canvas.width/2);
           this.addComponent(this.uiComp);
        } 
        
        if( ( this.level.timer || this.BedRoom.timer || this.Bathroom.timer || this.Upstares.timer) > 0 && TimedOut == true )
        {
           this.uiComp = new UI("You ran out of time and could not find a hidding spot, try again", this.canvas.height/2, this.canvas.width/2);
           this.addComponent(this.uiComp); 
        }
            
    }
    
}

export default EndUI;