import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls, PerspectiveCamera, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';
import { Mesh, MeshBasicMaterial, PlaneGeometry, SphereGeometry } from "three";

const Ship = ({ isMobile }) => {
    const ship = useGLTF('./ship/scene.gltf');

    return (
        <mesh>
            <primitive
                object={ship.scene}
                scale={isMobile ? 0.3 : 0.75}
                position={isMobile ? [0, -0, 0] : [0, 0, 0]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const ShipCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width:500px)');

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener('change',
            handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change',
                handleMediaQueryChange);
        }
    }, [])

    return (
        <Canvas frameloop="demand"
            camera={{ position: [25, 10, 0], fov: 45 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <directionalLight intensity={1} position={[10, 5, 5]} />
            <directionalLight intensity={1} position={[1, 5, 10]} />

            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                />
                <Grid
                    position={[0,0,0]}
                    cellColor='#ffffff'
                    sectionColor='#ffffff'
                    scale={10}
                />
                <Ship isMobile={isMobile} />
                {/* <mesh renderOrder={2} >
                    <SphereGeometry args={[0.1,20,20]} />
                    <MeshBasicMaterial color={[1,0,0]} transparent opacity={0.25} />
                </mesh>
                <mesh position={[1,2,0]} >
                    <PlaneGeometry args={[20,20]} />
                    <MeshBasicMaterial color={[1,0,1]} transparent opacity={0.25} />
                </mesh> */}
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default ShipCanvas;
