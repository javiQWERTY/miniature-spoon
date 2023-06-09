import { Application, Assets, BaseTexture, SCALE_MODES, settings} from 'pixi.js'
import { SceneMenu } from './Scenes/SceneMenu';
import { assets } from './assets';
import { Scene } from './Scenes/Scene';

settings.ROUND_PIXELS = true;
BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST;

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", () => {
	console.log("resized");
	//Escala.
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	//Cambiar el tamaño de lo que se esta renderizando.
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	if(app.view.style){
		app.view.style.width = gameWidth + "px";
		app.view.style.height = gameHeight + "px";
	}
	
	//Calculo del margen.
	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	//Centrar el "juego".
	if(app.view.style){
		(app.view.style as any).marginLeft = marginHorizontal + "px";
		(app.view.style as any).marginRight = marginHorizontal + "px";
		(app.view.style as any).marginTop = marginVertical + "px";
		(app.view.style as any).marginBottom = marginVertical + "px";
	}
})
window.dispatchEvent(new Event("resize"));

Assets.add("Clampy", "/clampy.png");
Assets.add("myDino", "/dino.png");
Assets.add("dinoHat", "/dinohat.png");

Assets.addBundle("myAssets", assets);
Assets.loadBundle(["myAssets"]).then(()=>{

	const myScene = new Scene();
	const myMenuScene = new SceneMenu();
	app.stage.addChild(myScene);
	app.stage.addChild(myMenuScene);
})