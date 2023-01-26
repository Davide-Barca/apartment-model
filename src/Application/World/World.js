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

        this.loader.texture = new THREE.TextureLoader()
        this.loader.texture.load(
            'ModelDev/baked04.jpg',
            (texture) => {
                this.bakedTexture = texture
                this.bakedTexture.flipY = false
                this.bakedTexture.encoding = THREE.sRGBEncoding

                this.bakedMaterial = new THREE.MeshBasicMaterial({ map: this.bakedTexture })
            }
        )

        this.loader.gltf = new GLTFLoader()
        this.loader.gltf.setDRACOLoader(this.loader.draco)
        this.loader.gltf.load(
            '/ModelDev/apartment.glb',
            (gltf) => {
                this.baked = gltf.scene.children.find((child) => child.name === 'Marciapiede')
                this.baked.material = this.bakedMaterial
                gltf.scene.rotation.y = -(Math.PI / 2)
                this.scene.add(gltf.scene)
            }
        )

        this.light = {}
        this.light.directional = new THREE.DirectionalLight('#ffffff', 1)
        this.light.directional.position.set(3, 3, 3)
        this.light.castShadow = true

        this.light.directional.helper = new THREE.DirectionalLightHelper(this.light.directional)
        // this.scene.add(this.light.directional, this.light.directional.helper)
    }
}