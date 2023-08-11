import './style.css';

export default function Card({ cover, title, artist, description, url, id, setIsPlaying }) {

    function handleClick(url, id, artist, title) {
        setIsPlaying({
            id,
            url,
            artist,
            title,
        });
    }

    return (
        <main>

            <div className='cards'>
                <div className='content-card' key={id}
                    onClick={() => handleClick(url, id, artist, title)} >
                    <img
                        src={cover}
                        alt='music1'
                    />
                    <h3>{title}</h3>
                    <span>{description}</span>
                </div>
            </div>
        </main>
    )
}
