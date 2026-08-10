'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::deploy-trigger.deploy-trigger');