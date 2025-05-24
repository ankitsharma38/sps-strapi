'use strict';

/**
 * engineering-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::engineering-service.engineering-service');
