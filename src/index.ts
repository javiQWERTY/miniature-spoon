import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("Clampy", "/clampy.png");
Assets.add("myDino", "/dino.png");

Assets.load(["Clampy", "myDino"]).then(()=>{
const clampy: Sprite = Sprite.from("dino.png");


//clampy.anchor.set(0.5);

clampy.x = 0;
clampy.y = 0;

app.stage.addChild(clampy);
})