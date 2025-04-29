export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1313),
  url: env("PUBLIC_URL", "http://localhost:1313"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
