import axios from 'axios';
import { withLogging } from '../../lib/logging/withLogging';

async function handler() {
  try {
    return await axios.get('https://run.mocky.io/v3/2d2921b2-769d-4ff7-95b0-6060ced28c82')
  } catch (error: any) {
    error.stack = error.stack;
    error.message = error?.response?.data;
    console.log('api error', error.message)
    throw error;
  }
}

export const POST = withLogging(handler)