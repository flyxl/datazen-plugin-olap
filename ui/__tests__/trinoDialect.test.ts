import { describe, it, expect } from 'vitest';
import { trinoDialect } from '../trinoDialect';

describe('trinoDialect', () => {
  it('has trino family', () => {
    expect(trinoDialect.family).toBe('trino');
  });

  it('DDL uses SHOW CREATE TABLE', () => {
    const ddl = trinoDialect.ddl.getTableDdlQuery('users', 'default');
    expect(ddl.sql).toContain('SHOW CREATE TABLE');
  });

  it('DDL includes schema qualification', () => {
    const ddl = trinoDialect.ddl.getTableDdlQuery('users', 'myschema');
    expect(ddl.sql).toContain('"myschema"."users"');
  });

  it('DDL without schema omits qualification', () => {
    const ddl = trinoDialect.ddl.getTableDdlQuery('users');
    expect(ddl.sql).toBe('SHOW CREATE TABLE "users"');
  });

  it('supports btree index method', () => {
    expect(trinoDialect.index.supportedIndexMethods).toContain('btree');
  });

  it('drop index includes ON clause', () => {
    const sql = trinoDialect.index.getDropIndexSql('idx_foo', 'users', '"');
    expect(sql).toContain('ON');
    expect(sql).toContain('"idx_foo"');
    expect(sql).toContain('"users"');
  });

  it('create index generates valid SQL', () => {
    const sql = trinoDialect.index.getCreateIndexSql({
      indexName: 'idx_name',
      tableName: 'users',
      columns: ['name'],
      quoteChar: '"',
      unique: false,
    });
    expect(sql).toBe('CREATE INDEX "idx_name" ON "users" ("name")');
  });

  it('create unique index generates valid SQL', () => {
    const sql = trinoDialect.index.getCreateIndexSql({
      indexName: 'idx_email',
      tableName: 'users',
      columns: ['email'],
      quoteChar: '"',
      unique: true,
    });
    expect(sql).toContain('UNIQUE');
  });

  it('has empty backup options', () => {
    expect(trinoDialect.backupOptions).toEqual([]);
  });
});
