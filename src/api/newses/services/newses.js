'use strict';

/**
 * newses service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newses.newses');
