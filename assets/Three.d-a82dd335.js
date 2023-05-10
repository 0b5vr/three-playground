const e=`declare module 'three/src/Three' {
/**
 * SRC
 */
export * from 'three/src/constants';
export * from 'three/src/Three.Legacy';
export * from 'three/src/utils';
/**
 * Animation
 */
export * from 'three/src/animation/tracks/VectorKeyframeTrack';
export * from 'three/src/animation/tracks/StringKeyframeTrack';
export * from 'three/src/animation/tracks/QuaternionKeyframeTrack';
export * from 'three/src/animation/tracks/NumberKeyframeTrack';
export * from 'three/src/animation/tracks/ColorKeyframeTrack';
export * from 'three/src/animation/tracks/BooleanKeyframeTrack';
export * from 'three/src/animation/PropertyMixer';
export * from 'three/src/animation/PropertyBinding';
export * from 'three/src/animation/KeyframeTrack';
import * as AnimationUtils from 'three/src/animation/AnimationUtils';
export { AnimationUtils };
export * from 'three/src/animation/AnimationObjectGroup';
export * from 'three/src/animation/AnimationMixer';
export * from 'three/src/animation/AnimationClip';
export * from 'three/src/animation/AnimationAction';
/**
 * Audio
 */
export * from 'three/src/audio/AudioListener';
export * from 'three/src/audio/PositionalAudio';
export * from 'three/src/audio/AudioContext';
export * from 'three/src/audio/AudioAnalyser';
export * from 'three/src/audio/Audio';
/**
 * Cameras
 */
export * from 'three/src/cameras/StereoCamera';
export * from 'three/src/cameras/PerspectiveCamera';
export * from 'three/src/cameras/OrthographicCamera';
export * from 'three/src/cameras/CubeCamera';
export * from 'three/src/cameras/ArrayCamera';
export * from 'three/src/cameras/Camera';
/**
 * Core
 */
export * from 'three/src/core/Uniform';
export * from 'three/src/core/UniformsGroup';
export * from 'three/src/core/InstancedBufferGeometry';
export * from 'three/src/core/BufferGeometry';
export * from 'three/src/core/InterleavedBufferAttribute';
export * from 'three/src/core/InstancedInterleavedBuffer';
export * from 'three/src/core/InterleavedBuffer';
export * from 'three/src/core/InstancedBufferAttribute';
export * from 'three/src/core/GLBufferAttribute';
export * from 'three/src/core/BufferAttribute';
export * from 'three/src/core/Object3D';
export * from 'three/src/core/Raycaster';
export * from 'three/src/core/Layers';
export * from 'three/src/core/EventDispatcher';
export * from 'three/src/core/Clock';
/**
 * Extras
 */
export * from 'three/src/extras/curves/Curves';
export * from 'three/src/extras/core/Shape';
export * from 'three/src/extras/core/Path';
export * from 'three/src/extras/core/ShapePath';
export * from 'three/src/extras/core/CurvePath';
export * from 'three/src/extras/core/Curve';
export * as DataUtils from 'three/src/extras/DataUtils';
export * from 'three/src/extras/Earcut';
export * from 'three/src/extras/ImageUtils';
export * from 'three/src/extras/ShapeUtils';
export * from 'three/src/extras/PMREMGenerator';
/**
 * Geometries
 */
export * from 'three/src/geometries/Geometries';
/**
 * Helpers
 */
export * from 'three/src/helpers/SpotLightHelper';
export * from 'three/src/helpers/SkeletonHelper';
export * from 'three/src/helpers/PointLightHelper';
export * from 'three/src/helpers/HemisphereLightHelper';
export * from 'three/src/helpers/GridHelper';
export * from 'three/src/helpers/PolarGridHelper';
export * from 'three/src/helpers/DirectionalLightHelper';
export * from 'three/src/helpers/CameraHelper';
export * from 'three/src/helpers/BoxHelper';
export * from 'three/src/helpers/Box3Helper';
export * from 'three/src/helpers/PlaneHelper';
export * from 'three/src/helpers/ArrowHelper';
export * from 'three/src/helpers/AxesHelper';
/**
 * Lights
 */
export * from 'three/src/lights/SpotLightShadow';
export * from 'three/src/lights/SpotLight';
export * from 'three/src/lights/PointLight';
export * from 'three/src/lights/PointLightShadow';
export * from 'three/src/lights/RectAreaLight';
export * from 'three/src/lights/HemisphereLight';
export * from 'three/src/lights/DirectionalLightShadow';
export * from 'three/src/lights/DirectionalLight';
export * from 'three/src/lights/AmbientLight';
export * from 'three/src/lights/LightShadow';
export * from 'three/src/lights/Light';
export * from 'three/src/lights/AmbientLightProbe';
export * from 'three/src/lights/HemisphereLightProbe';
export * from 'three/src/lights/LightProbe';
/**
 * Loaders
 */
export * from 'three/src/loaders/AnimationLoader';
export * from 'three/src/loaders/CompressedTextureLoader';
export * from 'three/src/loaders/DataTextureLoader';
export * from 'three/src/loaders/CubeTextureLoader';
export * from 'three/src/loaders/TextureLoader';
export * from 'three/src/loaders/ObjectLoader';
export * from 'three/src/loaders/MaterialLoader';
export * from 'three/src/loaders/BufferGeometryLoader';
export * from 'three/src/loaders/LoadingManager';
export * from 'three/src/loaders/ImageLoader';
export * from 'three/src/loaders/ImageBitmapLoader';
export * from 'three/src/loaders/FileLoader';
export * from 'three/src/loaders/Loader';
export * from 'three/src/loaders/LoaderUtils';
export * from 'three/src/loaders/Cache';
export * from 'three/src/loaders/AudioLoader';
/**
 * Materials
 */
export * from 'three/src/materials/Materials';
/**
 * Math
 */
export * from 'three/src/math/interpolants/QuaternionLinearInterpolant';
export * from 'three/src/math/interpolants/LinearInterpolant';
export * from 'three/src/math/interpolants/DiscreteInterpolant';
export * from 'three/src/math/interpolants/CubicInterpolant';
export * from 'three/src/math/Interpolant';
export * from 'three/src/math/Triangle';
export * from 'three/src/math/Spherical';
export * from 'three/src/math/Cylindrical';
export * from 'three/src/math/Plane';
export * from 'three/src/math/Frustum';
export * from 'three/src/math/Sphere';
export * from 'three/src/math/Ray';
export * from 'three/src/math/Matrix4';
export * from 'three/src/math/Matrix3';
export * from 'three/src/math/Box3';
export * from 'three/src/math/Box2';
export * from 'three/src/math/Line3';
export * from 'three/src/math/Euler';
export * from 'three/src/math/Vector4';
export * from 'three/src/math/Vector3';
export * from 'three/src/math/Vector2';
export * from 'three/src/math/Quaternion';
export * from 'three/src/math/Color';
export * from 'three/src/math/SphericalHarmonics3';
export { ColorManagement } from 'three/src/math/ColorManagement';
import * as MathUtils from 'three/src/math/MathUtils';
export { MathUtils };
/**
 * Objects
 */
export * from 'three/src/objects/Sprite';
export * from 'three/src/objects/LOD';
export * from 'three/src/objects/InstancedMesh';
export * from 'three/src/objects/SkinnedMesh';
export * from 'three/src/objects/Skeleton';
export * from 'three/src/objects/Bone';
export * from 'three/src/objects/Mesh';
export * from 'three/src/objects/LineSegments';
export * from 'three/src/objects/LineLoop';
export * from 'three/src/objects/Line';
export * from 'three/src/objects/Points';
export * from 'three/src/objects/Group';
/**
 * Renderers
 */
export * from 'three/src/renderers/WebGLCubeRenderTarget';
export * from 'three/src/renderers/WebGLMultipleRenderTargets';
export * from 'three/src/renderers/WebGLRenderTarget';
export * from 'three/src/renderers/WebGLRenderer';
export * from 'three/src/renderers/WebGL1Renderer';
export * from 'three/src/renderers/WebGL3DRenderTarget';
export * from 'three/src/renderers/WebGLArrayRenderTarget';
export * from 'three/src/renderers/shaders/ShaderLib';
export * from 'three/src/renderers/shaders/UniformsLib';
export * from 'three/src/renderers/shaders/UniformsUtils';
export * from 'three/src/renderers/shaders/ShaderChunk';
export * from 'three/src/renderers/webgl/WebGLBufferRenderer';
export * from 'three/src/renderers/webgl/WebGLCapabilities';
export * from 'three/src/renderers/webgl/WebGLClipping';
export * from 'three/src/renderers/webgl/WebGLCubeUVMaps';
export * from 'three/src/renderers/webgl/WebGLExtensions';
export * from 'three/src/renderers/webgl/WebGLGeometries';
export * from 'three/src/renderers/webgl/WebGLIndexedBufferRenderer';
export * from 'three/src/renderers/webgl/WebGLInfo';
export * from 'three/src/renderers/webgl/WebGLLights';
export * from 'three/src/renderers/webgl/WebGLObjects';
export * from 'three/src/renderers/webgl/WebGLProgram';
export * from 'three/src/renderers/webgl/WebGLPrograms';
export * from 'three/src/renderers/webgl/WebGLProperties';
export * from 'three/src/renderers/webgl/WebGLRenderLists';
export * from 'three/src/renderers/webgl/WebGLShader';
export * from 'three/src/renderers/webgl/WebGLShadowMap';
export * from 'three/src/renderers/webgl/WebGLState';
export * from 'three/src/renderers/webgl/WebGLTextures';
export * from 'three/src/renderers/webgl/WebGLUniforms';
export * from 'three/src/renderers/webgl/WebGLUniformsGroups';
export * from 'three/src/renderers/webxr/WebXRController';
export * from 'three/src/renderers/webxr/WebXRManager';
export { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils';
/**
 * Scenes
 */
export * from 'three/src/scenes/FogExp2';
export * from 'three/src/scenes/Fog';
export * from 'three/src/scenes/Scene';
/**
 * Textures
 */
export * from 'three/src/textures/VideoTexture';
export * from 'three/src/textures/CompressedArrayTexture';
export * from 'three/src/textures/DataTexture';
export * from 'three/src/textures/CompressedTexture';
export * from 'three/src/textures/CubeTexture';
export * from 'three/src/textures/Data3DTexture';
export * from 'three/src/textures/DataArrayTexture';
export * from 'three/src/textures/CanvasTexture';
export * from 'three/src/textures/DepthTexture';
export * from 'three/src/textures/FramebufferTexture';
export * from 'three/src/textures/Source';
export * from 'three/src/textures/Texture';

}`;export{e as default};