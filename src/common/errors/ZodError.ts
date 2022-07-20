import { ZodError } from 'zod';

const parseZodValidationError = (error: ZodError): string => `Validation error: ${error.message}`;

export default parseZodValidationError;
