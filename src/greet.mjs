export function greet(name, { shout = false } = {}) {
  const greeting = `Hello, ${name}!`;
  return shout ? greeting.toUpperCase() : greeting;
}
