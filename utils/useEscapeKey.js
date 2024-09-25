import { useEffect } from "react";

const useEscapeKey = (callback) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
};

export default useEscapeKey;
