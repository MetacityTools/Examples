import { MetacityLayerProps } from "metacitygl";




export function CustomLayer(props: MetacityLayerProps) {
    const { context, onLoaded, enableUI } = props;
    return (
        <div>
            <h1>Custom Layer</h1>
            <p>This is a custom layer</p>
        </div>
    )
}