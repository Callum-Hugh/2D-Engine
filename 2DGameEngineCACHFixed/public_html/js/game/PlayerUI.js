import GameObject from "../engine/gameobject.js";
import UI from "../engine/ui.js";

import Player from "./Player.js";
class PlayerUI extends GameObject
{
    constructor(x, y)
    {
        super(x,y);
        this.uiComp = new UI("Find a space to hide the child following you.", x, y);
        this.addComponent(this.uiComp);
    }
    
    update(deltaTime)
    {
        let player = this.game.gameObjects.find((obj)=>obj instanceof Player);
        
        this.uiComp.setText("Find a space to hide the child following you.");
        super.update(deltaTime);
    }
}

export default PlayerUI;

