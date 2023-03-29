import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <ReactPlayer
        className="react-player"
        // url={item?.url}
        url={'http://camapp.click/livestream/camera10/stream_0.m3u8'}
        width={"100%"}
        height={"100%"}
        playing={true}
        controls={true}
      />
    </div>
  );
}

export default App;
