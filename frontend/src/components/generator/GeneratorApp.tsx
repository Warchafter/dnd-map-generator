import React, { useState, useEffect } from "react";
import { GeneratorProvider } from "./GeneratorContext";
import GeneratorOptions from "./GeneratorOptions";
import MapDisplay from "./MapDisplay";
import { config } from "../../config";

await fetch(`${config.apiUrl}/api/generate-map.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ seed: 42, frequency: 0.05 })
})
.then(res => res.json())
.then(data => console.log(data));

export default function GeneratorApp() {
    const [apiStatus, setApiStatus] = useState<'loading' | 'connected' | 'error'>('loading');
    const [mapData, setMapData] = useState(null);

    useEffect(() => {
        const testConnection = async () => {
            try {
                const response = await fetch(`${config.apiUrl}/api/generate-map.php`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        seed: 42,
                        frequency: 0.05,
                        test: true
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const data = await response.json();
                console.log('Backend connected: ', data);
                setMapData(data);
                setApiStatus('connected');
            } catch (error) {
                console.error('Backend connection has failed', error);
                setApiStatus('error');
            }
        };

        testConnection();
    }, []);

    return (
        <GeneratorProvider>
            <div className="grid grid-cols-7 text-slate-50 gap-10 items-start">
                <div className="col-span-5">
                    <MapDisplay />
                </div>
                <div className="col-span-2">
                    <GeneratorOptions />
                </div>
            </div>
        </GeneratorProvider>
    );
}