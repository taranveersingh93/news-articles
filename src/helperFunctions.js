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

const humanizeDate = date => {
  const inputDate = date.toString();
  const year = inputDate.slice(0,4);
  const month = inputDate.slice(5,7);
  const newDate = inputDate.slice(8, 10);
  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  return `${months[month]} ${newDate}, ${year}`;
}

export {refineData, humanizeDate}