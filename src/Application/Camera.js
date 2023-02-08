import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Application from './Application.js'

export default class Camera{
    constructor(){
        // Setup
        this.application = new Application()
        this.sizes = this.application.sizes
        this.time = this.application.time
        this.canvas = this.application.canvas
        this.scene = this.application.scene

        this.setInstance()
        this.setOrbitControl()
    }

    setInstance(){
        this.instance = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(5, 4, 5)
        this.scene.add(this.instance)
    }

    setOrbitControl(){
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        // Limit horizontal movement
        // this.controls.maxAzimuthAngle = Math.PI / 2
        // this.controls.minAzimuthAngle = 0
        // Limit vertical movement
        // this.controls.maxPolarAngle = Math.PI / 2
        // Limit zoom in and zoom out
        this.controls.minDistance = 4
        this.controls.maxDistance = 6
        // Smooth movement
        this.controls.rotateSpeed = 0.2
        this.controls.zoomSpeed = 0.2
        // Pan movement disabled
        this.controls.enablePan = false
    }

    resize(){
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update(){
        this.controls.update()
    }
}