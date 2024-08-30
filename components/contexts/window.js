import React,{useContext, createContext, useState, useEffect} from "react";

//window width
 const WindowWidthContext = createContext();

export const useWindowWidth = () => useContext(WindowWidthContext);

const WindowWidthProvider = ({ children }) => {
    const [isSmallerDevice, setIsSmallerDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallerDevice(width < 500);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <WindowWidthContext.Provider value={{isSmallerDevice}} >
        {children}
    </WindowWidthContext.Provider>
  );
}

export default WindowWidthProvider;
