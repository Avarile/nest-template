import { registerAs } from '@nestjs/config';

export default registerAs('mailer', () => ({
  mailer_host: process.env.MAIL_HOST,
  mailer_port: process.env.MAIL_PORT,
  mailer_address: process.env.MAIL_ADDRESS,
  mailer_password: process.env.MAIL_PASSWORD,
  mailer_redis_host: process.env.MAIL_REDIS_HOST,
  mailer_redis_port: process.env.MAIL_REDIS_PORT,
  mailer_redis_password: process.env.MAIL_REDIS_PASSWORD,
}));
