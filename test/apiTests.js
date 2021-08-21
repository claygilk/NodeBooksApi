const assert = require('assert')
const apiService = require('../services/apiService')


describe('Test description', () => {
    
    it('2+2=4', done => {

        assert(2+2 === 4)
        done()
    })
})

describe('API Service Tests: ', () => {

    it('API Service can consume Google Books API to search by title', done =>{

        apiService.searchByTitle('Sonic')
        
        .then(result => {

            result.data.items.forEach(book => {
                let fullTitle = book.volumeInfo.title + ' : ' + book.volumeInfo.subtitle   
                assert(fullTitle.includes('Sonic'))
            })

            done()
        })
    })

    it('API Service can consume GoogleBooks API to search by author', done => {

        apiService.searchByAuthor('Sanderson')

        .then(result => {
            //console.log(result.data.items);
            result.data.items.forEach(book => {
                let author = book.volumeInfo.authors[0].toLowerCase()

                assert(author.includes('sanderson'))
            })

            done()
        })
    })
})

