import Renderer from "../engine/renderer.js"
import GameObject from "../engine/gameobject.js"
import Physics from "../engine/physics.js"
import Input from "../engine/input.js"
import Platform from "./Platform.js"
import Collectable from "./Collectible.js"
import ParticleSystem from "../engine/particleSystem.js"
import Animator from "../engine/Animator.js"
import Animation from "../engine/Animation.js"
import {AudioFiles} from "../engine/resources.js";
import HiddingSpots from "./HiddingSpots.js"
class Player extends GameObject
{
    constructor(x, y, img)
    {
        super(x,y);
        
        this.addComponent(new Physics({x:0,y:0},{x:0,y:0}));
        this.addComponent(new Input());
        this.direction = -1;
        this.isOnPlatform = false;
        
        this.score = 0;
        this.isJumping = false;
        this.jumpForce = 300;
        this.jumpTime = 1.0;
        this.jumpTimer = 0;
        
        this.animator = new Animator('white', 70, 100);
        this.renderer = this.animator;
        this.addComponent(this.animator);
        
        
    update(deltaTime)
    {
        
        this.isOnPlatform = false;
        const physics = this.getComponent(Physics);
        const input = this.getComponent(Input);
        
        if(input.isKeyDown('ArrowLeft'))
        {
            physics.velocity.x = -this.speed;
            this.direction = 1;
            this.animator.setAnimation("walk");
        }
        else if(input.isKeyDown('ArrowRight'))
        {
            physics.velocity.x = this.speed;
            this.direction = -1;
            this.animator.setAnimation("walk");
        }
       
        
        super.update(deltaTime);
    }
    
    collidingWithHiddingspot(Hiddingspots)
    {
        const child = this.game.gameObjects.filter((obj)=>obj instanceof Children);
        
        if(input.isKeyDown('ArrowUp')){
            this.game.removeGameObject(child);
            this.child.following = false; 
            this.Doorway.GoThrow = true;
        }
    }
    
    } 
}

export default Player;