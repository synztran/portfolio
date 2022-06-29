import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const VoxelDog = () => {
  const refContainer = useRef(null)
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [renderer])
  useEffect(() => {
    let mixer
    const { current: container } = refContainer
    if (container && !renderer) {
      const clock = new THREE.Clock()
      const scW = container.clientWidth
      const scH = container.clientHeight
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.outputEncoding = THREE.sRGBEncoding
      renderer.setSize(scW, scH)
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const pmremGenerator = new THREE.PMREMGenerator(renderer)

      const scene = new THREE.Scene()
      // scene.background = new THREE.Color(0x202023) // setbackground of ele

      scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04
      ).texture

      const camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        100
      )
      camera.position.set(5, 2, 8)

      const controls = new OrbitControls(camera, renderer.domElement)
      // controls.enableZoom = false
      controls.target.set(0, 0.5, 0)
      controls.update()
      controls.enablePan = false
      controls.enableDamping = true

      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('/gltf/')

      const loader = new GLTFLoader()
      loader.setDRACOLoader(dracoLoader)
      loader.load(
        '/models/gltf/LittlestTokyo.glb',
        function (gltf) {
          const model = gltf.scene
          model.position.set(1, 1, 0)
          model.scale.set(0.01, 0.01, 0.01)
          scene.add(model)

          mixer = new THREE.AnimationMixer(model)
          mixer.clipAction(gltf.animations[0]).play()

          animate()
          setLoading(false)
        },
        undefined,
        function (e) {
          console.error(e)
        }
      )

      const animate = () => {
        requestAnimationFrame(animate)
        const delta = clock.getDelta()

        mixer.update(delta)

        controls.update()
        renderer.setClearColor(0x000000, 0)
        renderer.render(scene, camera)
      }

      window.onresize = function () {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight)
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <Box
      ref={refContainer}
      className="voxel-dog"
      m="auto"
      at={['-20px', '-60px', '-60px']}
      mb={['-40px', '-20px', '-10px']}
      w={[180, 360, 440]}
      h={[180, 360, 440]}
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="25%"
          ml="calc(0px - var(--spinner-size) /2)"
          mt="calc(0px - var(--spinner-size))"
        ></Spinner>
      )}
    </Box>
  )
}

export default VoxelDog
