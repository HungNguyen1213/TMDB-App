import React from "react";

import "./css/MovieDetail.css";
import { BASE_URL, FULL_SIZE, W_500, useStore } from "../store";

function MovieDetail() {
  const { currentMovie, setCurrentMovie } = useStore();
  const renderReleasedDate = () => {
    const month = [
      "Jan",
      "Fer",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const arr = currentMovie.release_date.split("-");
    return `${arr[2]} ${month[parseInt(arr[1]) - 1]} ${arr[0]}`;
  };

  const bgUrl = `${BASE_URL}${FULL_SIZE}${currentMovie.backdrop_path}`;

  return (
    <>
      <div
        className="movie_detail"
        style={
          currentMovie.backdrop_path && { backgroundImage: `url(${bgUrl})` }
        }
      >
        <div className="poster_wrapper">
          <img
            src={
              currentMovie.poster_path === null
                ? require("../assets/not_found_img.jpg")
                : `${BASE_URL}${W_500}${currentMovie.poster_path}`
            }
            alt="Poster"
          />
        </div>
        <div className="content">
          <div className="content__title">
            <p>{currentMovie.title}</p>
          </div>
          {currentMovie.release_date && (
            <div className="content__released">
              <p>
                <span className="content__tag">Năm sản xuất: </span>
                {renderReleasedDate()}
              </p>
            </div>
          )}
          {currentMovie.spoken_languages.length > 0 && (
            <div className="content__language">
              <p>
                <span className="content__tag">Ngôn ngữ: </span>
                {currentMovie.spoken_languages
                  .map((language) => language.name)
                  .join(", ")}
              </p>
            </div>
          )}
          <div className="content__vote">
            <p>
              <span className="content__tag">Điểm trung bình: </span>
              {currentMovie.vote_average}
            </p>
          </div>
          <div className="content__vote">
            <p>
              <span className="content__tag">Số lượt vote: </span>
              {currentMovie.vote_count}
            </p>
          </div>
          {currentMovie.runtime && (
            <div className="content__runtime">
              <p>
                <span className="content__tag">Thời lượng: </span>
                {currentMovie.runtime} phút
              </p>
            </div>
          )}
          {currentMovie.genres.length > 0 && (
            <div className="content__genre">
              <p>
                <span className="content__tag">Thể loại: </span>
                {currentMovie.genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
          )}
          {currentMovie.overview && (
            <div className="content__overview">
              <p>
                <span className="content__tag">Tóm tắt: </span>
                {currentMovie.overview}
              </p>
            </div>
          )}
          <div className="btn_close">
            <button type="button" onClick={() => setCurrentMovie(null)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
