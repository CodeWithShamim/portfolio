import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import PreLoader from "./PreLoader";

function App() {
  // ---pre loader---
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  if (loading) {
    return <PreLoader loading={loading} />;
  }

  return (
    <div className="App text-secondary font-serif">
      <Home />
    </div>
  );
}

export default App;
