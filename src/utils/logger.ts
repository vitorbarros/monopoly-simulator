const date = new Date();
const fullDate = date.toISOString();

export const objectParse = (obj: any) => {
  let data = obj;
  if (typeof data === 'object') {
    data = JSON.stringify(data, null, 2);
  }

  return data;
};

const { NODE_ENV } = process.env;

export default {
  debug: (prefix: string, message: any) => {
    if (NODE_ENV === 'development') {
      console.debug(
        `${fullDate} - [${prefix.toUpperCase()}]: ${objectParse(message)}`,
      );
    }
  },
  log: (prefix: string, message: any) => {
    console.log(
      `${fullDate} - [${prefix.toUpperCase()}]: ${objectParse(message)}`,
    );
  },
  warning: (prefix: string, message: any) => {
    if (NODE_ENV === 'development') {
      console.warn(
        `${prefix.toUpperCase()} - [${prefix}]: ${objectParse(message)}`,
      );
    }
  },
  error: (prefix: string, message: any) => {
    console.error(
      `${fullDate} - [${prefix.toUpperCase()}]: ${objectParse(message)}`,
    );
  },
};
