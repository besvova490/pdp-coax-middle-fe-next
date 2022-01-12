import { useEffect, MutableRefObject } from "react";


function useClickOutside(node: MutableRefObject<any>, callback: () => void) {

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {

      if (node.current && !node.current.contains(event.target)) {
        callback()
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [node]);
}

export default useClickOutside;
