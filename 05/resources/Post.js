'use strict'

module.exports = Post

/* function Post(data = {}) {  //SE DATA NON LO PASSO, LO SETTA DI DEFAULT A VUOTO
    var _idAttribute = "_id";
    var _id = data._id || null;
    var author = data.author || '';
    var title = data.title || '';
    var body = data.body || '';
} */

function Post (data = {}) {
    this._idAttribute = '_id'
    this._id = data._id || null
    this._author = data.author || ''
    this._title = data.title || ''
    this._body = data.body || ''
    
}

Post.prototype.toJSON = function toJSON() {
    return {
        _id: this._id,
        author: this._author,
        title: this._title,
        body: this._body
    }
}





// Create an entity that represents a single blog post with the following data
// _idAttribute with default value set to -> '_id'
// _id with default value set to -> null
// _author with default value set to  -> ''
// _title with default value set to  -> ''
// _body with default value set to  -> ''

// Use ES5 or ES6 syle and consider that in both ways the constructor take as input
// an object 

// The class / function that you created need to have a method called toJSON that
// return the following data

//  {
//      _id: ...,
//      author: ...,
//      title: ...,
//      body: ...
//  }
