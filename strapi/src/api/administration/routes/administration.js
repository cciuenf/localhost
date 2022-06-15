'use strict';

/**
 * administration router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::administration.administration');
