import React, { useState } from "react";
import "./App.css";

import FileUploader from "./components/FileUploader";
import Result from "./components/Result";

enum Mode {
  UPLOAD,
  RESULT,
}

function App() {
  const [files, setFiles] = useState<File[]>([]);
  const [mode, setMode] = useState<Mode>(Mode.UPLOAD);

  const imageSubmit = (files: File[]) => {
    setFiles(files);
    setMode(Mode.RESULT);
  };

  const resultBack = () => {
    setMode(Mode.UPLOAD);
  };

  const content =
    mode === Mode.UPLOAD ? (
      <FileUploader submitHandler={imageSubmit} />
    ) : (
      <Result files={files} goBack={resultBack} />
    );
  return (
    <div className="App">
      <h1>Separatwins</h1>
      <h2>Showcase your lost siblings today</h2>

      {content}
    </div>
  );
}

export default App;
