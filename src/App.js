import React, { useState } from "react";
import "./styles.css";

const moviesList = {
  Action: [
    {
      name: "Hobbs & Shaw",
      rating: "3/5",
      summary:
        "Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity."
    },
    {
      name: "Mission Impossible - Fallout",
      rating: "4/5",
      summary:
        "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong."
    },
    {
      name: "Aquaman",
      rating: "3/5",
      summary:
        "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land."
    },
    {
      name: "Avengers - Infinity War",
      rating: "4/5",
      summary:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
    }
  ],

  Drama: [
    {
      name: "Swades",
      rating: "4/5",
      summary:
        "A successful Indian scientist returns to an Indian village to take his nanny to America with him and in the process rediscovers his roots."
    },
    {
      name: "Rockstar ",
      rating: "4/5",
      summary:
        "Janardhan Jakhar chases his dreams of becoming a big Rock star, during which he falls in love with Heer."
    },
    {
      name: "Sarkar",
      rating: "3.5/5",
      summary:
        "The authority of a man, who runs a parallel government in Mumbai, is challenged. His son rises to face his enemies."
    },
    {
      name: "Lagaan",
      rating: "3.5/5",
      summary:
        "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers."
    }
  ],
  Comedy: [
    {
      name: "Bhagam Bhag",
      rating: "3.5/5",
      summary:
        "The members of a drama troupe fall in trouble when they are framed for a murder. Things go worse when they find their actress committing suicide, which is somehow linked with the murder."
    },
    {
      name: "Hera Pheri",
      rating: "4/5",
      summary:
        "Three unemployed men look for answers to all their money problems - but when their opportunity arrives, will they know what to do with it?"
    },
    {
      name: "Phir Hera Pheri",
      rating: "4/5",
      summary:
        "Baburao, Raju and Shyam are living happily after having risen from rags to riches. Still, money brings the joy of riches and with it the greed to make more money. And so, with a don as an unknowing investor, Raju initiates a new game."
    },
    {
      name: "Hungama",
      rating: "4/5",
      summary:
        "The story of a bunch of misfits whose misconception about each others backgrounds end up in a series of chaotic, yet comic outcomes."
    }
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Action");

  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <body>
        <header class="hero">
          <h1 className="hero-header">
            <span role="img">🎥</span> Movies Database
          </h1>
        </header>
        <div className="container-center">
          {Object.keys(moviesList).map((genre) => {
            return (
              <button
                className="genre-section"
                onClick={() => genreClickHandler(genre)}
              >
                {genre}
              </button>
            );
          })}
        </div>

        <div className="container-center">
          <ul class="list-non-bullet">
            {moviesList[selectedGenre].map((genre) => (
              <li className="list-movies">
                <div className="movie-name">{genre.name}</div>
                <div className="movie-elements">Rating : {genre.rating}</div>
                <div className="movie-elements">{genre.summary}</div>
              </li>
            ))}
          </ul>
        </div>

        <footer className="footer">
          <div className="footer-header">About</div>
          <p>Check out our Movies recommendtion by different genres</p>
        </footer>
      </body>
    </div>
  );
}
