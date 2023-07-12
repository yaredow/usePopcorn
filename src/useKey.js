import { useEffect } from "react";
export function useKey(action, key) {
  useEffect(function callBack() {
    document.addEventListener("keydown", function (e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    });
    return function () {
      document.removeEventListener("keydown", callBack);
    };
  }, []);
}
