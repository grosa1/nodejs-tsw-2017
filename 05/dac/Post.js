'use strict'

const VError = require('verror').VError
const Post = require('../resources/Post')
const Mongo = require('../lib/db')
const ObjectId = require('mongodb').ObjectId

const POSTS = 'posts'
const collection = Mongo.db.collection(POSTS)

module.exports = {

    POSTS: collection,

    async find () {
        try {
            // Find all posts stored on the mongodb collection posts and return them
            // To get help see the mongodb driver documentation
            // http://mongodb.github.io/node-mongodb-native/2.2/api/
            // Try to use find method
            // You need to return an array of Post object
            
            //SU COLLECTION DI GRANDI DIMENSIONE CONVIENE FAR SCORRERE IL CURSORE INVECE CHE FARE TO ARRAY
            //SE DICHIARO UNA VARIABILE COME ?const o ?let, NON POSSO SUBIRE ATTACCHI DEL TIPO posts = '' CHE MI AZZERA IL CONETNUTO DI POST
            
/*             NON FUNZIONA
            let posts = await collection.find({}).toArray();
            return posts.map(obj => new Post(obj)); */

            return (await collection.find({}).toArray())
            .map(v => {return new Post(v)})
            

        } catch (err) {
            throw new VError({
                name: 'PostError',
                cause: err
            }, 'Error happened retrieving posts')
        }
    },

    async findById (id) {
        try {
            // Find post by its id from the mongodb collection posts and return it
            // To get help see the mongodb driver documentation
            // http://mongodb.github.io/node-mongodb-native/2.2/api/
            // Try to use find method
            // You need to return a Post object
            
            return (await collection.findOne({_id:ObjectId(id)}));

        } catch (err) {
            throw new VError({
                name: 'PostError',
                cause: err
            }, `Error happened retrieving post with id: ${id}`)
        }

    },

    async updateById (id, data) {
        try {
            let p = await collection.findOneAndUpdate(
                {_id: id}, 
                {$set: data}, 
                {returnOriginal: false}
            )
            return new Post(p)
        } catch (err) {
            throw new VError({
                name: 'PostError',
                cause: err
            }, `Error happened retrieving post with id: ${id}`)
        }
    },

    async create (data) {
        try {
            // Insert a new post and then return it
            // To get help see the mongodb driver documentation
            // http://mongodb.github.io/node-mongodb-native/2.2/api/
            // Try to use the insertOne method
            // You need to return the inserted Post object
            
            let res = collection.insertOne(data);
            data._id = res.insertedId;
            return new Post(data);

        } catch (err) {
            
            // Create the right error for this method

            // YOUR CODE HERE

        }
    }

}