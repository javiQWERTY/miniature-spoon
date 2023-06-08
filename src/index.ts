import { Application, Assets, Container, Sprite} from 'pixi.js'

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

Assets.load(["Clampy", "myDino", "Hat"]).then(()=>{
const dino: Sprite = Sprite.from("dino.png");

const hat: Sprite = Sprite.from("dinohat.png");

hat.position.set(90, -100);

//Creacion de un contenedor para el dino/hat.
const dinoWithHat: Container = new Container();

dinoWithHat.addChild(dino);
dinoWithHat.addChild(hat);

dinoWithHat.scale.set(0.5);
dinoWithHat.position.set(100)

app.stage.addChild(dinoWithHat);
})