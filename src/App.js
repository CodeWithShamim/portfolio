import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import BarLoader from "react-spinners/BarLoader";
import DotLoader from "react-spinners/DotLoader";
import ParticlesContainer from "./pages/Home/ParticlesContainer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // ----pre loader----
  if (loading) {
    return (
      <>
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <p className="text-secondary animate-bounce ease-linear text-2xl font-bold">
            SHAMIM ISLAM
          </p>
          <BarLoader color="#ffffff" loading={loading} height={4} width={180} />
          <DotLoader color="white" loading={loading} height={10} width={180} />
        </div>
        <ParticlesContainer />
      </>
    );
  }

  return (
    <div className="App text-secondary">
      <Home />
    </div>
  );
}

export default App;
