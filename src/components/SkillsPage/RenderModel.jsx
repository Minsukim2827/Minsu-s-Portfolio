
import { Environment } from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
import clsx from 'clsx'
import React, {Suspense} from "react"

const RenderModel = ({children, className}) => { 
    return (
            <Canvas>
                <Suspense fallback={null}>
                    {children}
                </Suspense>
                <Environment preset="sunset" />
            </Canvas>

    )
}

export default RenderModel