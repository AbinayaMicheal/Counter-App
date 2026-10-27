
import { useState } from "react";

function RandomNumber() {
    const [number, setNumber] = useState(null);

    function generateNumber() {
        setNumber(Math.floor(Math.random() * 100) + 1);
    }

    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6">
                Random Number Generator
            </h2>

            <div className="bg-slate-800 rounded-xl py-6 mb-6">
                <h3 className="text-4xl font-bold text-white">
                    {number === null ? "?" : number}
                </h3>

                <p className="text-slate-400 mt-2">
                    {number === null
                        ? "No number generated yet"
                        : "Your random number"}
                </p>
            </div>

            <button
                onClick={generateNumber}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
                Generate Random Number
            </button>
        </div>
    );
}

export default RandomNumber;
