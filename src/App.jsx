import './App.css'
import { useState } from "react"
import img5 from "./assets/img (5).jpg"
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Stars } from './components/Stars';

function App() {

    const [visible, setVisible] = useState(true);

    const movieList = [
        {
            id: 0,
            img: "https://e1.pxfuel.com/desktop-wallpaper/323/735/desktop-wallpaper-inception-movie-inception.jpg",
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
            img: "https://images.fineartamerica.com/images-medium-large-5/no093-my-the-matrix-minimal-movie-poster-chungkong-art.jpg",
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
            img: "https://ih1.redbubble.net/image.632838574.0818/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
            title: "The office",
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
            img: "https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_480x.progressive.jpg?v=1573652543",
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
            id: 4,
            img: "https://images.static-bluray.com/products/20/61320_1_front.jpg",
            title: "Shaolin Monks",
            year: '2010',
            emoji: "🌸",
            watched: false,
        },

        {
            id: 5,
            img: "https://e0.pxfuel.com/wallpapers/175/682/desktop-wallpaper-jaws-famous-movie-posters-iconic-movie-posters-jaws-movie-poster-cool-movie-posters-thumbnail.jpg",
            title: "Jaws",
            year: '2019',
            emoji: "🌿",
            watched: false,
        },
    ]

    const changeVisibility = () => {
        setVisible(!visible);
    }

    return (
        <>
            <Navbar >
                <div className='searchdiv'>
                    <Search />
                </div>

                <div>
                    <p className='found'>Found {movieList.length} results</p>
                </div>
            </Navbar>

            <Main visible={visible} changeVisibility={changeVisibility} movieList={movieList} />
        </>
    )
}

const Navbar = ({ children }) => {
    return (
        <header id='navbar'>
            <div className='logo'>🥡 cornFlix</div>

            {children}
        </header>
    )
}

const Search = () => {
    const [query, setQuery] = useState("");

    const newQuery = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    return (
        <input className='search' type="text" placeholder='Search movies...' value={query} onChange={newQuery} />
    )
}

const Main = ({ visible, changeVisibility, movieList }) => {
    return (
        <main id='container'>
            <Movies movieList={movieList} />

            {
                visible ? <Details changeVisibility={changeVisibility} /> : <Watched changeVisibility={changeVisibility} />
            }
        </main>
    )
}

const Movies = ({ movieList }) => {
    return (
        <section className='movies'>
            {
                movieList.map(data => <Movie key={data.id} img={data.img} title={data.title} year={data.year} />)
            }
        </section>
    )
}

const Movie = ({ img, title, year, id }) => {
    return (
        <>
            <div className='movie'>
                <div>
                    <img className='img' src={img} alt="img" />
                </div>

                <div className='desc'>
                    <h3>{title}</h3>
                    <p>⏰ {year}</p>
                </div>
            </div>
        </>
    )
}

const Details = ({ changeVisibility }) => {
    return (
        <section className='watched'>
            <div className='back' onClick={changeVisibility}>
                <MdOutlineKeyboardBackspace />
            </div>

            <section className='movie_watched'>
                <img className='img2' src={img5} alt="img" />

                <div className='details'>
                    <h3>Shaolin Monks</h3>
                    <p>16 Jul 2010 ⏲ 148 min</p>
                    <p>Action, Adventure, Sci-fi</p>
                    <p>⭐ 8.8 IMDB rating</p>
                </div>
            </section>

            <section className='movie_details'>
                <Stars max={10} />

                <section>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas quos debitis facilis at quo, asperiores hic inventore vero quod! Quisquam earum ut ex voluptas assumenda commodi, vitae doloremque voluptatum?</p>
                </section>
            </section>
        </section>
    )
}

const Watched = ({ changeVisibility }) => {
    return (
        <section className='watched'>
            <div className="uwatched">
                <h1 className='uwtext'>
                    MOVIES YOU WATCHED
                </h1>

                <div className='widesc'>
                    <p>🎬 2 movies</p>
                    <p>⭐ 8.3</p>
                    <p>🚀 8.5</p>
                    <p>⏱ 82 mins</p>
                </div>
            </div>

            <div className='watchItems' onClick={changeVisibility}>
                <div className='wii'>
                    <img className='img' src="https://images.static-bluray.com/products/20/61320_1_front.jpg" alt="img" />

                    <div className="wii1">
                        <h1>Inception</h1>
                        <div className='widesc2'>
                            <p>⭐ 8.8</p>
                            <p>🚀 8.5</p>
                            <p>⏱ 82 mins</p>
                        </div>
                    </div>

                    <div className='cancel'>✖</div>
                </div>

            </div>

            <div className='watchItems' onClick={changeVisibility}>
                <div className='wii'>
                    <img className='img' src="https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_480x.progressive.jpg?v=1573652543" alt="img" />

                    <div className="wii1">
                        <h1>Avengers</h1>
                        <div className='widesc2'>
                            <p>⭐ 8.8</p>
                            <p>🚀 8.5</p>
                            <p>⏱ 82 mins</p>
                        </div>
                    </div>

                    <div className='cancel'>✖</div>
                </div>

            </div>
        </section>
    )
}

export default App
