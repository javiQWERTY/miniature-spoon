import { AnimatedSprite, Container, Texture } from "pixi.js";
//import { DinoHat } from "./DinoHat";

export class Scene extends Container{

    constructor(){
        super();

        /*const dinoWithHat: DinoHat = new DinoHat();
        dinoWithHat.scale.set(1);
        dinoWithHat.position.set(50);*/
        
        const dinoAnimated: AnimatedSprite = new AnimatedSprite([

            Texture.from("DinoRun"),
            Texture.from("DinoRun1"), 
            Texture.from("DinoRun2"), 
            Texture.from("DinoRun3"), 
            Texture.from("DinoRun4"), 
            Texture.from("DinoRun5"), 
            Texture.from("DinoRun6"), 
            Texture.from("DinoRun7"), 
            Texture.from("DinoRun8"), 
            Texture.from("DinoRun9"), 
            Texture.from("DinoRun10"),
            Texture.from("DinoRun11"),
            Texture.from("DinoRun12"),
            Texture.from("DinoRun13"),
            Texture.from("DinoRun17"),
            Texture.from("DinoRun18"),
            Texture.from("DinoRun19"),
            Texture.from("DinoRun20"),
            Texture.from("DinoRun21"),
            Texture.from("DinoRun22"),
            Texture.from("DinoRun23"),             
        ],true
        )
        dinoAnimated.scale.set(10);
        dinoAnimated.position.set(100);
        dinoAnimated.play();
        dinoAnimated.animationSpeed = 0.25;
        this.addChild(dinoAnimated);
        //this.addChild(dinoWithHat);
    }
}