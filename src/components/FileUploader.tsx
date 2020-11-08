import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import "./FileUploader.css";

type FileUploaderProps = {
  submitHandler: (files: File[]) => void;
};

export default function FileUploader({ submitHandler }: FileUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const fileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFiles = e.dataTransfer?.files;

    let fileList = [...files];

    if (newFiles) {
      const fileArray = Array.from(newFiles);
      fileList = [...fileList, ...fileArray];
    }

    setFiles(fileList);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    submitHandler(files);
  };

  let fileListItems = files?.map((file, idx) => {
    return (
      <ListGroup.Item as="li" key={file.name + idx.toString()}>
        {file.name}
      </ListGroup.Item>
    );
  });

  return (
    <div className="FileUploader">
      <div className="FileUploaderContainer">
        <div
          id="DropArea"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
        >
          <h4>Drop your files here...</h4>
        </div>

        <ListGroup className="file-list" as="ul">
          {fileListItems}
        </ListGroup>

        <Button disabled={files.length === 0} onClick={handleClick}>
          Let's go!
        </Button>
      </div>
    </div>
  );
}
