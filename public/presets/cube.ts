import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default ( ( { canvas } ) => {
  const { width, height } = canvas.getBoundingClientRect();

  // -- renderer -----------------------------------------------------------------------------------
  const renderer = new THREE.WebGLRenderer( { canvas } );
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

  // -- cube ---------------------------------------------------------------------------------------
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial( { color: 0x22dd22 } );
  const mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  // -- loop ---------------------------------------------------------------------------------------
  const clock = new THREE.Clock();
  clock.start();

  renderer.setAnimationLoop( () => {
    const time = clock.getElapsedTime();

    mesh.rotation.x = 0.1 * time;
    mesh.rotation.y = 0.1 * time;

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

  // -- uninit -------------------------------------------------------------------------------------
  return () => {
    window.removeEventListener( 'resize', resizeHandler );
    renderer.dispose();
  };
} );
