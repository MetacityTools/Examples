import React from 'react'
import './App.css'
import { MetacityGL, Extensions } from 'metacitygl';
import 'metacitygl/style.css';

export function Lamps() {

    React.useEffect(() => {
        return () => {
            window.location.reload();
        }
    }, []);

    return (
        <MetacityGL
        //background={0x151d29}
        background={0x151515}
        target={[-742921, -1043242, 0]}
        bloom
        bloomRadius={0.1}
        bloomStrength={1}>
        <Extensions.MetacityTreeLayer
            api="https://data.metacity.cc/pragueLampsTree"
            instance="/lamp.glb"
            size={1.5}
            pickable
            swapDistance={4000}
            color={[1.5, 1.0, 0.8]}
            tree={{
                zOffset: 10,
                visualizeTree: false
            }}
        />
        <Extensions.MetacityTreeLayer
            api="https://data.metacity.cc/pragueBuildingTree"
            pickable
            color={0x444444}
            tree={{
                //visualizeTree: false
            }}
        />
         <Extensions.MetacityTreeLayer
            api="https://data.metacity.cc/pragueTreesTree"
            instance="/tree.glb"
            size={1}
            swapDistance={4000}
            color={0x333333}
            tree={{
                visualizeTree: false
            }}
        />
        <Extensions.MetacityTreeLayer
            api="https://data.metacity.cc/pragueTerrainTree"
            color={0x222222}
            tree={{
                zOffset: -1
            }}
        />
        <Extensions.MetacityTreeLayer
            api="https://data.metacity.cc/pragueBridgesTree"
            color={0x333333}
            tree={{
                //zOffset: -1
                visualizeTree: false
            }}
        />
    </MetacityGL>
    )
}
