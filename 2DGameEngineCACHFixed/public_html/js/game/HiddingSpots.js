import GameObject from "../engine/gameobject.js"
import Renderer from "../engine/renderer.js"
import Physics from "../engine/physics.js"

import Player from "./Player.js"

import Children from "./Children.js"

class HiddingSpots extends GameObject
{
    constructor(x, y, w, h, text)
    {
        super(x, y),
        this.addComponent(new Physics({x:0,y:0},
            {x:0,y:0},{x:0,y:0}));
        this.addComponent(new Renderer('blue', w, h));
        this.tag = "HiddingSpot";
        
        this.hiddingSpot = "";
        
    }
    
    update(deltaTime)
    {
        let player = this.game.gameObjects.find((obj) => obj instanceof Player);
        let physics = this.getComponent(Physics);
        if(physics.isColliding(player.getComponent(Physics)))
        {
            player.collidingWithHiddingspot();                         
        }
        
    }
    
    clicked(event)
    {
     
        if(this.text == "Bed" && this.Children.following() == false)
        {
            this.hiddingSpot = "Bed";
        }
        
        if(this.text == "Table" && this.Children.following() == false)
        {
            this.hiddingSpot = "Table";
        }
        
        if(this.text == "bathtube" && this.Children.following() == false)
        {
            this.hiddingSpot = "Bath";
        }
        
        
    }
       
    
    
    
    
    
}