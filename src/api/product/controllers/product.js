'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
    // build: async ctx => {
    //     ctx.status = 200
    //     ctx.body = 'Ok'
    // },

    async build(ctx) {
        console.log("ok")
        return { name: "ok", count: 12}
    }
}));

// module.exports = createCoreController('api::product.product');
