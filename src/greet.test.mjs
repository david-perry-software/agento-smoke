import assert from "node:assert/strict";
import test from "node:test";

import { greet } from "./greet.mjs";

test("greet returns a greeting", () => {
  assert.equal(greet("world"), "Hello, world!");
});

test("greet with shout uppercases the greeting", () => {
  assert.equal(greet("world", { shout: true }), "HELLO, WORLD!");
});

test("greet defaults shout to false", () => {
  assert.equal(greet("world", {}), "Hello, world!");
});
