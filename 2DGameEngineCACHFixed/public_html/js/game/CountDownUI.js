import GameObject from "../engine/gameobject.js";
import UI from "../engine/ui.js"
class CountDownUI extends GameObject
{
    constructor(x, y,time, maxFont= 40, minFont =20)
    {
        super(x,y);
        this.time = time;
        this.timeRemaining = time;
        this.uiComp = new UI(time, x, y);
        this.addComponent(this.uiComp);
        this.currentFont = maxFont;
        this.step = (maxFont - minFont);
        this.maxFont = maxFont;
        this.minFont = minFont;
    }
    update(deltaTime)
    {
        this.timeRemaining -= deltaTime;
        this.time = Math.floor(this.timeRemaining).toFixed(0);
        let t = (this.timeRemaining%1);
        
        
        this.currentFont = this.minFont + ((this.maxFont - this.minFont) * ( this.timeRemaining%1));
        this.uiComp.font = this.currentFont+"px Arial";
        this.uiComp.setText(this.time);
        this.x -= this.game.ctx.measureText(this.time).width/2;
        this.y -= this.game.ctx.measureText(this.time).height/2;
        if(this.time <=-1)
            this.game.removeGameObject(this);
    }
    
}

export default CountDownUI