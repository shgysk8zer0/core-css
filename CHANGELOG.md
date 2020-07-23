<!-- markdownlint-disable -->
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `outline-offset` settable via `--focus-outline-offset`
- Light & dark theme stylesheets, also useful with `<link rel="stylesheet" media="(prefers-color-scheme: dark)" title="Auto Light/Dark">`
`<link rel="alternate stylesheet" title="{COLOR} Theme">`
 

### Changed
- Do not set default styles for `[role="button"]` elements

### Fixed
- Duplicate `@import` of base theme stylesheet [#84](https://github.com/shgysk8zer0/core-css/issues/84)

## [v2.2.2] - 2020-07-09

### Fixed
- Fix setting column / page width on mobile layouts [#81](https://github.com/shgysk8zer0/core-css/issues/81)

## [v2.2.1] - 2020-06-27

### Changed
- Final updates to dependencies

## [v2.2.0] - 2020-06-27

### Changed
- Update dependencies
- Switch from `netlify-cli` to `http-server`

### Fixed
- Remove submodule config from Dependabot

## [v2.0.5] - 2020-06-27

### Added
- GitHub Actions Super Linter & config
- Dependabot config
- Dependabot & Super Linter badges in README
- Add CHANGELOG

### Changed
- Various issue tempaltes, etc. (markdown lint issues)
- Update node modules using `npm update` & `npm audit fix`

### Fixed
- Syntax error in README (no tabs)

### Removed
- Travis-CI config file

## [v2.0.4] - 2018-12-11
No changelog existed then. Adding for reference only
<!-- markdownlint-restore -->
