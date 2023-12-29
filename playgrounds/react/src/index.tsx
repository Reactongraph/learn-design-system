import React from "react";
import ReactDOM from "react-dom";

import { Button } from "@designsystem/react";
import { Color } from "@designsystem/react";
import "@designsystem/scss/lib/Utilities.css";
import "@designsystem/scss/lib/Button.css";

ReactDOM.render(
  <div>
    <Button label="Example Button" />
    <Color hexcode = "#000" width="lg" height="lg"></Color>
  </div>,
  document.querySelector("#root")
);
