import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./TerminalMatrix.css";

export const TerminalMatrix = (props) => {
  const { t } = useTranslation();
  const canvasRef = useRef(null);

  useEffect(() => {
    const current = canvasRef.current;
    const ctx = current.getContext("2d");

    current.height = window.innerHeight;
    current.width = window.innerWidth;

    const symbols = t("authorized.terminal.symbols-for-matrix").split("");

    const fontSize = 12;
    const columns = current.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) drops[x] = 1;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, current.width, current.height);

      ctx.fillStyle = props.terminalTextColor;
      ctx.font = fontSize + "px arial";

      for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > current.height && Math.random() > 0.975)
          drops[i] = 0;
        drops[i]++;
      }
    };

    const effect = setInterval(draw, 33);
    return () => {
      clearInterval(effect);
    };
  }, [t, props.terminalTextColor]);

  return (
    <div className={"terminal-matrix"}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
