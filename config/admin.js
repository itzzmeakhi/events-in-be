module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '669f9f6f359b15bb8ca6f292c24a2188'),
  },
});
