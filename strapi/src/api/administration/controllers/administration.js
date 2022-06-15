'use strict';

/**
 *  administration controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::administration.administration');
