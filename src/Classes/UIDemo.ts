import { Container, Sprite } from "pixi.js";

export class UIDemo extends Container{

    constructor(){
        super();

        const dialog = new Container();
        dialog.x = 100;
        dialog.y = 50;

        const background = Sprite.from("Window");
        dialog.addChild(background);
    }
}