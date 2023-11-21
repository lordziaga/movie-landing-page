import axios from "axios"

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTkyNDA4M2FhMjA0MDk4MmQ0MzUwMjc3ZTM4YjBkOSIsInN1YiI6IjY1NWIwMzJiNjdkY2M5MDBjNjg4MjNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wjr1AAg7phvOjIWsTz2BUNXLdYAAb5CK5KdTfGV555U'
    }
  };
  axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  
const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    // return movie.data.results
    console.log({movieList: movie})
    }

export const searchMovie = async (q) => {
    const search = await axios.get(q)
    return
}