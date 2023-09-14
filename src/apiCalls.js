const fetchArticles = () => {
  return fetch('https://newsapi.org/v2/top-headlines?country=us', {
    method: 'GET',
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY
    }
  })
  .then(data => checkForError(data))
}

const checkForError = data => {
  if (!data.ok) {
    throw new Error('Something went wrong')
  } else {
    return data.json()
  }
}
 
export default fetchArticles;