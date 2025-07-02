import { GeneratorProvider } from "./GeneratorContext";
import GeneratorOptions from "./GeneratorOptions";
import MapDisplay from "./MapDisplay";

export default function GeneratorApp() {
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