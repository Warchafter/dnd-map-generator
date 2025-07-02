import { createContext, useContext, useState } from 'react';

type GeneratorParams = {
    baseFrequency: number;
    numOctaves: number;
    seed: number;
    scale: number;
};

type GeneratorType = 'canvas' | 'svg';

type GeneratorContextType = {
    generatorType: GeneratorType;
    setGeneratorType: (type: GeneratorType) => void;
    params: GeneratorParams;
    setParams: (p: Partial<GeneratorParams>) => void;
};

const GeneratorContext = createContext<GeneratorContextType | null>(null);

export function GeneratorProvider({ children }: { children: React.ReactNode }) {
    const [generatorType, setGeneratorType] = useState<GeneratorType>('svg');
    
    // Different parameter sets for different generators
    const [svgParams, setSvgParams] = useState<GeneratorParams>({
        baseFrequency: 0.02,
        numOctaves: 8,
        seed: 225,
        scale: 500
    });
    
    const [canvasParams, setCanvasParams] = useState<GeneratorParams>({
        baseFrequency: 0.05,
        numOctaves: 4,
        seed: 15,
        scale: 500
    });

    // Get current params based on generator type
    const params = generatorType === 'svg' ? svgParams : canvasParams;
    
    const setParams = (updates: Partial<GeneratorParams>) => {
        if (generatorType === 'svg') {
            setSvgParams(prev => ({ ...prev, ...updates }));
        } else {
            setCanvasParams(prev => ({ ...prev, ...updates }));
        }
    };

    return (
        <GeneratorContext.Provider value={{ generatorType, setGeneratorType, params, setParams }}>
            {children}
        </GeneratorContext.Provider>
    );
}

export function useGenerator() {
    const context = useContext(GeneratorContext);
    if (!context) throw new Error("useGenerator must be inside of a GeneratorProvider");
    return context;
}

