import * as THREE from 'three'
import { CameraProxy } from '../src/CameraProxy'
import { PointerControl } from '../src/PointerControl'

// THREE basic
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.01, 100000)
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

// sphere indicators
const geometry = new THREE.SphereGeometry(0.1, 40, 20)
const material = new THREE.MeshNormalMaterial()
const spheres = [] as THREE.Mesh[]
spheres[0] = new THREE.Mesh(geometry, material)
spheres[1] = new THREE.Mesh(geometry, material)
spheres[2] = new THREE.Mesh(geometry, material)
spheres[3] = new THREE.Mesh(geometry, material)
spheres.forEach((s) => scene.add(s))

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
animate()

const cam = new CameraProxy({
	cameraFOV: camera.fov,

	canvasHeight: window.innerHeight,
	canvasWidth: window.innerWidth,

	onUpdate: (cam) => {
		camera.position.fromArray(cam.position)
		camera.rotation.fromArray(cam.rotationEuler)
		camera.updateMatrix()
		camera.updateMatrixWorld()
	},
})
const pointerControl = new PointerControl({
	camera: cam,
	element: renderer.domElement,
	// horizontal: false,
})

window.addEventListener('keyup', (event) => {
	if (event.key !== 't') return
	// const corners = cam.getFrustumCorners(true, true)
	const corners = cam.getGeoViewCoords()
	console.log(corners)
	spheres.forEach((s, i) => {
		s.position.copy(corners[i])
		s.updateMatrixWorld()
	})
})

window['cam'] = cam
