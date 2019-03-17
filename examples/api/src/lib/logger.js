import winston, { format } from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.cli()
      )
    })
  ]
});

logger.stream = {
  write: (message, encoding) => logger.verbose(message)
};

export default logger;
