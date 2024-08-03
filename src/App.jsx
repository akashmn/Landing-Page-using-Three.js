import { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import Routing from './Pages/Routing';
import AnimateCursor from './Components/AnimateCursor';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500); // Loader will be displayed for 5.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <AnimateCursor />
          <Routing />
        </>
      )}
    </>
  );
}

export default App;