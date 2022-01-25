module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0a91ba3817df24fcf841d71e4108adb6'),
  },
});
