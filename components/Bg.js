import * as THREE from 'three';
import { Suspense, useRef, useMemo } from 'react';
import { useThemeUI } from 'theme-ui';
import {
  Canvas,
  extend,
  useUpdate,
  useFrame,
  useLoader,
} from 'react-three-fiber';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

extend({ LineMaterial, WireframeGeometry2, Wireframe });

function Test({ colors, url, objKey }) {
  //const { size } = useThree()
  //const resolution = useMemo(() => [size.width, size.height], [])
  const resolution = useMemo(() => [1024, 1024], []);
  const { nodes } = useLoader(GLTFLoader, url);
  const group = useRef();
  const lines = useUpdate(
    (geo) =>
      geo.fromEdgesGeometry(new THREE.EdgesGeometry(nodes[objKey].geometry)),
    []
  );
  useFrame(
    () =>
      (group.current.rotation.x = group.current.rotation.y = group.current.rotation.z += 0.0001)
  );
  return (
    <group ref={group} dispose={null}>
      <wireframe renderOrder={1000}>
        <wireframeGeometry2 attach="geometry" ref={lines} />
        <lineMaterial
          attach="material"
          color={colors.background3}
          linewidth={1}
          resolution={resolution}
          transparent
          opacity={1}
          depthTest={false}
        />
      </wireframe>
    </group>
  );
}
const Bg = ({ url, objKey }) => {
  const { theme } = useThemeUI();
  return (
    <Canvas
      sRGB
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 0, 1] }}
      style={{
        position: 'absolute',
        zIndex: -1,
        // height: '100%',
        width: '100vw',
        top: 0,
        bottom: 0,
        height: 'auto',
      }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="red" intensity={0.5} />
      <Suspense fallback={null}>
        <Test colors={theme.colors} url={url} objKey={objKey} />
      </Suspense>
    </Canvas>
  );
};
export default Bg;
