import Game from "../engine/game.js"

import Button from "./Button.js"

class WelcomeScreen extends Game
{
    constructor(canvasId)
    {
        super(canvasId);
        let start = new Button(100,100,100, 40,"Start");
        this.addGameObject(start);
        this.camera.target = start;
    }
}

export default WelcomeScreen




