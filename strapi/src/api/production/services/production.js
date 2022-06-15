'use strict';

/**
 * production service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::production.production');
