import { useEffect, useCallback, RefObject } from 'react';

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  toggleElement: Function,
  isOpen: boolean,
): void => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (isOpen) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          toggleElement();
        }
      }
    },
    [isOpen, ref, toggleElement],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export { useClickOutside };
