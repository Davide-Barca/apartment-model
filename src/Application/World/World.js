import * as THREE from 'three'

import Application from '../Application.js'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { AmbientLight } from 'three'

export default class World{
    constructor(){
        // setup
        this.application = new Application()
        this.scene = this.application.scene

        this.setModel()
    }

    setModel(){
        this.loader = {}
        this.loader.draco = new DRACOLoader()
        this.loader.draco.setDecoderPath('/draco/')

        this.loader.gltf = new GLTFLoader()
        this.loader.gltf.setDRACOLoader(this.loader.draco)
        this.loader.gltf.load(
            '/Model/apartment.glb',
            (gltf) => {
                gltf.scene.receiveShadow = false
                gltf.scene.castShadow = true
                gltf.scene.rotation.y = -(Math.PI / 2)
                this.scene.add(gltf.scene)
            }
        )

        this.light = {}
        this.light.directional = new THREE.DirectionalLight('#ffffff', 1)
        this.light.directional.position.set(3, 3, 3)
        this.light.castShadow = true

        this.light.directional.helper = new THREE.DirectionalLightHelper(this.light.directional)
        this.scene.add(this.light.directional, this.light.directional.helper)
    }
}