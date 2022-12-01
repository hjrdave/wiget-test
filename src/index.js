import React from "react";
import ReactDOM from "react-dom";
import SampleWidget from './components/SampleWidget';
import widgetConfig from '../widget.config';

const Widget = () => {

  return (
    <>
      <SampleWidget/>
    </>
  );
};

ReactDOM.render(<Widget />, document.getElementById(widgetConfig.name));