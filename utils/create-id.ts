import ksuid from 'ksuid';

export default (prefix: string): string => {
  return `${prefix}_${ksuid.randomSync().string}`;
};
