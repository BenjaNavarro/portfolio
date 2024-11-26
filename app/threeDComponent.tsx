"use client"; // This is a client component 👈🏽
import { Suspense, useRef, useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { Box, OrbitControls } from '@react-three/drei';

extend({ MeshLineGeometry, MeshLineMaterial });

declare interface ComponentProps {

}

export default function ThreeDComponent({

}: ComponentProps) {
    return (
        <Canvas 
            camera={{ position: [10, 10, 10], fov: 30 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                // zIndex: -1,
            }}
            shadows 
        >
            <color attach='background' args={['#ececec']}/>
            <Suspense>
                <Physics interpolate gravity={[ 0, -40, 0 ]} timeStep={1 / 60}>
                    <>
                        <ambientLight intensity={0.5}/>
                        <directionalLight position={[ -10, 10, 0 ]} intensity={0.4}/>
                        <OrbitControls/>
                        <RigidBody type='fixed'>
                            <Box position={[ 0, 0, 0 ]} args={[ 100, 1, 100 ]}>
                                <meshStandardMaterial color={"transparent"}/>
                            </Box>
                        </RigidBody>
                        <RigidBody position={[3, 5, 0]}>
                            <Box>
                                <meshStandardMaterial color={"lightgray"}/>
                            </Box>
                        </RigidBody>
                    </>
                </Physics>
            </Suspense>
        </Canvas>
    );
};
