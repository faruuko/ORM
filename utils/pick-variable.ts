export default <T>(identifier: Uppercase<string>): T => {
  return process.env[identifier] as never;
};
