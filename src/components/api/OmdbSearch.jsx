import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const OmdbSearch = () => {

  const navigate = useNavigate()

  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const apiKey = '9dcd8995'

  const getDetails = (id) => navigate(`/details/${id}`)

  const searchMovie = async () => {

    if (!searchParam.trim()) {
      setError(true)
      setErrorMessage("Please enter movie name")
      return
    }

    try {
      setLoading(true)
      setError(false)

      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchParam}`
      )

      if (res.data.Response === "True") {
        setMovies(res.data.Search)
      } else {
        setMovies([])
        setError(true)
        setErrorMessage(res.data.Error)
      }

    } catch {
      setError(true)
      setErrorMessage("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mt-4">

      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">OMDB Movie Search</h4>
        </div>

        <div className="card-body">

          {/* Search */}
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Enter movie name"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
            />
            <button className="btn btn-primary" onClick={searchMovie}>
              Search
            </button>
          </div>

          {loading && (
            <div className="text-center">
              <div className="spinner-border text-primary"></div>
            </div>
          )}

          {error && (
            <div className="alert alert-danger">
              {errorMessage}
            </div>
          )}

          {/* Movies */}
          <div className="row">
            {movies.map(movie => (
              <div key={movie.imdbID} className="col-md-3 mb-4">

                <div className="card h-100">

                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/300x450"
                    }
                    className="card-img-top"
                    style={{ height: "360px", objectFit: "cover" }}
                    alt={movie.Title}
                  />

                  <div className="card-body">
                    <h6 className="card-title">{movie.Title}</h6>
                    <p className="small text-muted mb-1">{movie.Year}</p>
                    <p className="small text-muted">{movie.Type}</p>

                    <button
                      className="btn btn-sm btn-outline-primary w-100"
                      onClick={() => getDetails(movie.imdbID)}
                    >
                      View Details
                    </button>

                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}
