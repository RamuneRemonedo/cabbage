import Titlebar from './ui/Titlebar';
import './App.css';
import PlayControl from './ui/PlayControl';

export default function App() {
  return (
    <div>
      <Titlebar />
      <div className="main">
        <h1>Hello World!</h1>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
      <PlayControl />
    </div>
  );
}
