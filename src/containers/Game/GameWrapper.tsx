import React, { useEffect, useState, useRef } from "react";

//helpers
import socket from "src/helpers/socket";
import { SOCKET_GAME_COMMAND } from "src/helpers/constants";

//assets
import { GameWrapperStyled, GameCaretStyled, PlayingFieldStyled, GameBallStyled } from "./GameStyles";

const speedIndex = 30;


function GameWrapper() {
  let ballX = 500
  let ballY = 500;
  let ballDY = -8;
  let ballDX = 16;
  let curretPosition = { x: 40, y: 40 };

  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.code === "ArrowUp") {
        curretPosition.y += 20
      } else if (e.code === "ArrowDown") {
        curretPosition.y = curretPosition.y - 20
      }
    })
  }, []);

  useEffect(() => {
    if (!ref?.current) return;

    const canvas = ref.current;
    canvas.width = 900;
    canvas.height = 650;
    const context = canvas.getContext("2d");

    if (!context) return;

    context.globalCompositeOperation = "lighter";

    context.beginPath();
    context.fillStyle = "#060606";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fill();

    const drawRectangle = (x: number, y: number, w: number, h: number, border: number) => {
      context.beginPath();
      context.moveTo(x + border, y);
      context.lineTo(x + w - border, y);
      context.quadraticCurveTo(x + w - border, y, x + w, y + border);
      context.lineTo(x + w, y + h - border);
      context.quadraticCurveTo(x + w, y + h - border, x + w - border, y + h);
      context.lineTo(x + border, y + h);
      context.quadraticCurveTo(x + border, y + h, x, y + h - border);
      context.lineTo(x, y + border);
      context.quadraticCurveTo(x, y + border, x + border, y);
      context.closePath();
      context.stroke();
    }

    const gameField = (x: number, y: number, w: number, h: number, r: number, g: number, b: number) => {
      context.shadowColor = `rgb(${r},${g},${b})`;
      context.shadowBlur = 10;
      context.strokeStyle = `rgba(${r},${g},${b},0.2)`;
      context.lineWidth = 7.5;
      drawRectangle(x, y, w, h, 1.5);
      context.strokeStyle = `rgba(${r},${g},${b},0.2)`;
      context.lineWidth = 6;
      drawRectangle(x, y, w, h, 1.5);
      context.strokeStyle = `rgba(${r},${g},${b},0.2)`;
      context.lineWidth = 4.5;
      drawRectangle(x, y, w, h, 1.5);
      context.strokeStyle = `rgba(${r},${g},${b},0.2)`;
      context.lineWidth = 3;
      drawRectangle(x, y, w, h, 1.5);
      context.strokeStyle = "#fff";
      context.lineWidth = 1.5;
      drawRectangle(x, y, w, h, 1.5);
    }

    const circle = (x: number, y: number) => {
      context.beginPath();
      context.shadowBlur = 20;
      context.shadowColor = "#EA5050";
      context.strokeStyle = "#EA5050";
      context.lineWidth = 6;
      context.arc(x, y, 15, 0, Math.PI * 2, true);
      context.closePath();
      context.stroke();
    }

    const curret = (x: number, y: number) => {
      context.beginPath();
      context.fillStyle = "#FFF";
      context.rect(x, y, 15, 150);
      context.fill();
      context.shadowBlur = 1;
      context.shadowColor = "#15D6B3";
      context.lineWidth = 0;
      context.stroke();
      context.closePath();
    }

    gameField(10, 10, canvas.width - 15, canvas.height - 15, 13, 213, 252);
    curret(100, 30);
    curret(800, 30);

    circle(ballX, ballY);

    setInterval(() => {
      canvas.setAttribute("height", "950");

      gameField(10, 10, canvas.width - 15, canvas.height - 15, 13, 213, 252);
      curret(curretPosition.x, curretPosition.y);
      curret(800, 30);
      circle(ballX, ballY);

      if (ballY + ballDY > canvas.height || ballY + ballDY < 0) {
        console.log("y")
        if (ballY > curretPosition.y && ballY < (curretPosition.y)) {
          ballDX = -ballDX;
        }

        ballDY = -ballDY;
      }

      let ballNextX = ballX + ballDX;

      if (ballNextX > canvas.width || ballNextX < 60) {
        if (ballY > curretPosition.y && ballY < (curretPosition.y + 100) && ballNextX < curretPosition.x) {
          ballDX = -ballDX;
        } else {
          ballDX = -ballDX;
        }
      }

      ballX += ballDX;
      ballY += ballDY;
    }, 100);
  }, []);

  // useEffect(() => {
  //   socket.on(SOCKET_GAME_COMMAND, ({ newPosition }) => setRivalCaretPosition(newPosition));
  // }, [socket]);

  return (
    <canvas style={{ width: "900px", height: "650px" }} ref={ref}/>
  );
}

export default GameWrapper;
