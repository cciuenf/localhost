'use strict';

/**
 * administration service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::administration.administration');
