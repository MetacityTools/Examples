import React from 'react'
import './App.css'
import { MetacityGL, Utils, Extensions } from 'metacitygl';
import 'metacitygl/style.css';

function App() {

    return (
        <MetacityGL 
                background={0x151d29}
                target={[-742921, -1043242, 0]}>
            <Extensions.MetacityTreeLayer 
                api="https://data.metacity.cc/pragueTreesTree"
                instance="/tree.glb"
                size={20}
                swapDistance={4000}
                color={0x00728a}
                tree={{
                    visualizeTree: false
                }}
            />
            <Extensions.MetacityTreeLayer 
                api="https://data.metacity.cc/pragueTerrainTree"
                color={0x1b3452}
                tree={{
                    //zOffset: -1
                }}
            />
            <Extensions.MetacityTreeLayer 
                api="https://data.metacity.cc/pragueBridgesTree"
                color={0x234063}
                tree={{
                    //zOffset: -1
                    visualizeTree: false
                }}
            />
            <Extensions.MetacityTreeLayer 
                api="https://data.metacity.cc/pragueBuildingTree"
                pickable
                enableUI
                colorPlaceholder={0x202c3d}
                styles={[
                    new Utils.Styles.Style().add(
                        new Utils.Styles.StyleAttributeRangeExt({
                            attribute: 'height',
                            min: 20,
                            max: 50
                        })
                    ).useColor([0x04d3ff, 0xFF00ea])
                ]}
                tree={{
                    zOffset: 5
                }}
            />
        </MetacityGL>
    )
}

export default App
