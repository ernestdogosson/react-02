import Api from "./components/Api";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8 bg-white text-center">
        <h1 className="text-4xl font-bold text-gray-700 tracking-widest mb-4">
          Do you know your flags?
        </h1>
        <span className="text-blue-500 ">Test your knowledge</span>
      </div>
      <Api />
    </div>
  );
}

export default App;
