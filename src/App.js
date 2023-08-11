import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Card from './components/Card/card';
import { musics } from './musics';
import { useState } from 'react';




function App() {
  const [isPlaying, setIsPlaying] = useState('');


  return (

    <div className="container">

      <Header />
      <div className='main'>

        {musics.map((music) => (
          <Card
            key={music.id}
            id={music.id}
            cover={music.cover}
            title={music.title}
            artist={music.artist}
            description={music.description}
            url={music.url}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </div>

      <Footer
        url={isPlaying.url}
        id={isPlaying.id}
        artist={isPlaying.artist}
        title={isPlaying.title} />
    </div>
  );
}

export default App;
