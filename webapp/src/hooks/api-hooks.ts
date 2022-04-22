import { User } from '@react-tsoa-starter/types';

/**
 * UTILS
 */

function getApiEndpoint(path: string): string {
  const trimmedPath = path.replace(/^\/+/, ''); // remove leading slashes
  return `/api/${trimmedPath}`;
}

export {};
