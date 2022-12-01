import React, { useState } from "react";

import "./styles.css";

const movieDB = {
  Action: [
    {
      name: "Mission Impossible 6",
      link:
        "https://www.primevideo.com/dp/amzn1.dv.gti.b6b525a9-e195-a348-13c8-5c67f321d0e4?autoplay=0&ref_=atv_cf_strg_wb",

      rating: "7.7"
    },
    {
      name: "Vikram",
      link: "https://www.zee5.com/movies/details/vikram/0-0-1z5215369",
      rating: "8.4"
    },

    {
      name: "Spectre",
      link:
        " https://www.primevideo.com/dp/amzn1.dv.gti.8e2a27f5-6771-480a-8e76-abe40d60b39a?autoplay=0&ref_=atv_cf_strg_wb",
      rating: "6.8"
    },

    {
      name: "Red Notice",
      link: "https://www.netflix.com/in/title/81161626",
      rating: "6.3"
    }
  ],

  Romance: [
    {
      name: "Dear Comrade",
      link:
        "https://www.primevideo.com/detail/0S81977O5S4TBE8JBBUG0A429C/ref=atv_sr_def_c_unkc_2_1_2?sr=1-2&pageTypeIdSource=ASIN&pageTypeId=B089NKSGNJ&qid=1668154579454 ",
      rating: "7.3"
    },

    {
      name: "96",
      link:
        " https://www.primevideo.com/dp/amzn1.dv.gti.42bb2719-1993-6ee1-857f-d67a043f1c58?autoplay=0&ref_=atv_cf_strg_wb",
      rating: "8.5"
    },

    {
      name: "La La Land",
      link:
        "https://www.primevideo.com/dp/amzn1.dv.gti.c6bc49bb-1ff2-51e7-d53c-d5b99e5fea2c?autoplay=0&ref_=atv_cf_strg_wb ",
      rating: "8"
    },

    {
      name: "West Side Story",
      link:
        " https://tv.apple.com/in/movie/west-side-story-2021/umc.cmc.ns49tueupamhowlca1j581xc?action=play",
      rating: "7.2"
    }
  ],

  Drama: [
    {
      name: "Wecrashed",
      link:
        "https://tv.apple.com/in/show/wecrashed/umc.cmc.6qw605uv2rwbzutk2p2fsgvq9",
      rating: "7.3"
    },
    {
      name: "Succession",
      link: "https://www.hotstar.com/in/tv/succession/17951?utm_source=gwa",
      rating: "8.8"
    },
    {
      name: "Severance",
      link:
        "https://tv.apple.com/in/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx",
      rating: "8.7"
    },
    {
      name: "suits",
      link: "https://www.netflix.com/in/title/70195800",
      rating: "8.5"
    }
  ]
};

export default function App() {
  const [movie, setMovie] = useState("Action");
  function onClickRecommend(genre) {
    setMovie(genre);
  }
  return (
    <div className="App">
      <nav>
        <h1>MOVIEFLIX</h1>
      </nav>
      <div>
        <h3>
          Select your Genre and we will recommend you with some good stuff:
        </h3>
        {Object.keys(movieDB).map((genre) => (
          <button className="genre" onClick={() => onClickRecommend(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div className="content">
        <div className="recommend">
          <ul className="list">
            {movieDB[movie].map((movies) => (
              <li className="items">
                <div>Name: {movies.name}</div>
                <div>Ratings: {movies.rating}/10</div>
                <a href={movies.link} target="_blank" rel="noreferrer">
                  Link
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lsbtn">
        <a
          className="source"
          href="https://github.com/Shinu07/Movieflix-movierecommendation"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}
