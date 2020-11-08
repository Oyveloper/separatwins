import React, { useEffect, useRef } from "react";

import Button from "react-bootstrap/Button";

import "./Result.css";

export default function Result({
  files,
  goBack,
}: {
  files: File[];
  goBack: () => void;
}) {
  const fileList = files === undefined ? [] : files;
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current !== null) {
      mergeImages(fileList, canvas.current);
    }
  }, [canvas]);

  return (
    <div className="ResultPage">
      <div className="ResultContainer">
        <canvas ref={canvas}></canvas>

        <Button onClick={goBack}>Back</Button>
      </div>
    </div>
  );
}

const mergeImages = (files: File[], canvas: HTMLCanvasElement) => {
  let ctx = canvas.getContext("2d");
  canvas.width = 200 * files.length;
  canvas.height = 340;

  if (ctx !== null) {
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx?.fillText("Separated at birth", canvas.width / 2, 330);
  }

  let i = 0;
  for (let file of files) {
    drawImageFromFile(file, canvas, i);
    i++;
  }
};

const drawImageFromFile = (
  file: File,
  canvas: HTMLCanvasElement,
  dx: number
) => {
  const reader = new FileReader();
  const ctx = canvas.getContext("2d");
  reader.onload = (event) => {
    const image = new Image();
    image.onload = () => {
      console.log(canvas);
      ctx?.drawImage(image, dx * 200, 0, 200, 300);
    };

    if (event.target !== null) {
      console.log(event.target.result);
      if (typeof event.target.result === "string") {
        image.src = event.target.result;
      }
    }
  };

  reader.readAsDataURL(file);
};
