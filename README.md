# datazen-plugin-olap

DataZen 的 OLAP (Presto/Trino) 数据库驱动插件。

## 目录结构

```
├── Cargo.toml       # Rust crate 配置
├── src/
│   └── lib.rs       # Rust 驱动实现（Presto + Trino）
└── ui/              # 前端 UI 组件
    ├── CatalogConnectionFields.tsx   # Catalog 风格连接表单
    ├── plugin-meta.ts                # Presto/Trino 数据库类型元数据
    └── trinoDialect.ts               # Trino SQL 方言策略
```

## 使用方式

在 DataZen 主项目中通过 `resolve-plugins.mjs` 构建脚本集成：

```bash
# 包含 olap 插件构建
pnpm tauri:build --plugins=olap

# 包含所有插件
pnpm tauri:build --plugins=all
```

## 前端约定

`ui/` 目录下的文件通过相对路径引用主项目的组件（如 `../../../src/components/...`）。
构建时，此仓库会被克隆到主项目的 `.plugins/olap/` 目录下。
