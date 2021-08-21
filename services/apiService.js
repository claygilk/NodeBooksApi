const axios = require('axios');

const searchByTitle = (searchTerm) => {

    console.log('Searching for ' + searchTerm );

    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}&key=AIzaSyBOE9ZCqVduy0WZTc1YVOSVdTvt9W70w5U`)

}

const searchByAuthor = (authorName) => {

    console.log('Searching for ' + authorName);

    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorName}&key=AIzaSyBOE9ZCqVduy0WZTc1YVOSVdTvt9W70w5U`)


}

module.exports = {
    searchByTitle,
    searchByAuthor
}