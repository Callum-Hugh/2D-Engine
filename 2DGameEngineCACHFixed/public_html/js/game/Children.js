import GameObject from "../engine/gameobject.js"
import Renderer from "../engine/renderer.js"
import Physics from "../engine/physics.js"

import Player from "./Player.js"
import Platform from "./Platform.js"
import EndScreen from "./EndScreen.js"

class Children extends GameObjcet
{
    constructor(x, y, w, h)
    {
        super(x,y);
        this.addComponent(new Renderer("white", w, h));
        this.addComponent(new Physics({x:50, y:0},{x:0, y:0}));
        this.movementDistance = 0;
        this.hidding = true;
    }
    
    update(deltaTime)
    {
        this.following();
        this.hidden();
    }
    
    following()
    {
        
        if(folling == true){
            let player = this.getComponent(Player)
            let physics = this.getComponent(Physics)

            const dx = this.player.x - this.x;
            const dy = this.player.y - this.y;

            const distnace = Math.sqrt(dx * dx + dy * dy);

            if(distnace > 1)
            {
                this.x += dx / distnace * 1;

                this.y += dy/ distnace * 1;

            }
        }
    }
    
    hiddin()
    {
        
        if(folling == false)
        {
          const EndScreen = new EndScreen(this.game.canvas.id);
          EndScreen.start();
        }
    }
}

export default Children;