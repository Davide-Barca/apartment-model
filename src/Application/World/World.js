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
        this.time = this.application.time
        this.resources = this.application.resources
        this.model = {}

        this.resources.on('loaded', () => {
            this.setMaterial()
            this.setModel()
        })
    }

    setMaterial(){
        // Setup Backed Textures
        this.backed = {}
        this.backed.baked1 = {}
        this.backed.baked2 = {}
        this.backed.baked3 = {}
        this.backed.luciLampioni = {}

        // Setup Baked Texture
        this.backed.baked1.texture = this.resources.items.baked1
        this.backed.baked1.texture.flipY = false
        this.backed.baked1.texture.encoding = THREE.sRGBEncoding
        this.backed.baked2.texture = this.resources.items.baked2
        this.backed.baked2.texture.flipY = false
        this.backed.baked2.texture.encoding = THREE.sRGBEncoding
        this.backed.baked3.texture = this.resources.items.baked3
        this.backed.baked3.texture.flipY = false
        this.backed.baked3.texture.encoding = THREE.sRGBEncoding


        // Setup Materials
        this.backed.baked1.material = new THREE.MeshBasicMaterial({ map: this.backed.baked1.texture })
        this.backed.baked2.material = new THREE.MeshBasicMaterial({ map: this.backed.baked2.texture })
        this.backed.baked3.material = new THREE.MeshBasicMaterial({ map: this.backed.baked3.texture })
        this.backed.luciLampioni.material = new THREE.MeshBasicMaterial({ color: "#FFFEA6" })
    }


    setModel(){
        this.model.scene = this.resources.items.appartment.scene
        console.log(this.model.scene)
        this.model.scene.rotation.y = - (Math.PI / 2)
        this.model.scene.position.y = -1

        // Select scene children
        this.model.baked1 = this.model.scene.children.find((child) => child.name === 'baked1')
        this.model.baked2 = this.model.scene.children.find((child) => child.name === 'baked2')
        this.model.baked3 = this.model.scene.children.find((child) => child.name === 'baked3')
        this.model.ventola1 = this.model.scene.children.find((child) => child.name === 'ventola1')
        this.model.ventola2 = this.model.scene.children.find((child) => child.name === 'ventola2')
        this.model.ventola3 = this.model.scene.children.find((child) => child.name === 'ventola3')
        this.model.luciLampioni = this.model.scene.children.find((child) => child.name === 'luciLampioni')

        // Assign materials to children
        this.model.baked1.material = this.backed.baked1.material
        this.model.baked2.material = this.backed.baked2.material
        this.model.baked3.material = this.backed.baked3.material
        this.model.ventola1.material = this.backed.baked2.material
        this.model.ventola2.material = this.backed.baked2.material
        this.model.ventola3.material = this.backed.baked2.material
        this.model.luciLampioni.material = this.backed.luciLampioni.material

        this.scene.add(this.model.scene)
    }

    update(){
        if(this.model.ventola1 != undefined){
            this.model.ventola1.rotation.z += 0.1
            this.model.ventola2.rotateX(this.time.delta * 0.007)
            this.model.ventola3.rotateX(this.time.delta * 0.007)
        }
    }
}