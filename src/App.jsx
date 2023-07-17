import './App.css'

function App() {

    const movieList = [
        {
            id: 0,
            img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
            title: "Inception",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa pariatur iure quis, impedit commodi quidem quaerat sint repudiandae rem. Dolorem odit eveniet blanditiis adipisci mollitia quas at fugiat expedita!",
            year: '2010',
            emoji: "🌸",
            rate: 8.5,
            rating: 10,
            duration: 148,
            watched: true,
        },

        {
            id: 1,
            img: "https://e0.pxfuel.com/wallpapers/480/662/desktop-wallpaper-the-matrix-poster-amazing-and-printable-posters-collection-matrix-movie.jpg",
            title: "The Matrix",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa pariatur iure quis, impedit commodi quidem quaerat sint repudiandae rem. Dolorem odit eveniet blanditiis adipisci mollitia quas at fugiat expedita!",
            year: '2019',
            emoji: "🌿",
            rate: 8.5,
            rating: 10,
            duration: 148,
            watched: true,
        },

        {
            id: 2,
            img: "https://image.tmdb.org/t/p/w500/jwG2CwxBrN4aVpyTrSIDhiy6sD6.jpg",
            title: "Shaolin Monks",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa pariatur iure quis, impedit commodi quidem quaerat sint repudiandae rem. Dolorem odit eveniet blanditiis adipisci mollitia quas at fugiat expedita!",
            year: '1999',
            emoji: "🍀",
            rate: 8.5,
            rating: 10,
            duration: 148,
            watched: true,
        },

        {
            id: 3,
            img: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg",
            title: "Avengers",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa pariatur iure quis, impedit commodi quidem quaerat sint repudiandae rem. Dolorem odit eveniet blanditiis adipisci mollitia quas at fugiat expedita!",
            year: '2012',
            emoji: "🌼",
            rate: 8.5,
            rating: 10,
            duration: 148,
            watched: true,
        },

        {
            id: 0,
            img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
            title: "Inception",
            year: '2010',
            emoji: "🌸",
            watched: false,
        },

        {
            id: 1,
            img: "https://e0.pxfuel.com/wallpapers/480/662/desktop-wallpaper-the-matrix-poster-amazing-and-printable-posters-collection-matrix-movie.jpg",
            title: "The Matrix",
            year: '2019',
            emoji: "🌿",
            watched: false,
        },
        {
            id: 2,
            img: "https://image.tmdb.org/t/p/w500/jwG2CwxBrN4aVpyTrSIDhiy6sD6.jpg",
            title: "Shaolin Monks",
            year: '1999',
            emoji: "🍀",
            watched: false,
        },
        {
            id: 3,
            img: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg",
            title: "Avengers",
            year: '2012',
            emoji: "🌼",
            watched: false,
        },
    ]

    return (
        <>
            <header id='navbar'>
                <div className='logo'>🥡 cornFlix</div>

                <div className='searchdiv'>
                    <input className='search' type="text" placeholder='Search movies...' />
                </div>

                <div>
                    <p className='found'>Found {movieList.length} results</p>
                </div>
            </header>

            <section id='container'>
                <section className='one'>
                    <h1 className='list'>List of Movies</h1>

                    <section className='movies'>
                        {
                            movieList.map(data => <Movie key={data.id} title={data.title} img={data.img} emoji={data.emoji} year={data.year} />)
                        }
                    </section>

                    <p className='license'>Licensed under the MIT License ©</p>
                </section>

                <section className='two one'>
                    <h1 className='list'>Movies Watched</h1>

                    <div>
                        {

                            movieList.map(data => {
                                (data.watched) && <Watched key={data.id} img={data.img} title={data.title} description={data.description} rate={data.rate} rating={data.rating} duration={data.duration} />
                            })
                        }
                    </div>

                    <p className='license'>Licensed under the MIT License ©</p>

                </section>
            </section>
        </>
    )
}

const Movie = ({ img, title, year, emoji }) => {
    return (
        <div className='movie'>
            <img className='banner' src={img} alt={title} />

            <div>
                <h1 className='title'>{title}</h1>
                <p className='year'>{emoji} {year}</p>
            </div>
        </div>
    )
}

const Watched = ({ img, title, rate, rating, duration, description }) => {

    return (
        <div className='watched'>
            <img className='banner2' src={img} alt={title} />

            <div className='info'>
                <h1 className='title'>{title}</h1>
                <p className='year'>{description}</p>

                <div className='more'>
                    <p className='year'>⭐ {rate}</p>
                    <p className='year'>⭐ {rating}</p>
                    <p className='year'>⌛ {duration} mins</p>
                </div>
            </div>

            <div className='close'>✖</div>
        </div>
    )
}

export default App
