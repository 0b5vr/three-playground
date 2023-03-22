import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { VRMUtils } from '@pixiv/three-vrm';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

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

  // -- fbx ----------------------------------------------------------------------------------------
  const loader = new FBXLoader();
  let currentFbx: THREE.Group | null = null;
  let currentMixer: THREE.AnimationMixer | null = null;

  async function loadFBX( url: string ) {
    if ( currentFbx ) {
      currentMixer.stopAllAction();
      scene.remove( currentFbx );
      VRMUtils.deepDispose( currentFbx );
    }

    currentFbx = await loader.loadAsync( url );
    currentFbx.scale.setScalar( 0.01 );

    const clip = currentFbx.animations[ 0 ];
    currentMixer = new THREE.AnimationMixer( currentFbx );
    const action = currentMixer.clipAction( clip );

    action.play();

    scene.add( currentFbx );
  }
  loadFBX( './assets/Capoeira.fbx' );

  // -- loop ---------------------------------------------------------------------------------------
  const clock = new THREE.Clock();
  clock.start();

  renderer.setAnimationLoop( () => {
    const delta = clock.getDelta();

    controls.update();
    currentMixer?.update( delta );
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
  window.addEventListener( 'dragover', ( event ) => {
    event.preventDefault();
  } );

  window.addEventListener( 'drop', async ( event ) => {
    event.preventDefault();

    const file = event.dataTransfer.files[ 0 ];
    const url = URL.createObjectURL( file );
    await loadFBX( url );
    URL.revokeObjectURL( url );
  } );

  // -- uninit -------------------------------------------------------------------------------------
  return () => {
    window.removeEventListener( 'resize', resizeHandler );
    currentMixer.stopAllAction();
    VRMUtils.deepDispose( currentFbx );
    renderer.dispose();
  };
} );
