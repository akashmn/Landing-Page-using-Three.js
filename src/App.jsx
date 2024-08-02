import { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import Routing from './Pages/Routing';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500); // Loader will be displayed for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      <Loader />
    </>
  );
}

export default App;