import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChannelDetail from './Components/ChannelDetail/ChannelDetail';
import Feed from './Components/Feed/Feed';
import Navbar from './Components/Navbar/Navbar';
import SearchFeed from './Components/SearchFeed/SearchFeed';
import VideoDetail from './Components/VideoDetail/VideoDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Feed/>}/>
        <Route path='/video/:id' element= {<VideoDetail/>}/>
        <Route path='/channel/:id' element= {<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element= {<SearchFeed/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
