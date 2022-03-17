'use strict';

const Strapi = require("@strapi/strapi/lib/Strapi");


/**
 *  email controller
 */


module.exports = {
    async get(ctx, next) {
        const data = await strapi.entityService.findMany('api::email.email');

        ctx.send({
            data
        }, 200)
    },
    async send(ctx, next) {
        const body = ctx.request.body;

        await strapi.plugins['email'].services.email.send({
            to: 'kdobrowolski12345@gmail.com',
            from: 'hello@strapi.com',
            subject: 'Wiadomość z Strapi',
            html: `<b>Imię i nazwisko: </b> ${body.data.fullname} <br />
              <b>Adres e-mail: </b> ${body.data.email} <br />
              <b>Number telefonu: </b> ${body.data.phone} <br />
              <b>Wiadomość: </b> ${body.data.msg}`,
        })

        ctx.send({
            message: 'Email was sent!'
        }, 200)
    }
}
