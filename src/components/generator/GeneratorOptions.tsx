import { useGenerator } from "./GeneratorContext";
import GenericCard from "../ui/GenericCard";

export default function GeneratorOptions() {
    const { generatorType, setGeneratorType, params, setParams } = useGenerator();

    return (
        <GenericCard>
            <div className="flex flex-row gap-4">
                <h3 className="text-2xl">Generator</h3>
            </div>
            <div className="flex flex-col gap-8">
                {/* Generator Type Toggle */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium">Generator Type</label>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setGeneratorType('svg')}
                            className={`px-3 py-2 rounded text-sm ${
                                generatorType === 'svg' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                        >
                            SVG Filter
                        </button>
                        <button
                            onClick={() => setGeneratorType('canvas')}
                            className={`px-3 py-2 rounded text-sm ${
                                generatorType === 'canvas' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                        >
                            Canvas Noise
                        </button>
                    </div>
                </div>
                
                <div className="space-y-4">
                    {/* Base Frequency - different ranges for different generators */}
                    <label>
                        Base Frequency
                        <input
                            type="range"
                            min={generatorType === 'svg' ? "0.001" : "0.01"}
                            max={generatorType === 'svg' ? "0.1" : "0.2"}
                            step="0.001"
                            value={params.baseFrequency}
                            onChange={e => setParams({ baseFrequency: parseFloat(e.target.value) })}
                        />
                        <p>{params.baseFrequency.toFixed(3)}</p>
                    </label>

                    {/* Octaves - different ranges */}
                    <label>
                        Octaves
                        <input
                            type="range"
                            min="1"
                            max={generatorType === 'svg' ? "12" : "8"}
                            value={params.numOctaves}
                            onChange={e => setParams({ numOctaves: parseInt(e.target.value) })}
                        />
                        <p>{params.numOctaves}</p>
                    </label>

                    {/* Seed */}
                    <label>
                        Seed
                        <input
                            type="range"
                            min="1"
                            max={generatorType === 'svg' ? "1000" : "100"}
                            value={params.seed}
                            onChange={e => setParams({ seed: parseInt(e.target.value) })}
                        />
                        <p>{params.seed}</p>
                    </label>

                    {/* Scale - different meaning for each generator */}
                    <label>
                        {generatorType === 'svg' ? 'Distortion Scale' : 'Terrain Scale'}
                        <input
                            type="range"
                            min={generatorType === 'svg' ? "10" : "50"}
                            max={generatorType === 'svg' ? "1000" : "1000"}
                            step="10"
                            value={params.scale}
                            onChange={e => setParams({ scale: parseInt(e.target.value) })}
                        />
                        <p>{params.scale}</p>
                    </label>
                </div>
            </div>
        </GenericCard>
    )
}
