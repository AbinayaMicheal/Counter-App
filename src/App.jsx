
import Counter from "./components/Counter";
import RandomNumber from "./components/RandomNumber";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-5 py-12">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">Counter App</h1>

        <p className="text-slate-400 text-center mb-12">Explore state management with React
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Counter />
          <RandomNumber />
        </div>

      </div>
    </div>
  );
}

export default App;
