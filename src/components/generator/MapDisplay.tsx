import GenericCard from "../ui/GenericCard";
import TerrainGenerator from "./TerrainGenerator";
import SVGMapGenerator from "./SVGMapGenerator";
import { useGenerator } from "./GeneratorContext";

export default function MapDisplay() {
    const { generatorType } = useGenerator();

    return (
        <GenericCard>
            <div className="flex flex-row gap-4">
                <h3 className="text-2xl">Generated Map</h3>
                <span className="text-sm text-gray-400 mt-2">
                    ({generatorType === 'svg' ? 'SVG Filter' : 'Canvas Noise'})
                </span>
            </div>
            <div className="flex flex-col gap-8">
                {generatorType === 'canvas' ? (
                    <TerrainGenerator />
                ) : (
                    <SVGMapGenerator />
                )}
            </div>
        </GenericCard>
    )
}