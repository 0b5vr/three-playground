const e=`declare module 'three/examples/jsm/nodes/Nodes' {
// core
import ArrayUniformNode from 'three/examples/jsm/nodes/core/ArrayUniformNode';
import AttributeNode from 'three/examples/jsm/nodes/core/AttributeNode';
import BypassNode from 'three/examples/jsm/nodes/core/BypassNode';
import CacheNode from 'three/examples/jsm/nodes/core/CacheNode';
import CodeNode, { CodeNodeInclude } from 'three/examples/jsm/nodes/core/CodeNode';
import ConstNode from 'three/examples/jsm/nodes/core/ConstNode';
import ContextNode from 'three/examples/jsm/nodes/core/ContextNode';
import ExpressionNode from 'three/examples/jsm/nodes/core/ExpressionNode';
import FunctionCallNode from 'three/examples/jsm/nodes/core/FunctionCallNode';
import FunctionNode, { FunctionNodeArguments } from 'three/examples/jsm/nodes/core/FunctionNode';
import InstanceIndexNode from 'three/examples/jsm/nodes/core/InstanceIndexNode';
import Node from 'three/examples/jsm/nodes/core/Node';
import NodeAttribute from 'three/examples/jsm/nodes/core/NodeAttribute';
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder';
import NodeCache from 'three/examples/jsm/nodes/core/NodeCache';
import NodeCode from 'three/examples/jsm/nodes/core/NodeCode';
import NodeFrame from 'three/examples/jsm/nodes/core/NodeFrame';
import NodeFunctionInput from 'three/examples/jsm/nodes/core/NodeFunctionInput';
import NodeKeywords from 'three/examples/jsm/nodes/core/NodeKeywords';
import NodeUniform from 'three/examples/jsm/nodes/core/NodeUniform';
import NodeVar from 'three/examples/jsm/nodes/core/NodeVar';
import NodeVarying from 'three/examples/jsm/nodes/core/NodeVarying';
import PropertyNode from 'three/examples/jsm/nodes/core/PropertyNode';
import StackNode from 'three/examples/jsm/nodes/core/StackNode';
import TempNode from 'three/examples/jsm/nodes/core/TempNode';
import UniformNode from 'three/examples/jsm/nodes/core/UniformNode';
import VarNode from 'three/examples/jsm/nodes/core/VarNode';
import VaryNode from 'three/examples/jsm/nodes/core/VaryNode';

// accessors
import BitangentNode, { BitangentNodeScope } from 'three/examples/jsm/nodes/accessors/BitangentNode';
import BufferNode from 'three/examples/jsm/nodes/accessors/BufferNode';
import CameraNode, { CameraNodeScope } from 'three/examples/jsm/nodes/accessors/CameraNode';
import CubeTextureNode from 'three/examples/jsm/nodes/accessors/CubeTextureNode';
import InstanceNode from 'three/examples/jsm/nodes/accessors/InstanceNode';
import MaterialNode, { MaterialNodeScope } from 'three/examples/jsm/nodes/accessors/MaterialNode';
import MaterialReferenceNode from 'three/examples/jsm/nodes/accessors/MaterialReferenceNode';
import ModelNode from 'three/examples/jsm/nodes/accessors/ModelNode';
import ModelViewProjectionNode from 'three/examples/jsm/nodes/accessors/ModelViewProjectionNode';
import NormalNode, { NormalNodeScope } from 'three/examples/jsm/nodes/accessors/NormalNode';
import Object3DNode, { Object3DNodeScope } from 'three/examples/jsm/nodes/accessors/Object3DNode';
import PointUVNode from 'three/examples/jsm/nodes/accessors/PointUVNode';
import PositionNode, { PositionNodeScope } from 'three/examples/jsm/nodes/accessors/PositionNode';
import ReferenceNode from 'three/examples/jsm/nodes/accessors/ReferenceNode';
import ReflectVectorNode from 'three/examples/jsm/nodes/accessors/ReflectVectorNode';
import SkinningNode from 'three/examples/jsm/nodes/accessors/SkinningNode';
import TangentNode, { TangentNodeScope } from 'three/examples/jsm/nodes/accessors/TangentNode';
import TextureNode from 'three/examples/jsm/nodes/accessors/TextureNode';
import UVNode from 'three/examples/jsm/nodes/accessors/UVNode';
import UserDataNode from 'three/examples/jsm/nodes/accessors/UserDataNode';

// geometry
import RangeNode, { RangeModeBound } from 'three/examples/jsm/nodes/geometry/RangeNode';

// gpgpu
import ComputeNode from 'three/examples/jsm/nodes/gpgpu/ComputeNode';

// display
import BlendModeNode, { BlendMode } from 'three/examples/jsm/nodes/display/BlendModeNode';
import ColorAdjustmentNode, { ColorAdjustmentMethod } from 'three/examples/jsm/nodes/display/ColorAdjustmentNode';
import ColorSpaceNode, { ColorSpaceNodeMethod } from 'three/examples/jsm/nodes/display/ColorSpaceNode';
import FrontFacingNode from 'three/examples/jsm/nodes/display/FrontFacingNode';
import NormalMapNode from 'three/examples/jsm/nodes/display/NormalMapNode';
import PosterizeNode from 'three/examples/jsm/nodes/display/PosterizeNode';
import ToneMappingNode from 'three/examples/jsm/nodes/display/ToneMappingNode';
import ViewportNode from 'three/examples/jsm/nodes/display/ViewportNode';

// math
import MathNode, { MathNodeMethod1, MathNodeMethod2, MathNodeMethod3, MathNodeMethod } from 'three/examples/jsm/nodes/math/MathNode';
import OperatorNode, { OperatorNodeOp } from 'three/examples/jsm/nodes/math/OperatorNode';
import CondNode from 'three/examples/jsm/nodes/math/CondNode';

// lighting
import PunctualLightNode from 'three/examples/jsm/nodes/lighting/PunctualLightNode';
import LightsNode from 'three/examples/jsm/nodes/lighting/LightsNode';
import LightingNode from 'three/examples/jsm/nodes/lighting/LightingNode';
import LightingContextNode, { LightingModelNode } from 'three/examples/jsm/nodes/lighting/LightingContextNode';
import HemisphereLightNode from 'three/examples/jsm/nodes/lighting/HemisphereLightNode';
import EnvironmentNode from 'three/examples/jsm/nodes/lighting/EnvironmentNode';
import AONode from 'three/examples/jsm/nodes/lighting/AONode';
import AnalyticLightNode from 'three/examples/jsm/nodes/lighting/AnalyticLightNode';

// utils

import ArrayElementNode from 'three/examples/jsm/nodes/utils/ArrayElementNode';
import ConvertNode from 'three/examples/jsm/nodes/utils/ConvertNode';
import EquirectUVNode from 'three/examples/jsm/nodes/utils/EquirectUVNode';
import JoinNode from 'three/examples/jsm/nodes/utils/JoinNode';
import MatcapUVNode from 'three/examples/jsm/nodes/utils/MatcapUVNode';
import MaxMipLevelNode from 'three/examples/jsm/nodes/utils/MaxMipLevelNode';
import OscNode, { OscNodeMethod } from 'three/examples/jsm/nodes/utils/OscNode';
import RemapNode from 'three/examples/jsm/nodes/utils/RemapNode';
import RotateUVNode from 'three/examples/jsm/nodes/utils/RotateUVNode';
import SpecularMIPLevelNode from 'three/examples/jsm/nodes/utils/SpecularMIPLevelNode';
import SplitNode from 'three/examples/jsm/nodes/utils/SplitNode';
import SpriteSheetUVNode from 'three/examples/jsm/nodes/utils/SpriteSheetUVNode';
import TimerNode, { TimerNodeScope } from 'three/examples/jsm/nodes/utils/TimerNode';
import TriplanarTexturesNode from 'three/examples/jsm/nodes/utils/TriplanarTexturesNode';

// loaders
import NodeLoader from 'three/examples/jsm/nodes/loaders/NodeLoader';
import NodeObjectLoader from 'three/examples/jsm/nodes/loaders/NodeObjectLoader';
import NodeMaterialLoader from 'three/examples/jsm/nodes/loaders/NodeMaterialLoader';

// procedural
import CheckerNode from 'three/examples/jsm/nodes/procedural/CheckerNode';
// fog
import FogNode from 'three/examples/jsm/nodes/fog/FogNode';
import FogRangeNode from 'three/examples/jsm/nodes/fog/FogRangeNode';
import FogExp2Node from 'three/examples/jsm/nodes/fog/FogExp2Node';

// core
export * from 'three/examples/jsm/nodes/core/constants';

// materials
export * from 'three/examples/jsm/nodes/materials/Materials';

// shader node
export * from 'three/examples/jsm/nodes/shadernode/ShaderNodeElements';

export {
    // core
    ArrayUniformNode,
    AttributeNode,
    BypassNode,
    CacheNode,
    CodeNode,
    CodeNodeInclude,
    ContextNode,
    ConstNode,
    ExpressionNode,
    FunctionCallNode,
    FunctionNode,
    FunctionNodeArguments,
    InstanceIndexNode,
    Node,
    NodeAttribute,
    NodeBuilder,
    NodeCache,
    NodeCode,
    NodeFrame,
    NodeFunctionInput,
    NodeKeywords,
    NodeUniform,
    NodeVar,
    NodeVarying,
    PropertyNode,
    StackNode,
    TempNode,
    UniformNode,
    VarNode,
    VaryNode,
    // geometry
    RangeNode,
    RangeModeBound,
    // gpgpu
    ComputeNode,
    // accessors
    BitangentNode,
    BitangentNodeScope,
    BufferNode,
    CameraNode,
    CameraNodeScope,
    CubeTextureNode,
    InstanceNode,
    MaterialNode,
    MaterialNodeScope,
    MaterialReferenceNode,
    ModelNode,
    ModelViewProjectionNode,
    NormalNode,
    NormalNodeScope,
    Object3DNode,
    Object3DNodeScope as OObject3DNodeScope,
    PointUVNode,
    PositionNode,
    PositionNodeScope,
    ReferenceNode,
    ReflectVectorNode,
    SkinningNode,
    TangentNode,
    TangentNodeScope,
    TextureNode,
    UVNode,
    UserDataNode,
    // display
    BlendModeNode,
    BlendMode,
    ColorAdjustmentNode,
    ColorAdjustmentMethod,
    ColorSpaceNode,
    ColorSpaceNodeMethod,
    FrontFacingNode,
    NormalMapNode,
    PosterizeNode,
    ToneMappingNode,
    ViewportNode,
    // math
    MathNode,
    MathNodeMethod1,
    MathNodeMethod2,
    MathNodeMethod3,
    MathNodeMethod,
    OperatorNode,
    OperatorNodeOp,
    CondNode,
    // lighting
    PunctualLightNode,
    LightsNode,
    LightingNode,
    LightingContextNode,
    LightingModelNode,
    HemisphereLightNode,
    EnvironmentNode,
    AONode,
    AnalyticLightNode,
    // utils
    ArrayElementNode,
    ConvertNode,
    EquirectUVNode,
    JoinNode,
    MatcapUVNode,
    MaxMipLevelNode,
    OscNode,
    OscNodeMethod,
    RemapNode,
    RotateUVNode,
    SpecularMIPLevelNode,
    SplitNode,
    SpriteSheetUVNode,
    TimerNode,
    TimerNodeScope,
    TriplanarTexturesNode,
    // procedural
    CheckerNode,
    // fog
    FogNode,
    FogRangeNode,
    FogExp2Node,
    // loaders
    NodeLoader,
    NodeObjectLoader,
    NodeMaterialLoader,
};

}`;export{e as default};
