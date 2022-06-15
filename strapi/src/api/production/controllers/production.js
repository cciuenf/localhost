'use strict';

/**
 *  production controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::production.production');
