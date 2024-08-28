import axios from 'axios';
import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const withLogging =
  (handler: any) =>
    async (req: any, res: NextApiResponse) => {
      try {
        console.info(`API REQUEST - (${req.method}) ${req.url}`);
        const response = await handler(req, res);
        return NextResponse.json(response)
      } catch (error: any) {
        console.error('this is catch error');
        const defaultErrorMessage = {
          message: 'Something went wrong, Please try again later.',
        };
        req.status = error.status ?? 500;
        let errorMessage = error?.message;

        if (axios.isAxiosError(error)) {
          errorMessage = typeof error.message === 'string' && {
            message: error?.message,
          };
        } else if (error.stack) {
          error.errorStack = error.stack.split('\n').join(' ');
        }
        return NextResponse.json(errorMessage || defaultErrorMessage, { status: 500 })
      }
    }
