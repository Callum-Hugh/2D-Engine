import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js"
import Physics from "../engine/physics.js"

class Doorway extends GameObject
{
    constructor(x, y,w, h, str)
    {
        super(x,y);
        this.renderer = new Renderer('yellow',w, h);
        this.addComponent(this.renderer);
        this.text = str;
        
        this.addComponent(new Physics({x:0,y:0},{x:0,y:0},{x:0,y:0}));
        this.tag = "pathway";
        
        this.GoThrow = false;
        
    }
    
    playerCollision()
    {
        
        if(this.text == "up stares")
        {  
            const upstares = new Upstares(this.game.canvas.id);
            upstares.start();
        }
        
        if(this.text == "bedroom")
        {
            const bedroom = new BedRoom(this.game.canvas.id);
            bedroom.start();
        }
        
        if(this.text == "bath room")
        {
            const bathroom = new Bathroom(this.game.canvas.id);
            bathroom.start();
        }
        
        if(this.text == "down startes")
        {
            const level = new level(this.game.canvas.id);
            level.start();
        }
    }
    
    
}

export default Doorway



