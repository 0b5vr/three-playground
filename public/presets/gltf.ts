import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { VRMUtils } from '@pixiv/three-vrm';

export default ( ( { canvas } ) => {
  const { width, height } = canvas.getBoundingClientRect();

  // -- renderer -----------------------------------------------------------------------------------
  const renderer = new THREE.WebGLRenderer( { canvas } );
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setSize( width, height, false );
  renderer.setPixelRatio( window.devicePixelRatio );

  // -- camera -------------------------------------------------------------------------------------
  const camera = new THREE.PerspectiveCamera( 45.0, width / height, 0.01, 100.0 );
  camera.position.set( 0.0, 0.0, 5.0 );

  const controls = new OrbitControls( camera, canvas );

  // -- scene --------------------------------------------------------------------------------------
  const scene = new THREE.Scene();

  // -- light --------------------------------------------------------------------------------------
  const directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.set( 3.0, 4.0, 5.0 );
  scene.add( directionalLight );

  // -- gltf ---------------------------------------------------------------------------------------
  const loader = new GLTFLoader();

  let currentGltf: THREE.Group | null = null;

  async function loadGLTF( url: string ) {
    if ( currentGltf ) {
      scene.remove( currentGltf );
      VRMUtils.deepDispose( currentGltf );
    }

    const gltf = await loader.loadAsync( url );

    currentGltf = gltf.scene;

    scene.add( currentGltf );
  }
  loadGLTF( './assets/Avocado.glb' );

  // -- loop ---------------------------------------------------------------------------------------
  const clock = new THREE.Clock();
  clock.start();

  renderer.setAnimationLoop( () => {
    controls.update();
    renderer.render( scene, camera );
  } );

  // -- resize handler -----------------------------------------------------------------------------
  const resizeHandler = () => {
    const { width, height } = canvas.getBoundingClientRect();
    renderer.setSize( width, height, false );

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  window.addEventListener( 'resize', resizeHandler );

  // -- dnd handler --------------------------------------------------------------------------------
  const dragoverHandler = ( event: DragEvent ) => {
    event.preventDefault();
  };
  window.addEventListener( 'dragover', dragoverHandler );

  const dropHandler = async ( event: DragEvent ) => {
    event.preventDefault();

    const file = event.dataTransfer.files[ 0 ];
    const url = URL.createObjectURL( file );
    await loadGLTF( url );
    URL.revokeObjectURL( url );
  };
  window.addEventListener( 'drop', dropHandler );

  // -- uninit -------------------------------------------------------------------------------------
  return () => {
    window.removeEventListener( 'resize', resizeHandler );
    window.removeEventListener( 'dragover', dragoverHandler );
    window.removeEventListener( 'drop', dropHandler );

    VRMUtils.deepDispose( currentGltf );
    renderer.dispose();
  };
} );
