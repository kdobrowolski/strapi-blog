'use strict';

/**
 * aboutme service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aboutme.aboutme');
