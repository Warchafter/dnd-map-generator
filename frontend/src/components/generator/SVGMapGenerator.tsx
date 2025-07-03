import React from 'react';
import { useGenerator } from './GeneratorContext';

export default function SVGMapGenerator() {
    const { params } = useGenerator();

    return (
        <div className="w-full">
            {/* SVG Filters */}
            <svg 
                id="svgfilters" 
                height="0" 
                style={{width: 0, height: 0, visibility: 'hidden', position: 'absolute'}} 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1"
            >
                <defs>
                    <filter id="wiggle">
                        <feTurbulence 
                            baseFrequency={params.baseFrequency} 
                            id="turbulence-3" 
                            numOctaves={params.numOctaves} 
                            result="noise" 
                            seed={params.seed}
                        />
                        <feDisplacementMap 
                            in2="noise" 
                            in="SourceGraphic" 
                            scale={params.scale}
                        />
                    </filter>
                </defs>
            </svg>

            {/* Map Container */}
            <div className="flex justify-center items-center min-h-96 bg-blue-600 p-8 rounded">
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <div style={{ 
                        border: '15px solid #1e40af', 
                        filter: 'url(#wiggle)', 
                        padding: '3rem', 
                        backgroundColor: '#3b82f6',
                        position: 'relative' 
                    }}>
                        <div style={{ 
                            border: '20px solid #eab308', 
                            filter: 'url(#wiggle)', 
                            backgroundColor: '#22c55e',
                            padding: '2rem',
                            position: 'relative' 
                        }}>
                            <div style={{ 
                                border: '8px solid #15803d', 
                                filter: 'url(#wiggle)', 
                                backgroundColor: '#16a34a',
                                padding: '1rem',
                                margin: '0.5rem',
                                display: 'inline-block',
                                width: '4rem',
                                height: '4rem'
                            }}></div>
                            <div style={{ 
                                border: '6px solid #65a30d', 
                                filter: 'url(#wiggle)', 
                                backgroundColor: '#84cc16',
                                padding: '1rem',
                                margin: '0.5rem',
                                display: 'inline-block',
                                width: '3rem',
                                height: '3rem'
                            }}></div>
                            <div style={{ 
                                border: '10px solid #6b7280', 
                                filter: 'url(#wiggle)', 
                                backgroundColor: '#9ca3af',
                                padding: '1rem',
                                margin: '0.5rem',
                                display: 'inline-block',
                                width: '2rem',
                                height: '2rem'
                            }}></div>
                            <div style={{ 
                                border: '4px solid #0ea5e9', 
                                filter: 'url(#wiggle)', 
                                backgroundColor: '#38bdf8',
                                padding: '0.5rem',
                                margin: '0.5rem',
                                display: 'inline-block',
                                width: '2rem',
                                height: '2rem'
                            }}></div>
                        </div>
                        <div style={{ 
                            border: '20px solid #eab308', 
                            filter: 'url(#wiggle)', 
                            backgroundColor: '#22c55e',
                            padding: '2rem',
                            position: 'relative' 
                        }}>
                            <div style={{ 
                                border: '8px solid #15803d', 
                                filter: 'url(#wiggle)', 
                                backgroundColor: '#16a34a',
                                padding: '1rem',
                                margin: '0.5rem',
                                display: 'inline-block',
                                width: '4rem',
                                height: '4rem'
                            }}></div>
                            <div style={{ 
                                border: '6px solid #65a30d', 
                                filter: 'url(#wiggle)', 
                                backgroundColor: '#84cc16',
                                padding: '1rem',
                                margin: '0.5rem',
                                display: 'inline-block',
                                width: '3rem',
                                height: '3rem'
                            }}></div>
                            <div style={{ 
                                border: '10px solid #6b7280', 
                                filter: 'url(#wiggle)', 
                                backgroundColor: '#9ca3af',
                                padding: '1rem',
                                margin: '0.5rem',
                                display: 'inline-block',
                                width: '2rem',
                                height: '2rem'
                            }}></div>
                            <div style={{ 
                                border: '4px solid #0ea5e9', 
                                filter: 'url(#wiggle)', 
                                backgroundColor: '#38bdf8',
                                padding: '0.5rem',
                                margin: '0.5rem',
                                display: 'inline-block',
                                width: '2rem',
                                height: '2rem'
                            }}></div>
                        </div>
                        <div style={{ 
                            border: '20px solid #eab308', 
                            filter: 'url(#wiggle)', 
                            backgroundColor: '#eab308',
                            padding: '2rem',
                            position: 'relative' 
                        }}></div>
                    </div>
                </div>
            </div>


        </div>
    );
} 