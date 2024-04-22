import { useCallback, useState } from "react";

const useToggleMenu = (initialValue = true) => {
  if (typeof initialValue !== 'boolean') {
    console.warn("Invalid type of value for user toggle");
  };

  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggleValue];
};

export default useToggleMenu;
