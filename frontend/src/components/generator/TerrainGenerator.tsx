import React, { useRef, useEffect } from 'react';
import { useGenerator } from './GeneratorContext';

export default function TerrainGenerator() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { params } = useGenerator();

    // Improved interpolation function
    const smoothstep = (t: number): number => {
        return t * t * (3 - 2 * t);
    };

    // Linear interpolation
    const lerp = (a: number, b: number, t: number): number => {
        return a + (b - a) * t;
    };

    // Hash function for consistent random values
    const hash = (x: number, y: number, seed: number): number => {
        let h = Math.floor(x + seed) * 374761393 + Math.floor(y + seed) * 668265263;
        h = (h ^ (h >> 13)) * 1274126177;
        return ((h ^ (h >> 16)) & 0x7fffffff) / 0x7fffffff;
    };

    // Improved noise function with interpolation
    const noise = (x: number, y: number, seed: number): number => {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        const fx = x - ix;
        const fy = y - iy;

        const a = hash(ix, iy, seed);
        const b = hash(ix + 1, iy, seed);
        const c = hash(ix, iy + 1, seed);
        const d = hash(ix + 1, iy + 1, seed);

        const i1 = lerp(a, b, smoothstep(fx));
        const i2 = lerp(c, d, smoothstep(fx));

        return lerp(i1, i2, smoothstep(fy));
    };

    // Octave noise (fractal noise)
    const octaveNoise = (x: number, y: number, octaves: number, frequency: number, seed: number): number => {
        let value = 0;
        let amplitude = 1;
        let totalAmplitude = 0;

        for (let i = 0; i < octaves; i++) {
            value += noise(x * frequency, y * frequency, seed + i * 100) * amplitude;
            totalAmplitude += amplitude;
            amplitude *= 0.5;
            frequency *= 2;
        }

        return value / totalAmplitude;
    };

    // Generate terrain map
    const generateTerrain = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                // Scale coordinates properly for terrain generation
                const nx = x / width * 8; // Increase scale for larger features
                const ny = y / height * 6;
                
                const noiseValue = octaveNoise(
                    nx,
                    ny,
                    params.numOctaves,
                    params.baseFrequency * 2, // Reduce frequency multiplier
                    params.seed
                );

                // Apply smoothing to create larger regions
                const smoothed = Math.pow(noiseValue, 1.5);

                // Map noise to terrain types with better thresholds
                let r, g, b;
                if (smoothed < 0.35) {
                    // Water (blue)
                    r = 20; g = 50; b = 150;
                } else if (smoothed < 0.45) {
                    // Sand/Beach (tan)
                    r = 200; g = 180; b = 140;
                } else if (smoothed < 0.65) {
                    // Grass (green)
                    r = 50; g = 150; b = 50;
                } else if (smoothed < 0.8) {
                    // Hills (brown)
                    r = 120; g = 80; b = 40;
                } else {
                    // Mountains (gray)
                    r = 80; g = 80; b = 80;
                }

                const index = (y * width + x) * 4;
                data[index] = r;     // Red
                data[index + 1] = g; // Green
                data[index + 2] = b; // Blue
                data[index + 3] = 255; // Alpha
            }
        }

        ctx.putImageData(imageData, 0, 0);
    };

    useEffect(() => {
        generateTerrain();
    }, [params]);

    return (
        <div className="w-full">
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
                className="w-full h-auto border border-gray-600 rounded"
                style={{ imageRendering: 'pixelated' }}
            />
        </div>
    );
} 