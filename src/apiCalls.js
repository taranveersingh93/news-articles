const fetchArticles = () => {
  return fetch('https://newsapi.org/v2/top-headlines?country=us', {
    method: 'GET',
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY
    }
  })
}

export default fetchArticles;