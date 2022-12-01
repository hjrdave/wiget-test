import React from "react";
import ReactDOM from "react-dom";
import SampleWidget from './components/SampleWidget';

export default {
widgets: {
  SampleWidget: {
      render: (args) => {
          ReactDOM.render(
              <SampleWidget />,
              document.querySelector("samplewidget")
          );
      }
   }
}
}