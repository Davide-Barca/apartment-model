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
        this.resources = this.application.resources

        this.axes = new THREE.AxesHelper(10)

        this.scene.add(this.axes)

        this.resources.on('loaded', () => {
            this.setMaterial()
            this.setModel()
        })
    }

    setMaterial(){
        // Setup Backed Textures
        this.backed = {}
        this.backed.marciapiede = {}
        this.backed.palazzo1 = {}
        this.backed.palazzo2 = {}
        this.backed.palazzo3 = {}
        this.backed.finestre1 = {}
        this.backed.finestre2 = {}
        this.backed.finestre3 = {}
        this.backed.tende = {}
        this.backed.scaleEsterne = {}
        this.backed.aiuola = {}
        this.backed.oggetti1 = {}
        this.backed.oggetti2 = {}
        this.backed.luciLampioni = {}
        // Marciapiede Texture
        this.backed.marciapiede.texture = this.resources.items.marciapiede
        this.backed.marciapiede.texture.flipY = false
        this.backed.marciapiede.texture.encoding = THREE.sRGBEncoding
        // Palazzo Texture
        this.backed.palazzo1.texture = this.resources.items.palazzo1
        this.backed.palazzo1.texture.flipY = false
        this.backed.palazzo1.texture.encoding = THREE.sRGBEncoding
        this.backed.palazzo2.texture = this.resources.items.palazzo2
        this.backed.palazzo2.texture.flipY = false
        this.backed.palazzo2.texture.encoding = THREE.sRGBEncoding
        this.backed.palazzo3.texture = this.resources.items.palazzo3
        this.backed.palazzo3.texture.flipY = false
        this.backed.palazzo3.texture.encoding = THREE.sRGBEncoding
        // Finestre Texture
        this.backed.finestre1.texture = this.resources.items.finestre1
        this.backed.finestre1.texture.flipY = false
        this.backed.finestre1.texture.encoding = THREE.sRGBEncoding
        this.backed.finestre2.texture = this.resources.items.finestre2
        this.backed.finestre2.texture.flipY = false
        this.backed.finestre2.texture.encoding = THREE.sRGBEncoding
        this.backed.finestre3.texture = this.resources.items.finestre3
        this.backed.finestre3.texture.flipY = false
        this.backed.finestre3.texture.encoding = THREE.sRGBEncoding
        // Tende Texture
        this.backed.tende.texture = this.resources.items.tende
        this.backed.tende.texture.flipY = false
        this.backed.tende.texture.encoding = THREE.sRGBEncoding
        // Scale Esterne Texture
        this.backed.scaleEsterne.texture = this.resources.items.scaleEsterne
        this.backed.scaleEsterne.texture.flipY = false
        this.backed.scaleEsterne.texture.encoding = THREE.sRGBEncoding
        // Aiuola Texture
        this.backed.aiuola.texture = this.resources.items.aiuola
        this.backed.aiuola.texture.flipY = false
        this.backed.aiuola.texture.encoding = THREE.sRGBEncoding
        // Oggetti Texture
        this.backed.oggetti1.texture = this.resources.items.oggetti1
        this.backed.oggetti1.texture.flipY = false
        this.backed.oggetti1.texture.encoding = THREE.sRGBEncoding
        this.backed.oggetti2.texture = this.resources.items.oggetti2
        this.backed.oggetti2.texture.flipY = false
        this.backed.oggetti2.texture.encoding = THREE.sRGBEncoding

        // Setup Materials
        this.backed.marciapiede.material = new THREE.MeshBasicMaterial({ map: this.backed.marciapiede.texture })
        this.backed.palazzo1.material = new THREE.MeshBasicMaterial({ map: this.backed.palazzo1.texture })
        this.backed.palazzo2.material = new THREE.MeshBasicMaterial({ map: this.backed.palazzo2.texture })
        this.backed.palazzo3.material = new THREE.MeshBasicMaterial({ map: this.backed.palazzo3.texture })
        this.backed.finestre1.material = new THREE.MeshBasicMaterial({ map: this.backed.finestre1.texture })
        this.backed.finestre2.material = new THREE.MeshBasicMaterial({ map: this.backed.finestre2.texture })
        this.backed.finestre3.material = new THREE.MeshBasicMaterial({ map: this.backed.finestre3.texture })
        this.backed.tende.material = new THREE.MeshBasicMaterial({ map: this.backed.tende.texture })
        this.backed.scaleEsterne.material = new THREE.MeshBasicMaterial({ map: this.backed.scaleEsterne.texture })
        this.backed.aiuola.material = new THREE.MeshBasicMaterial({ map: this.backed.aiuola.texture })
        this.backed.oggetti1.material = new THREE.MeshBasicMaterial({ map: this.backed.oggetti1.texture })
        this.backed.oggetti2.material = new THREE.MeshBasicMaterial({ map: this.backed.oggetti2.texture })

        this.backed.luciLampioni.material = new THREE.MeshBasicMaterial({ color: "#FFFEA6" })
    }

    setModel(){
        this.model = {}
        this.model.scene = this.resources.items.appartment.scene
        this.model.scene.rotation.y = - (Math.PI / 2)
        this.model.scene.position.y = -1

        this.model.marciapiede = this.model.scene.children.find((child) => child.name === 'marciapiede')
        this.model.palazzo1 = this.model.scene.children.find((child) => child.name === 'palazzo1')
        this.model.palazzo2 = this.model.scene.children.find((child) => child.name === 'palazzo2')
        this.model.palazzo3 = this.model.scene.children.find((child) => child.name === 'palazzo3')
        this.model.finestre1 = this.model.scene.children.find((child) => child.name === 'finestre1')
        this.model.finestre2 = this.model.scene.children.find((child) => child.name === 'finestre2')
        this.model.finestre3 = this.model.scene.children.find((child) => child.name === 'finestre3')
        this.model.tende = this.model.scene.children.find((child) => child.name === 'tende')
        this.model.scaleEsterne = this.model.scene.children.find((child) => child.name === 'scaleEsterne')
        this.model.aiuola = this.model.scene.children.find((child) => child.name === 'aiuola')
        this.model.oggetti1 = this.model.scene.children.find((child) => child.name === 'oggetti1')
        this.model.oggetti2 = this.model.scene.children.find((child) => child.name === 'oggetti2')

        this.model.luciLampioni = this.model.scene.children.find((child) => child.name === 'luciLampioni')

        this.model.marciapiede.material = this.backed.marciapiede.material
        this.model.palazzo1.material = this.backed.palazzo1.material
        this.model.palazzo2.material = this.backed.palazzo2.material
        this.model.palazzo3.material = this.backed.palazzo3.material
        this.model.finestre1.material = this.backed.finestre1.material
        this.model.finestre2.material = this.backed.finestre2.material
        this.model.finestre3.material = this.backed.finestre3.material
        this.model.tende.material = this.backed.tende.material
        this.model.scaleEsterne.material = this.backed.scaleEsterne.material
        this.model.aiuola.material = this.backed.aiuola.material
        this.model.oggetti1.material = this.backed.oggetti1.material
        this.model.oggetti2.material = this.backed.oggetti2.material

        this.model.luciLampioni.material = this.backed.luciLampioni.material

        this.scene.add(this.model.scene)
    }
}