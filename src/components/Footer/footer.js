import { useRef, useState } from "react";
import { musics } from "../../musics";
import "./style.css";
import StopIcon from "../../assets/stop.svg";
import PrevIcon from "../../assets/previous.svg";
import PlayIcon from "../../assets/play.svg";
import PauseIcon from "../../assets/pause.svg";
import NextIcon from "../../assets/next.svg";

export default function Player({ url, id, title, artist }) {
    const musicRef = useRef(null);
    const titleRef = useRef(null);
    const artistRef = useRef(null);

    const [icon, setIcon] = useState(PlayIcon);

    function toggleToStop() {
        musicRef.current.pause();
        musicRef.current.currentTime = 0;
        setIcon(PlayIcon);
    }
    function toggleToPrev() {
        if (musicRef.current.id > 1) {
            musicRef.current.src = musics[musicRef.current.id - 2].url;
            musicRef.current.id--;
        } else if ((musicRef.current.id = 1)) {
            musicRef.current.src = musics[musics.length - 1].url;
            musicRef.current.id = musics[musics.length - 1].id;
        }

    }
    function toggleToPlay() {
        if (musicRef.current.src === "") {
        } else {
            if (musicRef.current.paused) {
                musicRef.current.play();
                setIcon(PauseIcon);
            } else {
                musicRef.current.pause();
                setIcon(PlayIcon);
            }
        }
    }
    function toggleToNext() {
        if (musicRef.current.id < musics.length) {
            musicRef.current.src = musics[musicRef.current.id].url;
            musicRef.current.id++;
        } else if ((musicRef.current.id = musics.length)) {
            musicRef.current.src = musics[0].url;
            musicRef.current.id = musics[0].id;
        }

    }
    function toggleToMusicStart() {
        setIcon(PauseIcon);
    }

    return (
        <footer>
            <div className="artist">
                <div>
                    <h2 ref={titleRef}>{title}</h2>
                    <h3 ref={artistRef}>{artist}</h3>
                </div>
            </div>

            <div className="controls">
                <audio
                    ref={musicRef}
                    src={url}
                    id={id}
                    autoPlay
                    onPlay={toggleToMusicStart}

                ></audio>
                <button className="b-stop" onClick={toggleToStop}>
                    <img src={StopIcon} alt="" />
                </button>
                <button className="b-prev" onClick={toggleToPrev}>
                    <img src={PrevIcon} alt="" />
                </button>
                <button className="b-play" onClick={toggleToPlay}>
                    <img src={icon} alt="" />
                </button>
                <button className="b-next" onClick={toggleToNext}>
                    <img src={NextIcon} alt="" />
                </button>
            </div>
        </footer>
    );
}
