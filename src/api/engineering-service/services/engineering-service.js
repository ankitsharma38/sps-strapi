'use strict';

/**
 * engineering-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::engineering-service.engineering-service');
