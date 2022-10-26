import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { MongoServerError } from 'mongodb';

@Catch(MongoServerError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoServerError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    switch (exception.code) {
      case 11000:
        status = HttpStatus.BAD_REQUEST;

        response.status(status).json({
          statusCode: status,
          message: `The following properties are duplicated: ${Object.keys(
            exception.keyPattern,
          )}`,
          error: 'Duplicated properties',
        });
        break;
      default:
        response.status(status).json({
          statusCode: status,
          message: 'Internal Server Error',
        });
        break;
    }
  }
}
