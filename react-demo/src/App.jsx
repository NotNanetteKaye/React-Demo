import React from 'react';
import ImagePresenter from './components/ImagePresenter';
import gifs from './assets/badbunny.webp'
import benito from './assets/benito.webp'

function App() {
  return (
    <div className="App">
        Hello world!
        <ImagePresenter img = {gifs} altText="Bad Bunny on pink seashell floatie."/>
        <ImagePresenter img = {benito} altText="Bad Bunny floating in air."/>
    </div>
  );
}

export default App;
