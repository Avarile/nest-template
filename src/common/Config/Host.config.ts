import { registerAs } from '@nestjs/config';

export default registerAs('host', () => ({
  host: process.env.HOST,
  port: process.env.PORT || 54,
}));
