import React, { useEffect, useRef } from "react";

export default function ResultPage({ files }: { files?: File[] }) {
  const fileList = files === undefined ? [] : files;
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current !== null) {
      mergeImages(fileList, canvas.current);
    }
  }, [canvas]);

  return (
    <div className="ResultPage">
      <canvas ref={canvas}></canvas>
    </div>
  );
}

const mergeImages = (files: File[], canvas: HTMLCanvasElement) => {
  console.log(files);
  let ctx = canvas.getContext("2d");
  const reader = new FileReader();

  reader.onload = (event) => {
    const image = new Image();
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx?.drawImage(image, 0, 0);
    };

    if (event.target !== null) {
      image.src = event.target.result;
    }
  };
};
