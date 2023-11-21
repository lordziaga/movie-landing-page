import axios from 'axios';

const apiKey = '95924083aa2040982d4350277e38b0d9';
const baseURL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTkyNDA4M2FhMjA0MDk4MmQ0MzUwMjc3ZTM4YjBkOSIsInN1YiI6IjY1NWIwMzJiNjdkY2M5MDBjNjg4MjNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wjr1AAg7phvOjIWsTz2BUNXLdYAAb5CK5KdTfGV555U`,
  },
});

export default instance;
