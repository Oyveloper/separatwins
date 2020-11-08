import React, { useState } from "react";
import "./App.css";

import Button from "react-bootstrap/Button";
import FileUploader from "./components/FileUploader";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import FileUploadPage from "./pages/FileUploadPage";
import ResultPage from "./pages/ResultPage";

interface ResultState {
  files: File[];
}

function App() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div className="App">
      <h1>Separatwins</h1>
      <h2>Showcase your lost siblings today</h2>

      <Router>
        <Switch>
          <Route exact path="/">
            <FileUploadPage files={files} setFiles={setFiles} />
          </Route>
          <Route exact path="/results">
            <ResultPage files={files} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
