import Renderer from "../engine/renderer.js"
import GameObject from "../engine/gameobject.js"
import Physics from "../engine/physics.js"

class Platform extends GameObject
{
    constructor(x, y, w, h)
    {
        super(x, y);
        this.renderer = new Renderer('brown', w, h);
        this.addComponent(this.renderer);
        
        this.addComponent(new Physics({x:0, y:0},{x:0, y:0},{x:0, y:0}));
        this.tag = "platform";
    }
    
}

export default Platform;
