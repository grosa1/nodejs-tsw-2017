'use strict'

const config = require('./config.json')

/**
 * Identify the right environment first based on system environment varialble
 * process.NODE_ENV then on value present on config and export the configuration
 * for all the application
 */

 const env = process.env.NODE_ENV || config.env 

/*  //EQUIVALE A 
const env;
if(process.env.NODE_ENV) {
    env = process.env.NODE_ENV;
} else {
    env = config.env;
} */

// module.exports ...

module.exports = config[env];