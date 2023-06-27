import * as THREE from 'three'
import { AnimatedCameraProxy } from '../src/AnimatedCameraProxy'
import { TouchControl } from '../src/TouchControl'
import { RemoteSyncer } from '../src/RemoteSyncer'
import Timeline from 'ani-timeline'

const timeline = new Timeline()
timeline.play()

// THREE basic
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 100, 200000)
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

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.querySelector('#container')!.appendChild(renderer.domElement)
var geometry = new THREE.BoxGeometry(1000, 1000, 1000)
var material = new THREE.MeshNormalMaterial()
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
animate()

const cam = new AnimatedCameraProxy({
	cameraFOV: camera.fov,
	timeline,
	// inert: 0.05,
	states: {
		center: [0, 0, 0],
		pitch: 0.5,
		rotation: 0.5,
		zoom: 14,
	},

	canvasHeight: window.innerHeight,
	canvasWidth: window.innerWidth,

	limit: {
		pitch: [0, Math.PI / 2 - 0.1],
	},

	onUpdate: (cam) => {
		camera.position.fromArray(cam.position)
		camera.rotation.fromArray(cam.rotationEuler)
		camera.updateMatrix()
		camera.updateMatrixWorld()
	},
})
const pointerControl = new TouchControl({
	camera: cam,
	element: renderer.domElement,
})

window['cam'] = cam

const syncer = new RemoteSyncer({
	camera: cam,
	channel: 'demo/001',
	role: 'slave',
})

window['syncer'] = syncer
