function getEnvVar(name: string, required: true, defaultValue?: string): string;
function getEnvVar(name: string, required: boolean, defaultValue: string): string;
function getEnvVar(name: string, required: boolean, defaultValue?: string): string | undefined;
function getEnvVar(
  name: string,
  required: boolean,
  defaultValue: string | undefined = undefined,
) {
  const value = process.env[name] ?? defaultValue;
  if (required && value === undefined) {
    console.error(`missing env. var. ${name}`); // cannot use logger as it relies on this file
    process.exit(1);
  }
  return value;
}

export const port: number = parseInt(getEnvVar('PORT', true, '8181'), 10);
