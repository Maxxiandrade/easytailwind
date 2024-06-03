import { useState } from "react";
import Banner from "./components/Banner/Banner";
import InputRender from "./components/InputRender/InputRender";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/InputCustomizer/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen ${darkMode ? 'bg-neutral-900' : 'bg-neutral-300'} flex flex-col relative`}>
        <Banner />
        <div className="flex-grow flex items-center justify-center relative">
          <InputRender />
        </div>
        <aside className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <Sidebar />
        </aside>
        <footer className="mb-5">
          <Footer />
        </footer>
        <button
          className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-neutral-300 rounded-full text-white dark:text-black font-semibold"
          onClick={toggleDarkMode}
        >
          {darkMode ? "LGHT" : "DRK"}
        </button>
      </div>
    </div>
  );
}

export default App;