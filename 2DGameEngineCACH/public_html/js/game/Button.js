import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import Level from "./Level.js"
class Button extends GameObject
{
    constructor(x, y, w, h, str, col='lightgreen')
    {
        super(x,y);
        this.width = w;
        this.height = h;
        this.text = str;
        this.color = col;
        this.addComponent(new Renderer(w, h));
        document.addEventListener('click', this.click.bind(this),
        false);
    }
    click(event)
    {
      let rect = this.game.canvas.getBoundingClientRect();
      let width = this.width;
      let height = this.height;
      
      if (event.clientX - rect.left >= this.x 
              && event.clientX - rect.left <= this.x + width 
              && event.clientY - rect.top >= this.y 
              && event.clientY - rect.top <= this.y + height) 
      {
          
        if(this.text === "Start")
        {
            const level = new Level(this.game.canvas.id);
            level.start();
        }
        if(this.text === "Pause")
        {
            this.game.pauseGame();
            
        }
      }    

    }
    draw(ctx)
    {
        
        ctx.fillStyle=this.color;
        ctx.fillRect(this.game.camera.x + this.x,
        this.game.camera.y + this.y, this.width, this.height );
        ctx.textAlign = "center";
        ctx.font = "20px serif";
        ctx.fillStyle="white";
        ctx.fillText(this.text,
        this.game.camera.x + this.x + this.width/2, 
        this.game.camera.y + this.y + 15);
    }
    
}

export default Button

