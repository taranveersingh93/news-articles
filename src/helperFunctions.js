const refineData = (items) => {
  const refinedArticles = items.map((item, index) => {
    return {
      key: index,
      id: index,
      author: item.author,
      description: item.description,
      date: item.publishedAt,
      title: item.title,
      url: item.url,
      image: item.urlToImage,
      source: item.source.name
    }
  })
  return refinedArticles;
}

export default refineData