# agento-smoke

Scratch target for Agento end-to-end verification.

## Agento

Delivery work in this repository is driven by the Agento plugin. Artifacts live in
`features/YYYY/MM/<slug>/` and `issues/YYYY/MM/<slug>/`; configuration is
`.github/agento.json`.

### Commands

- Install: none (no dependencies)
- Test: `node --test 'src/**/*.test.mjs'`
- Typecheck: none
- Lint: none
- Full verification: `node --test 'src/**/*.test.mjs'`

### Verification strategy

Pure library: run the test command. No dev server, no preview system.

### Shared resources

None.

### Skills

| Domain | Skill |
|---|---|
| none needed | none installed |
