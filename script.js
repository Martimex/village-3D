import * as THREE from "three";
import GUI from "lil-gui";
import { OrbitControls, TextGeometry } from "three/examples/jsm/Addons.js";
import { FontLoader } from "three/examples/jsm/Addons.js";
import _Create from "./helpers/create.js";
import _LOAD from "./helpers/load.js";

// HOOK FOR HTML CANVAS ELEMENT
const CANVAS_EL = document.querySelector('canvas#webgl-canvas');
	
// USED TO TWEAK THE ISSUE WITH INTERNAL THREEJS COLOR MANAGEMENT
const GUI_GLOBALS = {
	color: "#59a1f3"
}
	
// GLOBAL OBJECT USED TO HANDLE WINDOW RESIZING
const SIZES = {
	WIDTH: window.innerWidth,
	HEIGHT: window.innerHeight,
	updateAspect: function() { return this.WIDTH / this.HEIGHT }
}
	
// Adjust canvas size when resizing the window
window.addEventListener("resize", () => {
	SIZES.WIDTH = window.innerWidth;
	SIZES.HEIGHT = window.innerHeight;
	camera.aspect = SIZES.updateAspect();
	camera.updateProjectionMatrix();
	renderer.setSize(SIZES.WIDTH, SIZES.HEIGHT);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
	
// Toggle fullscreen mode on double click
window.addEventListener('dblclick', () => {
	const fullScreenEl = document.fullscreenElement || document.webkitFullscreenElement;
	if(!fullScreenEl) {
		if(CANVAS_EL.requestFullscreen) CANVAS_EL.requestFullscreen();
		else if(CANVAS_EL.webkitRequestFullscreen) CANVAS_EL.webkitRequestFullscreen();
	} else {
		if(document.exitFullscreen) document.exitFullscreen();
		else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
	}
});

// Loaders

const matcapTexture = _LOAD.textMatcap();
const fontLoader = new FontLoader();
const text_Size = 0.75;
fontLoader.load("./fonts/Bruno_Ace_SC_Regular.json",
	(font) => {
		const textGeometry = new TextGeometry(
			"M-DEV",
			{
				font: font,
				size: text_Size,
				depth: 0.2,
				curveSegments: 12,
				bevelEnabled: true,
				bevelThickness: 0.03,
				bevelSize: 0.02,
				bevelOffset: 0,
				bevelSegments: 5,
			}
		);
		textGeometry.center();
		const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture, color: "#ccc" });
		const text = new THREE.Mesh(textGeometry, textMaterial);
		text.position.x = 9;
		text.position.z = 11.5;
		text.position.y = text_Size;
		scene.add(text);
	}
)

	
// Initialize the scene and groups
const scene = new THREE.Scene();
const floor_Group = new THREE.Group();   scene.add(floor_Group);
const house1_Group = new THREE.Group();  scene.add(house1_Group);
const house2_Group = new THREE.Group();  scene.add(house2_Group);
const fence_Group = new THREE.Group();   scene.add(fence_Group);
const lamp_Group = new THREE.Group();    scene.add(lamp_Group);
const sidewalk_Group = new THREE.Group(); scene.add(sidewalk_Group);
const ladder_Group = new THREE.Group();  scene.add(ladder_Group);
const garden_Group = new THREE.Group();  scene.add(garden_Group);
const well_Group = new THREE.Group();    scene.add(well_Group);
const buckets_Group = new THREE.Group(); scene.add(buckets_Group);
const trees_Group = new THREE.Group();    scene.add(trees_Group);
const toilet_Group = new THREE.Group();  scene.add(toilet_Group);
const lane_Group = new THREE.Group();    scene.add(lane_Group);
const solidwall_Group = new THREE.Group(); scene.add(solidwall_Group);
/* const floralbow_Group = new THREE.Group(); scene.add(floralbow_Group); */
const stones_Group = new THREE.Group(); scene.add(stones_Group);
const bush_Group = new THREE.Group(); scene.add(bush_Group);
const minifence_Group = new THREE.Group(); scene.add(minifence_Group);
const pool_Group = new THREE.Group();    scene.add(pool_Group);
const sandbox_Group = new THREE.Group(); scene.add(sandbox_Group);

// Create a shape and add it to the scene
_Create.ground(floor_Group);
_Create.house1(house1_Group);
_Create.house2(house2_Group);
_Create.fence(fence_Group);
_Create.lamp(lamp_Group);
_Create.sidewalk(sidewalk_Group);
_Create.ladder(ladder_Group);
_Create.garden(garden_Group);
_Create.well(well_Group);
_Create.buckets(buckets_Group);
_Create.trees(trees_Group);
_Create.toilet(toilet_Group);
_Create.lane(lane_Group);
_Create.solidwall(solidwall_Group);
_Create.stones(stones_Group);
_Create.bush(bush_Group);
_Create.minifence(minifence_Group);
_Create.pool(pool_Group);
_Create.sandbox(sandbox_Group);


// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
	
const camera = new THREE.PerspectiveCamera(75, SIZES.WIDTH / SIZES.HEIGHT, 1, 100);
camera.position.z = 20; // Initially put camera backwards to create some distance between the camera and object
camera.position.y = 4;
scene.add(camera);
	
const renderer = new THREE.WebGLRenderer({
	canvas: CANVAS_EL
});
	
renderer.setSize(SIZES.WIDTH, SIZES.HEIGHT);
renderer.render(scene, camera);
	
// Optional - instantiate lil-gui debug panel (first install dependency with: npm i lil-gui)
/* const gui = new GUI(); */
    
// Optional - initialize OrbitControls
const controls = new OrbitControls(camera, CANVAS_EL);
controls.enableDamping = true;  // In case you want smoother animation

// Lil-gui controls (optional)
/* gui.add(floor_Group.scale, "x").min(1).max(2).step(0.1).name("Scale X");
gui.add(floor_Group.scale, "y").min(1).max(2).step(0.1).name("Scale Y"); */
/* gui.addColor(GUI_GLOBALS, "color").onChange(() => floorGeoMaterial.color.set(GUI_GLOBALS.color)); */
	
// Set up and further use timer for precise animation regardless of device frame rate
const timer = new THREE.Timer();
	
const loop = () => {
	timer.update();
    const elapsedTime = timer.getElapsed();
	controls.update();
    
	renderer.render(scene, camera);
	window.requestAnimationFrame(loop);
}
	
loop();