import { describe, it, expect } from 'vitest';
import { prestoMeta, trinoMeta } from '../plugin-meta';

describe('prestoMeta', () => {
  it('uses catalog connection form', () => {
    expect(prestoMeta.connectionForm).toBe('catalog');
  });

  it('has multi-database support', () => {
    expect(prestoMeta.hasMultiDatabase).toBe(true);
  });

  it('uses trino sql dialect', () => {
    expect(prestoMeta.sqlDialect).toBe('trino');
  });

  it('default port is 8080', () => {
    expect(prestoMeta.defaultPort).toBe(8080);
  });

  it('supports SQL and tables', () => {
    expect(prestoMeta.supportsSQL).toBe(true);
    expect(prestoMeta.supportsTables).toBe(true);
  });

  it('does not support backup', () => {
    expect(prestoMeta.supportsBackup).toBe(false);
  });
});

describe('trinoMeta', () => {
  it('uses catalog connection form', () => {
    expect(trinoMeta.connectionForm).toBe('catalog');
  });

  it('has multi-database support', () => {
    expect(trinoMeta.hasMultiDatabase).toBe(true);
  });

  it('uses trino sql dialect', () => {
    expect(trinoMeta.sqlDialect).toBe('trino');
  });

  it('default port is 8080', () => {
    expect(trinoMeta.defaultPort).toBe(8080);
  });

  it('supports SQL and tables', () => {
    expect(trinoMeta.supportsSQL).toBe(true);
    expect(trinoMeta.supportsTables).toBe(true);
  });

  it('does not support backup', () => {
    expect(trinoMeta.supportsBackup).toBe(false);
  });
});
