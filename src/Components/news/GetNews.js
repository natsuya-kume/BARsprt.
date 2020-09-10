const NewsApi = require('newsapi');

const getNews = () => {

    const newsapi = new NewsApi('cf52f6cd30d44956aa330bfa7866e166')

    newsapi.v2.everything({
        language: 'jp',
        q: 'バルセロナ',
        qInTitle: 'バルセロナ',
        from: '2020-08-17',
        to: '2020-09-10',
        sortBy: 'publishedAt'
    })
        .then(news => console.log(JSON.stringify(news)))
    // .then(news => console.log(news))
    // .then(news => {
    //     news['articles'].forEach(item => console.log(item.title));
    // })
}

getNews()