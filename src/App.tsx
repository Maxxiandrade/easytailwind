import { useState } from "react";
import Banner from "./components/Banner/Banner";
import InputRender from "./components/InputRender/InputRender";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/InputCustomizer/Footer"
import { MyProvider } from "./inputReducer";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MyProvider>
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen ${darkMode ? 'bg-neutral-900' : 'bg-neutral-300'} flex flex-col relative`}>
        <Banner />
        <div className="flex-grow flex items-center justify-center relative">
          <InputRender />
        </div>
        <aside className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        </aside>
        <footer className="mb-5">
          <Footer />
        </footer>
        
      </div>
    </div>
          </MyProvider>
  );
}

export default App;
