
import { Environment } from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
import clsx from 'clsx'
import React, {Suspense} from "react"

const RenderModel = ({children, className}) => { 
    return (
        <div className={clsx("w-screen h-screen relative z-50")}>
            <Canvas>
                <Suspense fallback={null}>
                    {children}
                </Suspense>
                <Environment preset="night" />
            </Canvas>
        </div>
    )
}

export default RenderModel