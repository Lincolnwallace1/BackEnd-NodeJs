import { string } from 'zod';
import APIConfig from '@config/APIConfig';

class PhotoUrlTransformer {
  to(data: string): string | null {
    return data;
  }

  from(data: string): string | null {
    if (data === null) return null;
    return string().url().safeParse(data).success ? data : `${APIConfig.swagger.url}/api/${data}`;
  }
}

export default PhotoUrlTransformer;
