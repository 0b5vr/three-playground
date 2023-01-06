import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { VRM, VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';

export default ( ( { canvas } ) => {
  const { width, height } = canvas.getBoundingClientRect();

  // -- renderer -----------------------------------------------------------------------------------
  const renderer = new THREE.WebGLRenderer( { canvas } );
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setSize( width, height, false );

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

  // -- vrm ----------------------------------------------------------------------------------------
  const loader = new GLTFLoader();
  loader.register( ( parser ) => {
    return new VRMLoaderPlugin( parser );
  } );

  let currentVrm: VRM | null = null;

  async function loadVRM( url: string ) {
    if ( currentVrm ) {
      scene.remove( currentVrm.scene );
      VRMUtils.deepDispose( currentVrm.scene );
    }

    const gltf = await loader.loadAsync( url );

    currentVrm = gltf.userData.vrm;

    VRMUtils.removeUnnecessaryVertices( currentVrm.scene );
    VRMUtils.removeUnnecessaryJoints( currentVrm.scene );

    currentVrm.scene.traverse( ( obj ) => {
      obj.frustumCulled = false;
    } );

    VRMUtils.rotateVRM0( currentVrm );

    scene.add( currentVrm.scene );
  }
  loadVRM( './assets/VRM1_Constraint_Twist_Sample.vrm' );

  // -- loop ---------------------------------------------------------------------------------------
  const clock = new THREE.Clock();
  clock.start();

  renderer.setAnimationLoop( () => {
    const time = clock.getElapsedTime();

    controls.update();
    currentVrm?.update( time );
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
    await loadVRM( url );
    URL.revokeObjectURL( url );
  } );

  // -- uninit -------------------------------------------------------------------------------------
  return () => {
    window.removeEventListener( 'resize', resizeHandler );
    VRMUtils.deepDispose( currentVrm?.scene );
    renderer.dispose();
  };
} );
