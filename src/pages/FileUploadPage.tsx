import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import FileUploader from "../components/FileUploader";

type FileUploadProps = {
  files: File[];
  setFiles: (files: File[]) => void;
};

export default function FileUploadPage({ files, setFiles }: FileUploadProps) {
  const [redirectToResults, setRedirectToResults] = useState(false);

  const imageSubmit = (files: File[]) => {
    setFiles(files);
    setRedirectToResults(true);
  };

  if (redirectToResults) {
    return (
      <Redirect
        to={{
          pathname: "/results",
        }}
        push={true}
      />
    );
  }
  return (
    <div className="FileUploadPage">
      <FileUploader submitHandler={imageSubmit} />
    </div>
  );
}
