import { Container } from "pixi.js";
import { UIDemo } from "../Classes/UIDemo";

export class SceneMenu extends Container{

    constructor(){
        super();

        const myMenu: UIDemo = new UIDemo;
        myMenu.scale.set(10);
        myMenu.position.set(100);

        this.addChild(myMenu);
    }
}