// Model import goes here
const apiService = require('../services/apiService')
const url = require('url');

const search_books = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    
    let title = request.query.title
    let author = request.query.author

    if(title){
        apiService.searchByTitle(title)
    
        .then(apiResponse => {
            let searchResults = apiResponse.data.items
    
            console.log(`${searchResults.length} results found`)
            
            response.status(200).send(searchResults)
        })
    
        .catch(err => {
            console.log(err);
    
            response.status(404).send()
        })
        
    } else {
        apiService.searchByAuthor(author)
    
        .then(apiResponse => {
            let searchResults = apiResponse.data.items
    
            console.log(`${searchResults.length} results found`)
            
            response.status(200).send(searchResults)
        })
    
        .catch(err => {
            console.log(err);
    
            response.status(404).send()
        })
    }

}

module.exports = {
    search_books
}