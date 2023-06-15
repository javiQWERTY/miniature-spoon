import { Container, Sprite } from "pixi.js";

export class DinoHat extends Container{
    
    constructor(){
        super();

        const DinoRun: Sprite = Sprite.from("./dino/tile000.png");
        this.addChild(DinoRun);
    }
}