import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { AnimatedCameraProxy } from '../src/AnimatedCameraProxy'
import { PointerControl } from '../src/PointerControl'
import Timeline from 'ani-timeline'

const timeline = new Timeline()
timeline.play()

// THREE basic
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	40,
	window.innerWidth / window.innerHeight,
	1000,
	2000000
)
camera.position.z = 2000
const axesHelper = new THREE.AxesHelper(5000)
scene.add(axesHelper)

const light = new THREE.DirectionalLight(0xaaaaaa)
light.position.set(3000, 0, 3000)
scene.add(light)
const light1 = new THREE.DirectionalLight(0x999999)
light1.position.set(-1000, 2000, 5000)
scene.add(light1)

scene.add(new THREE.HemisphereLight())

const renderer = new THREE.WebGLRenderer({ antialias: false })
renderer.setSize(window.innerWidth, window.innerHeight)
document.querySelector('#container').appendChild(renderer.domElement)
var geometry = new THREE.BoxGeometry(1000, 1000, 1000)
var material = new THREE.MeshNormalMaterial()
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const loader = new GLTFLoader()
loader.load(
	'https://gw.alipayobjects.com/os/bmw-prod/967afabe-c643-43b6-ac5f-936ac0850ce1.gltf',
	(gltf) => {
		scene.add(gltf.scene)
	}
)
loader.load(
	'https://gw.alipayobjects.com/os/bmw-prod/3d4fc8ca-41f5-499e-b061-881455c89be7.gltf',
	(gltf) => {
		scene.add(gltf.scene)
	}
)

let flag = true
timeline.addTrack({
	duration: 3000,
	loop: true,
	onStart: () => {
		if (flag) {
			cam.setStatesCodeEase('0|1282.228|4201.386|0.000|0.080|0.280|13.088', 2000)
		} else {
			cam.setStatesCodeEase('0|-3731.118|-8273.084|0.000|1.240|0.260|16.540', 2000)
		}
		flag = !flag
	},
})

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
animate()

const cam = new AnimatedCameraProxy({
	timeline,

	inert: true,

	cameraFOV: camera.fov,
	states: {
		center: [0, 0, 0],
		pitch: 0.5,
		rotation: 0.5,
		zoom: 14,
	},

	canvasHeight: window.innerHeight,
	canvasWidth: window.innerWidth,

	limit: {
		pitch: [-Math.PI, Math.PI],
	},

	onUpdate: (cam) => {
		camera.position.fromArray(cam.position)
		camera.rotation.fromArray(cam.rotationEuler)
		camera.updateMatrix()
	},
})

window['cam'] = cam

// cam.setZoomEase(10, 4000)

const pointerControl = new PointerControl({
	camera: cam,
	element: renderer.domElement,
	// horizontal: false,
})
