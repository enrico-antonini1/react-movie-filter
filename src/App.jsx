import { useState, useEffect } from 'react'

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

const genre = [
  "Fantascienza",
  "Thriller",
  "Romantico",
  "Azione"
]

// Creare array di generi dinamicamente
// 1) inizio creando un nuovo array vuoto
const genres = [];
// 2) faccio un forEach e pusho il genere solo se non è già presente
movies.forEach((curMovie) => {
  if (!genres.includes(curMovie.genre)) {
    genres.push(curMovie.genre);
  }

});
console.log(genres);



function App() {

  const [moviesArray, setMoviesArray] = useState(movies)

  const [selectedGenre, setSelectedGenre] = useState("");

  const [filteredMovies, setFilteredMovies] = useState(moviesArray);


  // useEffect( () => {
  //   console.log("mounting")
  //   return () => {
  //     console.log("unmounting")
  //   }
  //  }, []);

  useEffect(() => {
    // Mi serve condizione if per dire che con "tutti" si devono vedere tutti, altrimenti di filtrare
    if (selectedGenre === "") {
      setFilteredMovies(moviesArray);
    } else {
      setFilteredMovies((prev) => moviesArray.filter((curMovie) => curMovie.genre === selectedGenre)
      );
    }
  }, [selectedGenre]);

  return (
    <>
      {/* Creazione select per scegliere genere film */}
      <div className="container mt-4">
        <select
          className="form-select"
          value={selectedGenre}
          onChange={(event) => setSelectedGenre(event.target.value)}
        >

          <option defaultValue>Seleziona genere film</option>
          <option value="">Tutti</option>

          {genre.map((curGenre, index) => (
            <option value={curGenre} key={index}>
              {curGenre}
            </option>
          ))}
        </select>
      </div>

      {/* Creazione card con stampa dinamica dei film da array movies */}
      <div className="row row-cols-3 mt-4 g-3">
        {filteredMovies.map((curMovie, index) => (
          <div className="col" key={index}>
            <div className="card">
              <div className="card-body">
                <h3>{curMovie.title}</h3>
                <p>{curMovie.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
