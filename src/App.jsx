import { useState, useEffect } from 'react'

const movie = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]



function App() {

  // Variabile dove salvo scelta del selected
const [selectedGenre, setSelectedGenre] = useState("");

function addMovie(event) {
  event.preventDefault();
  
}

  // useEffect( () => {

  // }, []);

  return (
    <> 
    <div className="container">
      <select 
      className="form-select" 
      aria-label="Default select example">
        <option defaultValue>Seleziona genere film</option>
        {movie.map((curMovie) => (
        <option value="1">{curMovie.genre}</option>
       ))}
      </select>
    </div>
    </>
  )
}

export default App
