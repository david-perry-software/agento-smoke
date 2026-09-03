# Shout flag for greet

## Problem

Users want an emphatic greeting. `greet(name)` currently always returns
title-case punctuation; there is no way to shout.

## Decisions

- Add an optional `options.shout` boolean rather than a new function (keeps the
  API surface at one export).
- Shouting uppercases the whole greeting and appends "!" if missing.

## Research

- Skills consulted: none — no matching domain
- Lint baseline: no lint configured in this repo (`none` per AGENTS.md).

## Approach

Extend `src/greet.mjs` with `greet(name, { shout = false } = {})`; cover with
tests in `src/greet.test.mjs`.

## Risks

- None material; the default path is unchanged.

## Out of scope

- CLI wrapper, i18n.

## Acceptance checklist

- [ ] `greet("world", { shout: true })` returns `HELLO, WORLD!` — `node --test 'src/**/*.test.mjs'`
- [ ] Existing callers (no options) are unaffected — same command
