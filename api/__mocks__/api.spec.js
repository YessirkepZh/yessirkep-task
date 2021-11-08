import { todos } from './responses';

export const testRequest = jest.fn((requestArgument) => new Promise(
  (resolve, reject) => {
    if (requestArgument && requestArgument.length) {
      resolve(todos);
    } else {
      reject(new Error());
    }
  },
));
