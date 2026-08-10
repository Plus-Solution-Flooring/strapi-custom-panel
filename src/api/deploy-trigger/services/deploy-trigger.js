'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deploy-trigger.deploy-trigger');