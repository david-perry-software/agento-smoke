import assert from "node:assert/strict";
import test from "node:test";

import { greet } from "./greet.mjs";

test("greet returns a greeting", () => {
  assert.equal(greet("world"), "Hello, world!");
});
