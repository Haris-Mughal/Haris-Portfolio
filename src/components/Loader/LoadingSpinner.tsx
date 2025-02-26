import {useEffect, useState} from 'react';

const LoadingSpinner = () => {
  const [theme, setTheme] = useState('blue');

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'blue';
    setTheme(currentTheme);
  }, []);

  const getColor = () => {
    switch (theme) {
      case 'dark':
        return '#fff'; 
      case 'light':
        return '#369FD5'; 
      default:
        return '#fff'; 
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="color-black w-18 h-14 animate-bounce rounded-full border-4 border-solid border-transparent"
        style={{
          borderTopColor: getColor(),
          borderRightColor: getColor(),
          borderBottomColor: getColor(),
        }}
      >
        Loading...
      </div>
    </div>
  );
};

export default LoadingSpinner;
