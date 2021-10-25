import React, { useState } from 'react';
import Header from './Header';
import Plugins from './Plugins';
import Orchestration from './Orchestration';
import Footer from './Footer';
import { load } from 'js-yaml';
import Adapter from './Adapter';

const Main = () => {
  const [adapterArray, setAdapterArray] = useState([]);
  const [show, setShow] = useState(false);

  const showPluginForm = (configuration) => {
    fetch(configuration)
      .then((response) => response.text())
      .then((yamlText) => {
        const yamlJsonObject = load(yamlText);
        setAdapterArray(yamlJsonObject)
      }).catch((err) => console.log('failed to load yaml file', err));
  };

  return (
    <div>
      <div className="container-fluid vh-100">
        <Header />
        <div className="row">
          <div className="col-3 vh-100  bg-secondary bg-opacity-10 background-plugins  overflow-auto">
            <Plugins showPluginForm={showPluginForm} setShow={setShow}/>
          </div>
          <div className="col-6 vh-100 overflow-auto ">
            <Adapter adapterArray={adapterArray} show={show}/>
          </div>
          <div className="col-3 vh-100 bg-secondary bg-opacity-25">
            {show ? <Orchestration /> : null}
          </div>
        </div >
        <div >
          <Footer />
        </div>
        </div>
    </div>
  )
};

export default Main;
