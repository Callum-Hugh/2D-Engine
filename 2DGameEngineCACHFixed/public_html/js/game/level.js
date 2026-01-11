import Game from "../engine/game.js"
import Camera from "../engine/camera.js"
import {Images, AudioFiles} from "../engine/resources.js"
import Confiner from "../engine/confiner.js"

import Player from "./Player.js"
import Platform from "./Platform.js"
import Collectible from "./Collectible.js"
import Enemy from "./Enemy.js"
import PlayerUI from "./PlayerUI.js";
import Checkpoint from "./Checkpoint.js";
import Button from "./Button.js";
import Background from "./bg.js"
import CountDownUI from "./CountDownUI.js"
import ShakeableCamera from "../engine/ShakeableCamera.js"

import HiddingSpots from "./HiddingSpots.js"
import Doorway from "./Doorway.js"

class Level extends Game
{
    constructor(canvasId)
    {
        super(canvasId);
        const player = new Player(50, this.canvas.height/2 - 100, Images.player);
        
        this.addGameObject(new Background(0,0, 10000,this.canvas.height, Images.backgroud));
        
        this.addGameObject(player);
        
        const child = new Children(20, this.canvas.height/2 - 130, );
        
        this.addGameObject(child);
        
        this.camera = new ShakeableCamera(null, this.canvas.width, this.canvas.height);
        
        this.camera.target = player;
        this.camera.confiner = new Confiner(0,0,10000,this.canvas.height);
        let platforms = [
                new Platform(0, this.canvas.height-40,2000, 20),
                new Platform(0, 90, 10, 90),
                new Platform(2000, 90, 10, 90),
               new Platform(0, this.canvas.height-20, 2000, 20),
        ];
        
        for(const platform of platforms)
        {
            this.addGameObject(platform);
        }
        
        this.addGameObject(new PlayerUI(10,10));
        
        this.addGameObject(new Checkpoint(550, this.canvas.height-80, 10, 40));
        
        this.addGameObject(new Button(this.canvas.width-100, 10, 100, 30, "Start"));

        this.camera.Intensity = 10; 
        //this.camera.start(10);
        this.delay = 4;
        this.done = false;
 
        this.timer = 60;
        this.timer = Upstares.timer;
        
        this.addGameObject(new HiddingSpots(200, this.canvas.height-40,70, 40, "Table"));
        
        this.addGameObject(new CountDownUI(this.canvas.width/2,this.canvas.height-20, this.timer, 80, 40));
       
       
    }
    
    update()
    {
        this.delay -= this.deltaTime;
        if(this.done == false && this.delay <= 0)
        {
            this.camera.start(4);
            this.done = true;
        }
        
        End();
        
        super.update();
    }
    
    End()
    {
        if(this.timer <= 0)
        {
           this.timedOut = false; 
        }
        
    }
    
}

export default Level