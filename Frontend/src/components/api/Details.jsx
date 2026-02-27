import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {

  const { imdbID } = useParams()

  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const apiKey = '9dcd8995'

  // ---------- FORMAT VOTES ----------
  const formatNumber = (num) => {
    if (!num) return "0"
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M"
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K"
    return num
  }

  // ---------- RUNTIME ----------
  const convertRuntime = (runtime) => {
    if (!runtime || runtime === "N/A") return runtime
    const min = parseInt(runtime)
    return `${Math.floor(min / 60)}h ${min % 60}m`
  }

  // ---------- API ----------
  const getDetails = async () => {
    try {
      setLoading(true)

      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
      )

      setDetails(res.data)

    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDetails()
  }, [imdbID])

  // ---------- LOADING ----------
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    )
  }

  // ---------- ERROR ----------
  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          Error loading movie
        </div>
      </div>
    )
  }

  // ---------- CLEAN VOTES ----------
  const votes = Number(details?.imdbVotes?.replace(/,/g, ""))

  return (
    <div className="container mt-4">

      <div className="card shadow">

        {/* HEADER */}
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">{details?.Title}</h4>
        </div>

        <div className="card-body">

          <div className="row">

            {/* POSTER */}
            <div className="col-md-4 text-center">
              <img
                src={
                  details?.Poster !== "N/A"
                    ? details?.Poster
                    : "https://via.placeholder.com/300x450"
                }
                className="img-fluid border rounded"
                alt={details?.Title}
              />
            </div>

            {/* DETAILS */}
            <div className="col-md-8">

              {/* BASIC INFO */}
              <p className="text-muted">
                {details?.Year} • {details?.Rated} • {convertRuntime(details?.Runtime)}
              </p>

              {/* RATING */}
              <div className="mb-3 d-flex gap-2">
                <span className="badge bg-primary text-white me-2 px-3 py-2">
                  ⭐ {details?.imdbRating}/10
                </span>

                <span className="badge bg-light text-dark border px-3 py-2">
                  {formatNumber(votes)} votes
                </span>
              </div>

              {/* ---------- GENRE TAGS ---------- */}
              <div className="mb-3">
                {details?.Genre?.split(",").map((genre, index) => (
                  <span
                    key={index}
                    className="badge bg-warning text-dark me-2 mb-2 px-3 py-2"
                  >
                    {genre.trim()}
                  </span>
                ))}
              </div>

              <hr />

              {/* PLOT */}
              <p>{details?.Plot}</p>

              <hr />

              {/* EXTRA INFO */}
              <p><strong>Director:</strong> {details?.Director}</p>
              <p><strong>Writer:</strong> {details?.Writer}</p>
              <p><strong>Actors:</strong> {details?.Actors}</p>

              {/* AWARDS */}
              <div className="alert alert-info mt-3">
                🏆 {details?.Awards}
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
