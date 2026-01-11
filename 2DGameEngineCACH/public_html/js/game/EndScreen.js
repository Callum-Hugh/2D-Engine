import Game from "../engine/game.js"

import Button from "./Button.js"

import EndUI from "./EndUI.js"

class WelcomeScreen extends Game
{
    constructor(canvasId)
    {
        super(canvasId);
        
        this.addGameObject(new EndUI(this.canvas.height - 20, this.canvas.width/2));
        
    }
    
}

export default WelcomeScreen