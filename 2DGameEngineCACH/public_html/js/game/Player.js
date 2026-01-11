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
        
        this.walkImages=[];
        this.loadWalkAnimation();
        let walkAnimation = new Animation('white', 70, 100, this.walkImages, 13);
        this.animator.addAnimation("walk", walkAnimation);
        
        
        this.idleImages=[];
        this.loadIdleAnimation();
        let idleAnimation = new Animation('white', 70, 100,
        this.idleImages, 16);
        this.animator.addAnimation("idle", idleAnimation);
        
        this.animator.setAnimation("idle");
        
        
        //powerup
        this.powerUpTime = 2;
        this.powerUpTimer = 0;
        this.hasPowerUp = false;
        this.speed = 100;
        this.invulnerable=false;
        this.lives = 3;
        
        this.lastCheckpoint={x:x, y:y};
    }
    setCheckpoint(checkpoint)
    {
        this.lastCheckpoint = checkpoint;
    }
    playerKilled()
    {
        this.lives--;
        this.x = this.lastCheckpoint.x;
        this.y = this.lastCheckpoint.y;
        
    }
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
        else
        {
            physics.velocity.x =0;
            this.animator.setAnimation("idle");
        }
        
       
        // collision with platforms
        const platforms = this.game.gameObjects.filter((obj)=> obj instanceof Platform);
        for(const platform of platforms)
        {
            if(!this.isJumping && physics.isColliding(platform.getComponent(Physics)))
            {
                physics.velocity.y = 0;
                physics.acceleration.y = 0;
                this.y = platform.y - this.renderer.height;
                this.isOnPlatform = true;
            }
        }
        
    
        super.update(deltaTime);
    }
    
    collidingWithHiddingspot(Hiddingspots)
    {
        const child = this.game.gameObjects.filter((obj)=>obj instanceof Children);
        
        if(input.isKeyDown('ArrowUp')){
            this.game.removeGameObject(child);
            this.child.following = true; 
            this.Doorway.GoThrow = true;
        }
    }
    
    outOfTime()
    {
       
    }
}

export default Player;