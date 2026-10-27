
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-2xl font-semibold text-purple-400 mb-6">
                Counter App
            </h2>

            <div className="bg-slate-800 rounded-xl py-6 mb-6">
                <h3 className="text-6xl font-bold text-white">
                    {count}
                </h3>
                <p className="text-slate-400 mt-2">Current Count</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-medium"
                >
                    Increment
                </button>

                <button
                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium"
                >
                    Decrement
                </button>

                <button
                    onClick={() => setCount(0)}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2.5 rounded-lg font-medium"
                >
                    Reset
                </button>
            </div>

            {count === 0 && (
                <p className="text-rose-400 mt-5 text-sm">
                    Minimum limit reached
                </p>
            )}
        </div>
    );
}

export default Counter;
