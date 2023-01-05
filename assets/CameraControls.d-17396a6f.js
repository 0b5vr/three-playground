const r=`declare module 'camera-controls/CameraControls' {
import * as _THREE from 'three';\r
import { THREESubset, ACTION, PointerInput, MouseButtons, Touches, FitToOptions, CameraControlsEventMap } from 'camera-controls/types';\r
import { EventDispatcher } from 'camera-controls/EventDispatcher';\r
export declare class CameraControls extends EventDispatcher {\r
    /**\r
     * Injects THREE as the dependency. You can then proceed to use CameraControls.\r
     *\r
     * e.g\r
     * \`\`\`javascript\r
     * CameraControls.install( { THREE: THREE } );\r
     * \`\`\`\r
     *\r
     * Note: If you do not wish to use enter three.js to reduce file size(tree-shaking for example), make a subset to install.\r
     *\r
     * \`\`\`js\r
     * import {\r
     * 	Vector2,\r
     * 	Vector3,\r
     * 	Vector4,\r
     * 	Quaternion,\r
     * 	Matrix4,\r
     * 	Spherical,\r
     * 	Box3,\r
     * 	Sphere,\r
     * 	Raycaster,\r
     * 	MathUtils,\r
     * } from 'three';\r
     *\r
     * const subsetOfTHREE = {\r
     * 	Vector2   : Vector2,\r
     * 	Vector3   : Vector3,\r
     * 	Vector4   : Vector4,\r
     * 	Quaternion: Quaternion,\r
     * 	Matrix4   : Matrix4,\r
     * 	Spherical : Spherical,\r
     * 	Box3      : Box3,\r
     * 	Sphere    : Sphere,\r
     * 	Raycaster : Raycaster,\r
     * 	MathUtils : {\r
     * 		DEG2RAD: MathUtils.DEG2RAD,\r
     * 		clamp: MathUtils.clamp,\r
     * 	},\r
     * };\r
\r
     * CameraControls.install( { THREE: subsetOfTHREE } );\r
     * \`\`\`\r
     * @category Statics\r
     */\r
    static install(libs: {\r
        THREE: THREESubset;\r
    }): void;\r
    /*\r
    * list all ACTIONs\r
    * @category Statics\r
    */\r
    static readonly ACTION: typeof ACTION;\r
    /**\r
     * Minimum vertical angle in radians.\r
     * The angle has to be between \`0\` and \`.maxPolarAngle\` inclusive.\r
     * The default value is \`0\`.\r
     *\r
     * e.g.\r
     * \`\`\`\r
     * cameraControls.maxPolarAngle = 0;\r
     * \`\`\`\r
     * @category Properties\r
     */\r
    minPolarAngle: number;\r
    /**\r
     * Maximum vertical angle in radians.\r
     * The angle has to be between \`.maxPolarAngle\` and \`Math.PI\` inclusive.\r
     * The default value is \`Math.PI\`.\r
     *\r
     * e.g.\r
     * \`\`\`\r
     * cameraControls.maxPolarAngle = Math.PI;\r
     * \`\`\`\r
     * @category Properties\r
     */\r
    maxPolarAngle: number;\r
    /**\r
     * Minimum horizontal angle in radians.\r
     * The angle has to be less than \`.maxAzimuthAngle\`.\r
     * The default value is \`- Infinity\`.\r
     *\r
     * e.g.\r
     * \`\`\`\r
     * cameraControls.minAzimuthAngle = - Infinity;\r
     * \`\`\`\r
     * @category Properties\r
     */\r
    minAzimuthAngle: number;\r
    /**\r
     * Maximum horizontal angle in radians.\r
     * The angle has to be greater than \`.minAzimuthAngle\`.\r
     * The default value is \`Infinity\`.\r
     *\r
     * e.g.\r
     * \`\`\`\r
     * cameraControls.maxAzimuthAngle = Infinity;\r
     * \`\`\`\r
     * @category Properties\r
     */\r
    maxAzimuthAngle: number;\r
    /**\r
     * Minimum distance for dolly. The value must be higher than \`0\`.\r
     * PerspectiveCamera only.\r
     * @category Properties\r
     */\r
    minDistance: number;\r
    /**\r
     * Maximum distance for dolly. The value must be higher than \`minDistance\`.\r
     * PerspectiveCamera only.\r
     * @category Properties\r
     */\r
    maxDistance: number;\r
    /**\r
     * \`true\` to enable Infinity Dolly.\r
     * When the Dolly distance is less than the \`minDistance\`, radius of the sphere will be set \`minDistance\` automatically.\r
     * @category Properties\r
     */\r
    infinityDolly: boolean;\r
    /**\r
     * Minimum camera zoom.\r
     * @category Properties\r
     */\r
    minZoom: number;\r
    /**\r
     * Maximum camera zoom.\r
     * @category Properties\r
     */\r
    maxZoom: number;\r
    /**\r
     * The damping inertia.\r
     * The value must be between \`Math.EPSILON\` to \`1\` inclusive.\r
     * Setting \`1\` to disable smooth transitions.\r
     * @category Properties\r
     */\r
    dampingFactor: number;\r
    /**\r
     * The damping inertia while dragging.\r
     * The value must be between \`Math.EPSILON\` to \`1\` inclusive.\r
     * Setting \`1\` to disable smooth transitions.\r
     * @category Properties\r
     */\r
    draggingDampingFactor: number;\r
    /**\r
     * Speed of azimuth (horizontal) rotation.\r
     * @category Properties\r
     */\r
    azimuthRotateSpeed: number;\r
    /**\r
     * Speed of polar (vertical) rotation.\r
     * @category Properties\r
     */\r
    polarRotateSpeed: number;\r
    /**\r
     * Speed of mouse-wheel dollying.\r
     * @category Properties\r
     */\r
    dollySpeed: number;\r
    /**\r
     * Speed of drag for truck and pedestal.\r
     * @category Properties\r
     */\r
    truckSpeed: number;\r
    /**\r
     * \`true\` to enable Dolly-in to the mouse cursor coords.\r
     * @category Properties\r
     */\r
    dollyToCursor: boolean;\r
    /**\r
     * @category Properties\r
     */\r
    dragToOffset: boolean;\r
    /**\r
     * The same as \`.screenSpacePanning\` in three.js's OrbitControls.\r
     * @category Properties\r
     */\r
    verticalDragToForward: boolean;\r
    /**\r
     * Friction ratio of the boundary.\r
     * @category Properties\r
     */\r
    boundaryFriction: number;\r
    /**\r
     * Controls how soon the \`rest\` event fires as the camera slows.\r
     * @category Properties\r
     */\r
    restThreshold: number;\r
    /**\r
     * An array of Meshes to collide with camera.\r
     * Be aware colliderMeshes may decrease performance. The collision test uses 4 raycasters from the camera since the near plane has 4 corners.\r
     * @category Properties\r
     */\r
    colliderMeshes: _THREE.Object3D[];\r
    /**\r
     * User's mouse input config.\r
     *\r
     * | button to assign      | behavior |\r
     * | --------------------- | -------- |\r
     * | \`mouseButtons.left\`   | \`CameraControls.ACTION.ROTATE\`* \\| \`CameraControls.ACTION.TRUCK\` \\| \`CameraControls.ACTION.OFFSET\` \\| \`CameraControls.ACTION.DOLLY\` \\| \`CameraControls.ACTION.ZOOM\` \\| \`CameraControls.ACTION.NONE\` |\r
     * | \`mouseButtons.right\`  | \`CameraControls.ACTION.ROTATE\` \\| \`CameraControls.ACTION.TRUCK\`* \\| \`CameraControls.ACTION.OFFSET\` \\| \`CameraControls.ACTION.DOLLY\` \\| \`CameraControls.ACTION.ZOOM\` \\| \`CameraControls.ACTION.NONE\` |\r
     * | \`mouseButtons.wheel\` ¹ | \`CameraControls.ACTION.ROTATE\` \\| \`CameraControls.ACTION.TRUCK\` \\| \`CameraControls.ACTION.OFFSET\` \\| \`CameraControls.ACTION.DOLLY\` \\| \`CameraControls.ACTION.ZOOM\` \\| \`CameraControls.ACTION.NONE\` |\r
     * | \`mouseButtons.middle\` ² | \`CameraControls.ACTION.ROTATE\` \\| \`CameraControls.ACTION.TRUCK\` \\| \`CameraControls.ACTION.OFFSET\` \\| \`CameraControls.ACTION.DOLLY\`* \\| \`CameraControls.ACTION.ZOOM\` \\| \`CameraControls.ACTION.NONE\` |\r
     *\r
     * 1. Mouse wheel event for scroll "up/down" on mac "up/down/left/right"\r
     * 2. Mouse click on wheel event "button"\r
     * - \\* is the default.\r
     * - The default of \`mouseButtons.wheel\` is:\r
     *   - \`DOLLY\` for Perspective camera.\r
     *   - \`ZOOM\` for Orthographic camera, and can't set \`DOLLY\`.\r
     * @category Properties\r
     */\r
    mouseButtons: MouseButtons;\r
    /**\r
     * User's touch input config.\r
     *\r
     * | fingers to assign     | behavior |\r
     * | --------------------- | -------- |\r
     * | \`touches.one\` | \`CameraControls.ACTION.TOUCH_ROTATE\`* \\| \`CameraControls.ACTION.TOUCH_TRUCK\` \\| \`CameraControls.ACTION.TOUCH_OFFSET\` \\| \`CameraControls.ACTION.DOLLY\` | \`CameraControls.ACTION.ZOOM\` | \`CameraControls.ACTION.NONE\` |\r
     * | \`touches.two\` | \`ACTION.TOUCH_DOLLY_TRUCK\` \\| \`ACTION.TOUCH_DOLLY_OFFSET\` \\| \`ACTION.TOUCH_DOLLY_ROTATE\` \\| \`ACTION.TOUCH_ZOOM_TRUCK\` \\| \`ACTION.TOUCH_ZOOM_OFFSET\` \\| \`ACTION.TOUCH_ZOOM_ROTATE\` \\| \`ACTION.TOUCH_DOLLY\` \\| \`ACTION.TOUCH_ZOOM\` \\| \`CameraControls.ACTION.TOUCH_ROTATE\` \\| \`CameraControls.ACTION.TOUCH_TRUCK\` \\| \`CameraControls.ACTION.TOUCH_OFFSET\` \\| \`CameraControls.ACTION.NONE\` |\r
     * | \`touches.three\` | \`ACTION.TOUCH_DOLLY_TRUCK\` \\| \`ACTION.TOUCH_DOLLY_OFFSET\` \\| \`ACTION.TOUCH_DOLLY_ROTATE\` \\| \`ACTION.TOUCH_ZOOM_TRUCK\` \\| \`ACTION.TOUCH_ZOOM_OFFSET\` \\| \`ACTION.TOUCH_ZOOM_ROTATE\` \\| \`CameraControls.ACTION.TOUCH_ROTATE\` \\| \`CameraControls.ACTION.TOUCH_TRUCK\` \\| \`CameraControls.ACTION.TOUCH_OFFSET\` \\| \`CameraControls.ACTION.NONE\` |\r
     *\r
     * - \\* is the default.\r
     * - The default of \`touches.two\` and \`touches.three\` is:\r
     *   - \`TOUCH_DOLLY_TRUCK\` for Perspective camera.\r
     *   - \`TOUCH_ZOOM_TRUCK\` for Orthographic camera, and can't set \`TOUCH_DOLLY_TRUCK\` and \`TOUCH_DOLLY\`.\r
     * @category Properties\r
     */\r
    touches: Touches;\r
    /**\r
     * Force cancel user dragging.\r
     * @category Methods\r
     */\r
    cancel: () => void;\r
    protected _enabled: boolean;\r
    protected _camera: _THREE.PerspectiveCamera | _THREE.OrthographicCamera;\r
    protected _yAxisUpSpace: _THREE.Quaternion;\r
    protected _yAxisUpSpaceInverse: _THREE.Quaternion;\r
    protected _state: ACTION;\r
    protected _domElement: HTMLElement;\r
    protected _viewport: _THREE.Vector4 | null;\r
    protected _target: _THREE.Vector3;\r
    protected _targetEnd: _THREE.Vector3;\r
    protected _focalOffset: _THREE.Vector3;\r
    protected _focalOffsetEnd: _THREE.Vector3;\r
    protected _spherical: _THREE.Spherical;\r
    protected _sphericalEnd: _THREE.Spherical;\r
    protected _zoom: number;\r
    protected _zoomEnd: number;\r
    protected _target0: _THREE.Vector3;\r
    protected _position0: _THREE.Vector3;\r
    protected _zoom0: number;\r
    protected _focalOffset0: _THREE.Vector3;\r
    protected _dollyControlAmount: number;\r
    protected _dollyControlCoord: _THREE.Vector2;\r
    protected _nearPlaneCorners: [\r
        _THREE.Vector3,\r
        _THREE.Vector3,\r
        _THREE.Vector3,\r
        _THREE.Vector3\r
    ];\r
    protected _hasRested: boolean;\r
    protected _boundary: _THREE.Box3;\r
    protected _boundaryEnclosesCamera: boolean;\r
    protected _needsUpdate: boolean;\r
    protected _updatedLastTime: boolean;\r
    protected _elementRect: DOMRect;\r
    protected _activePointers: PointerInput[];\r
    /**\r
     * Creates a \`CameraControls\` instance.\r
     *\r
     * Note:\r
     * You **must install** three.js before using camera-controls. see [#install](#install)\r
     * Not doing so will lead to runtime errors (\`undefined\` references to THREE).\r
     *\r
     * e.g.\r
     * \`\`\`\r
     * CameraControls.install( { THREE } );\r
     * const cameraControls = new CameraControls( camera, domElement );\r
     * \`\`\`\r
     *\r
     * @param camera A \`THREE.PerspectiveCamera\` or \`THREE.OrthographicCamera\` to be controlled.\r
     * @param domElement A \`HTMLElement\` for the draggable area, usually \`renderer.domElement\`.\r
     * @category Constructor\r
     */\r
    constructor(camera: _THREE.PerspectiveCamera | _THREE.OrthographicCamera, domElement: HTMLElement);\r
    /*\r
    * The camera to be controlled\r
    * @category Properties\r
    */\r
    camera: _THREE.PerspectiveCamera | _THREE.OrthographicCamera;\r
    /*\r
    * Whether or not the controls are enabled.\r
    * \`false\` to disable user dragging/touch-move, but all methods works.\r
    * @category Properties\r
    */\r
    enabled: boolean;\r
    /*\r
    * Returns \`true\` if the controls are active updating.\r
    * readonly value.\r
    * @category Properties\r
    */\r
    readonly active: boolean;\r
    /*\r
    * Getter for the current \`ACTION\`.\r
    * readonly value.\r
    * @category Properties\r
    */\r
    readonly currentAction: ACTION;\r
    /*\r
    * get/set Current distance.\r
    * @category Properties\r
    */\r
    distance: number;\r
    /*\r
    * get/set the azimuth angle (horizontal) in radians.\r
    * Every 360 degrees turn is added to \`.azimuthAngle\` value, which is accumulative.\r
    * @category Properties\r
    */\r
    azimuthAngle: number;\r
    /*\r
    * get/set the polar angle (vertical) in radians.\r
    * @category Properties\r
    */\r
    polarAngle: number;\r
    /*\r
    * Whether camera position should be enclosed in the boundary or not.\r
    * @category Properties\r
    */\r
    boundaryEnclosesCamera: boolean;\r
    /**\r
     * Adds the specified event listener.\r
     * Applicable event types (which is \`K\`) are:\r
     * | Event name          | Timing |\r
     * | ------------------- | ------ |\r
     * | \`'controlstart'\`    | When the user starts to control the camera via mouse / touches. ¹ |\r
     * | \`'control'\`         | When the user controls the camera (dragging). |\r
     * | \`'controlend'\`      | When the user ends to control the camera. ¹ |\r
     * | \`'transitionstart'\` | When any kind of transition starts, either user control or using a method with \`enableTransition = true\` |\r
     * | \`'update'\`          | When the camera position is updated. |\r
     * | \`'wake'\`            | When the camera starts moving. |\r
     * | \`'rest'\`            | When the camera movement is below \`.restThreshold\` ². |\r
     * | \`'sleep'\`           | When the camera end moving. |\r
     *\r
     * 1. \`mouseButtons.wheel\` (Mouse wheel control) does not emit \`'controlstart'\` and \`'controlend'\`. \`mouseButtons.wheel\` uses scroll-event internally, and scroll-event happens intermittently. That means "start" and "end" cannot be detected.\r
     * 2. Due to damping, \`sleep\` will usually fire a few seconds after the camera _appears_ to have stopped moving. If you want to do something (e.g. enable UI, perform another transition) at the point when the camera has stopped, you probably want the \`rest\` event. This can be fine tuned using the \`.restThreshold\` parameter. See the [Rest and Sleep Example](https://yomotsu.github.io/camera-controls/examples/rest-and-sleep.html).\r
     *\r
     * e.g.\r
     * \`\`\`\r
     * cameraControl.addEventListener( 'controlstart', myCallbackFunction );\r
     * \`\`\`\r
     * @param type event name\r
     * @param listener handler function\r
     * @category Methods\r
     */\r
    addEventListener<K extends keyof CameraControlsEventMap>(type: K, listener: (event: CameraControlsEventMap[K]) => any): void;\r
    /**\r
     * Removes the specified event listener\r
     * e.g.\r
     * \`\`\`\r
     * cameraControl.addEventListener( 'controlstart', myCallbackFunction );\r
     * \`\`\`\r
     * @param type event name\r
     * @param listener handler function\r
     * @category Methods\r
     */\r
    removeEventListener<K extends keyof CameraControlsEventMap>(type: K, listener: (event: CameraControlsEventMap[K]) => any): void;\r
    /**\r
     * Rotate azimuthal angle(horizontal) and polar angle(vertical).\r
     * Every value is added to the current value.\r
     * @param azimuthAngle Azimuth rotate angle. In radian.\r
     * @param polarAngle Polar rotate angle. In radian.\r
     * @param enableTransition Whether to move smoothly or immediately\r
     * @category Methods\r
     */\r
    rotate(azimuthAngle: number, polarAngle: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Rotate azimuthal angle(horizontal) to the given angle and keep the same polar angle(vertical) target.\r
     *\r
     * e.g.\r
     * \`\`\`\r
     * cameraControls.rotateAzimuthTo( 30 * THREE.MathUtils.DEG2RAD, true );\r
     * \`\`\`\r
     * @param azimuthAngle Azimuth rotate angle. In radian.\r
     * @param enableTransition Whether to move smoothly or immediately\r
     * @category Methods\r
     */\r
    rotateAzimuthTo(azimuthAngle: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Rotate polar angle(vertical) to the given angle and keep the same azimuthal angle(horizontal) target.\r
     *\r
     * e.g.\r
     * \`\`\`\r
     * cameraControls.rotatePolarTo( 30 * THREE.MathUtils.DEG2RAD, true );\r
     * \`\`\`\r
     * @param polarAngle Polar rotate angle. In radian.\r
     * @param enableTransition Whether to move smoothly or immediately\r
     * @category Methods\r
     */\r
    rotatePolarTo(polarAngle: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Rotate azimuthal angle(horizontal) and polar angle(vertical) to the given angle.\r
     * Camera view will rotate over the orbit pivot absolutely:\r
     *\r
     * azimuthAngle\r
     * \`\`\`\r
     *       0º\r
     *         \\\r
     * 90º -----+----- -90º\r
     *           \\\r
     *           180º\r
     * \`\`\`\r
     * | direction | angle                  |\r
     * | --------- | ---------------------- |\r
     * | front     | 0º                     |\r
     * | left      | 90º (\`Math.PI / 2\`)    |\r
     * | right     | -90º (\`- Math.PI / 2\`) |\r
     * | back      | 180º (\`Math.PI\`)       |\r
     *\r
     * polarAngle\r
     * \`\`\`\r
     *     180º\r
     *      |\r
     *      90º\r
     *      |\r
     *      0º\r
     * \`\`\`\r
     * | direction            | angle                  |\r
     * | -------------------- | ---------------------- |\r
     * | top/sky              | 180º (\`Math.PI\`)       |\r
     * | horizontal from view | 90º (\`Math.PI / 2\`)    |\r
     * | bottom/floor         | 0º                     |\r
     *\r
     * @param azimuthAngle Azimuth rotate angle to. In radian.\r
     * @param polarAngle Polar rotate angle to. In radian.\r
     * @param enableTransition  Whether to move smoothly or immediately\r
     * @category Methods\r
     */\r
    rotateTo(azimuthAngle: number, polarAngle: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Dolly in/out camera position.\r
     * @param distance Distance of dollyIn. Negative number for dollyOut.\r
     * @param enableTransition Whether to move smoothly or immediately.\r
     * @category Methods\r
     */\r
    dolly(distance: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Dolly in/out camera position to given distance.\r
     * @param distance Distance of dolly.\r
     * @param enableTransition Whether to move smoothly or immediately.\r
     * @category Methods\r
     */\r
    dollyTo(distance: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Zoom in/out camera. The value is added to camera zoom.\r
     * Limits set with \`.minZoom\` and \`.maxZoom\`\r
     * @param zoomStep zoom scale\r
     * @param enableTransition Whether to move smoothly or immediately\r
     * @category Methods\r
     */\r
    zoom(zoomStep: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Zoom in/out camera to given scale. The value overwrites camera zoom.\r
     * Limits set with .minZoom and .maxZoom\r
     * @param zoom\r
     * @param enableTransition\r
     * @category Methods\r
     */\r
    zoomTo(zoom: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * @deprecated \`pan()\` has been renamed to \`truck()\`\r
     * @category Methods\r
     */\r
    pan(x: number, y: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Truck and pedestal camera using current azimuthal angle\r
     * @param x Horizontal translate amount\r
     * @param y Vertical translate amount\r
     * @param enableTransition Whether to move smoothly or immediately\r
     * @category Methods\r
     */\r
    truck(x: number, y: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Move forward / backward.\r
     * @param distance Amount to move forward / backward. Negative value to move backward\r
     * @param enableTransition Whether to move smoothly or immediately\r
     * @category Methods\r
     */\r
    forward(distance: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Move target position to given point.\r
     * @param x x coord to move center position\r
     * @param y y coord to move center position\r
     * @param z z coord to move center position\r
     * @param enableTransition Whether to move smoothly or immediately\r
     * @category Methods\r
     */\r
    moveTo(x: number, y: number, z: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Fit the viewport to the box or the bounding box of the object, using the nearest axis. paddings are in unit.\r
     * set \`cover: true\` to fill enter screen.\r
     * e.g.\r
     * \`\`\`\r
     * cameraControls.fitToBox( myMesh );\r
     * \`\`\`\r
     * @param box3OrObject Axis aligned bounding box to fit the view.\r
     * @param enableTransition Whether to move smoothly or immediately.\r
     * @param options | \`<object>\` { cover: boolean, paddingTop: number, paddingLeft: number, paddingBottom: number, paddingRight: number }\r
     * @returns Transition end promise\r
     * @category Methods\r
     */\r
    fitToBox(box3OrObject: _THREE.Box3 | _THREE.Object3D, enableTransition: boolean, { cover, paddingLeft, paddingRight, paddingBottom, paddingTop }?: Partial<FitToOptions>): Promise<void[]>;\r
    /**\r
     * Fit the viewport to the sphere or the bounding sphere of the object.\r
     * @param sphereOrMesh\r
     * @param enableTransition\r
     * @category Methods\r
     */\r
    fitToSphere(sphereOrMesh: _THREE.Sphere | _THREE.Object3D, enableTransition: boolean): Promise<void[]>;\r
    /**\r
     * Make an orbit with given points.\r
     * @param positionX\r
     * @param positionY\r
     * @param positionZ\r
     * @param targetX\r
     * @param targetY\r
     * @param targetZ\r
     * @param enableTransition\r
     * @category Methods\r
     */\r
    setLookAt(positionX: number, positionY: number, positionZ: number, targetX: number, targetY: number, targetZ: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Similar to setLookAt, but it interpolates between two states.\r
     * @param positionAX\r
     * @param positionAY\r
     * @param positionAZ\r
     * @param targetAX\r
     * @param targetAY\r
     * @param targetAZ\r
     * @param positionBX\r
     * @param positionBY\r
     * @param positionBZ\r
     * @param targetBX\r
     * @param targetBY\r
     * @param targetBZ\r
     * @param t\r
     * @param enableTransition\r
     * @category Methods\r
     */\r
    lerpLookAt(positionAX: number, positionAY: number, positionAZ: number, targetAX: number, targetAY: number, targetAZ: number, positionBX: number, positionBY: number, positionBZ: number, targetBX: number, targetBY: number, targetBZ: number, t: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * setLookAt without target, keep gazing at the current target\r
     * @param positionX\r
     * @param positionY\r
     * @param positionZ\r
     * @param enableTransition\r
     * @category Methods\r
     */\r
    setPosition(positionX: number, positionY: number, positionZ: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * setLookAt without position, Stay still at the position.\r
     * @param targetX\r
     * @param targetY\r
     * @param targetZ\r
     * @param enableTransition\r
     * @category Methods\r
     */\r
    setTarget(targetX: number, targetY: number, targetZ: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Set focal offset using the screen parallel coordinates. z doesn't affect in Orthographic as with Dolly.\r
     * @param x\r
     * @param y\r
     * @param z\r
     * @param enableTransition\r
     * @category Methods\r
     */\r
    setFocalOffset(x: number, y: number, z: number, enableTransition?: boolean): Promise<void>;\r
    /**\r
     * Set orbit point without moving the camera.\r
     * SHOULD NOT RUN DURING ANIMATIONS. \`setOrbitPoint()\` will immediately fix the positions.\r
     * @param targetX\r
     * @param targetY\r
     * @param targetZ\r
     * @category Methods\r
     */\r
    setOrbitPoint(targetX: number, targetY: number, targetZ: number): void;\r
    /**\r
     * Set the boundary box that encloses the target of the camera. box3 is in THREE.Box3\r
     * @param box3\r
     * @category Methods\r
     */\r
    setBoundary(box3?: _THREE.Box3): void;\r
    /**\r
     * Set (or unset) the current viewport.\r
     * Set this when you want to use renderer viewport and .dollyToCursor feature at the same time.\r
     * @param viewportOrX\r
     * @param y\r
     * @param width\r
     * @param height\r
     * @category Methods\r
     */\r
    setViewport(viewportOrX: _THREE.Vector4 | number | null, y: number, width: number, height: number): void;\r
    /**\r
     * Calculate the distance to fit the box.\r
     * @param width box width\r
     * @param height box height\r
     * @param depth box depth\r
     * @returns distance\r
     * @category Methods\r
     */\r
    getDistanceToFitBox(width: number, height: number, depth: number, cover?: boolean): number;\r
    /**\r
     * Calculate the distance to fit the sphere.\r
     * @param radius sphere radius\r
     * @returns distance\r
     * @category Methods\r
     */\r
    getDistanceToFitSphere(radius: number): number;\r
    /**\r
     * Returns its current gazing target, which is the center position of the orbit.\r
     * @param out current gazing target\r
     * @category Methods\r
     */\r
    getTarget(out: _THREE.Vector3): _THREE.Vector3;\r
    /**\r
     * Returns its current position.\r
     * @param out current position\r
     * @category Methods\r
     */\r
    getPosition(out: _THREE.Vector3): _THREE.Vector3;\r
    /**\r
     * Returns its current focal offset, which is how much the camera appears to be translated in screen parallel coordinates.\r
     * @param out current focal offset\r
     * @category Methods\r
     */\r
    getFocalOffset(out: _THREE.Vector3): _THREE.Vector3;\r
    /**\r
     * Normalize camera azimuth angle rotation between 0 and 360 degrees.\r
     * @category Methods\r
     */\r
    normalizeRotations(): void;\r
    /**\r
     * Reset all rotation and position to defaults.\r
     * @param enableTransition\r
     * @category Methods\r
     */\r
    reset(enableTransition?: boolean): Promise<void[]>;\r
    /**\r
     * Set current camera position as the default position.\r
     * @category Methods\r
     */\r
    saveState(): void;\r
    /**\r
     * Sync camera-up direction.\r
     * When camera-up vector is changed, \`.updateCameraUp()\` must be called.\r
     * @category Methods\r
     */\r
    updateCameraUp(): void;\r
    /**\r
     * Update camera position and directions.\r
     * This should be called in your tick loop every time, and returns true if re-rendering is needed.\r
     * @param delta\r
     * @returns updated\r
     * @category Methods\r
     */\r
    update(delta: number): boolean;\r
    /**\r
     * Get all state in JSON string\r
     * @category Methods\r
     */\r
    toJSON(): string;\r
    /**\r
     * Reproduce the control state with JSON. enableTransition is where anim or not in a boolean.\r
     * @param json\r
     * @param enableTransition\r
     * @category Methods\r
     */\r
    fromJSON(json: string, enableTransition?: boolean): void;\r
    /**\r
     * Dispose the cameraControls instance itself, remove all eventListeners.\r
     * @category Methods\r
     */\r
    dispose(): void;\r
    protected _findPointerById(pointerId: number): PointerInput | null;\r
    protected _encloseToBoundary(position: _THREE.Vector3, offset: _THREE.Vector3, friction: number): _THREE.Vector3;\r
    protected _updateNearPlaneCorners(): void;\r
    protected _truckInternal: (deltaX: number, deltaY: number, dragToOffset: boolean) => void;\r
    protected _rotateInternal: (deltaX: number, deltaY: number) => void;\r
    protected _dollyInternal: (delta: number, x: number, y: number) => void;\r
    protected _zoomInternal: (delta: number, x: number, y: number) => void;\r
    protected _collisionTest(): number;\r
    /**\r
     * Get its client rect and package into given \`DOMRect\` .\r
     */\r
    protected _getClientRect(target: DOMRect): DOMRect;\r
    protected _createOnRestPromise(resolveImmediately: boolean): Promise<void>;\r
    protected _removeAllEventListeners(): void;\r
}\r

}`;export{r as default};
