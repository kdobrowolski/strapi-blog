module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ead741fce72ca890abbc81c7ba6c6f41'),
  },
});
