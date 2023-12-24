import './PlayControl.css';

import { ipcRenderer } from 'electron';

export default function PlayControl() {
  return (
    <footer className="play-control container-fluid">
      <div className="row h-100">
        <div className="col-3 border border-white">
          <p>1111</p>
        </div>
        <div className="col-6 border border-white">
          <button onClick={() => ipcRenderer.send('play', '')}>Play</button>
        </div>
        <div className="col-3 border border-white">
          <p>1111</p>
        </div>
      </div>
    </footer>
  );
}
