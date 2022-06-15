'use strict';

/**
 * attachment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::attachment.attachment');
