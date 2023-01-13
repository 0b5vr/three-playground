import * as THREE from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

// == vertex shader ================================================================================
const quadVert = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

// == fragment shader ==============================================================================
const uvFrag = `
uniform float time;

varying vec2 vUv;

void main() {
  gl_FragColor = vec4( vUv, 0.5 + 0.5 * sin( time ), 1.0 );
}
`;

// == main =========================================================================================
export default ( ( { canvas } ) => {
  const { width, height } = canvas.getBoundingClientRect();

  // -- renderer -----------------------------------------------------------------------------------
  const renderer = new THREE.WebGLRenderer( { canvas } );
  renderer.setSize( width, height, false );
  renderer.setPixelRatio( window.devicePixelRatio );

  // -- fsq ----------------------------------------------------------------------------------------
  const material = new THREE.ShaderMaterial( {
    uniforms: {
      time: { value: 0.0 },
      resolution: { value: new THREE.Vector2( width, height ) },
    },
    vertexShader: quadVert,
    fragmentShader: uvFrag,
  } );

  const fsq = new FullScreenQuad( material );

  // -- loop ---------------------------------------------------------------------------------------
  const clock = new THREE.Clock();
  clock.start();

  renderer.setAnimationLoop( () => {
    const time = clock.getElapsedTime();
    material.uniforms[ 'time' ].value = time;

    fsq.render( renderer );
  } );

  // -- resize handler -----------------------------------------------------------------------------
  const resizeHandler = () => {
    const { width, height } = canvas.getBoundingClientRect();
    renderer.setSize( width, height, false );
    material.uniforms[ 'resolution' ].value.set( width, height );
  };
  window.addEventListener( 'resize', resizeHandler );

  // -- uninit -------------------------------------------------------------------------------------
  return () => {
    window.removeEventListener( 'resize', resizeHandler );
    renderer.dispose();
  };
} );
