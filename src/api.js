import axiosInstance from './axiosConfig';

export const getMovieList = async () => {
  try {
    const response = await axiosInstance.get('/movie/popular');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error; // Re-throw the error for the calling code to handle
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await axiosInstance.get(`/search/movie?query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error; // Re-throw the error for the calling code to handle
  }
};
