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
import level from "./level.js"
import BedRoom from "./BedRoom.js"
import Bathroom from "./Bathroom.js"

class Upstares extends Game
{
    
    constructor(canvasId)
    {
       super(canvasId);
       const player = new Player(50, this.canvas.height/2 - 100, Images.player);
       
       this.addGameObject(new Background(0,0, 10000,this.canvas.height));
        
        this.addGameObject(player);
        
        this.camera = new ShakeableCamera(null, this.canvas.width, this.canvas.height);
        
        this.camera.target = player;
       
        this.camera.confiner = new Confiner(0,0,10000,this.canvas.height);
        
        let platforms = [
                new Platform(0, this.canvas.height-40,1500, 20),
                new Platform(0, 90, 20, 90),
                new Platform(1500, 90,20, 90),
                 new Platform(0, this.canvas.height-20, 1500, 20),
                 
                
        ];
        
        for(const platform of platforms)
        {
            this.addGameObject(platform);
        }
        
        this.addGameObject(new PlayerUI(10,10));
        
        this.addGameObject(new HiddingSpots(310, this.canvas.height-40,80, 30, "bathtube"));
        
        this.addGameObject(new Doorway(50, this.canvas.height/2 - 80, 60,80, "up stares"));
        
        this.camera.Intensity = 10; 
        //this.camera.start(10);
        this.delay = 4;
        this.done = false;
        
        this.timer = level.timer;
        this.timer = BedRoom.timer;
        this.timer = Bathroom.timer;
        
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
        super.update();
    }
    
    
}

export default Upstares


