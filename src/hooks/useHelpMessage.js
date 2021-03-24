import { useState } from "react";

export const useHelpMessage = () => {
  const [helpMessageOpacity, setHelpMessageOpacity] = useState(0);
  const [helpMessageVisibility, setHelpMessageVisibility] = useState("hidden");

  const showHelpMessage = () => {
    setHelpMessageOpacity(1);
    setHelpMessageVisibility("visible");
  };

  const hideHelpMessage = () => {
    setHelpMessageOpacity(0);
    setHelpMessageVisibility("hidden");
  };

  return [
    helpMessageOpacity,
    helpMessageVisibility,
    showHelpMessage,
    hideHelpMessage,
  ];
};
