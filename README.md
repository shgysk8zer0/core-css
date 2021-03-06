# core-css
A collection of stylesheets that enable quick and easy styling with customization

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=shgysk8zer0/core-css)](https://dependabot.com)
[![Node CI](https://github.com/shgysk8zer0/core-css/workflows/Node%20CI/badge.svg)](https://github.com/shgysk8zer0/core-css/actions)
[![Super Linter](https://github.com/shgysk8zer0/core-css/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/shgysk8zer0/core-css/actions?query=workflow%3A%22Lint+Code+Base%22)

[![GitHub license](https://img.shields.io/github/license/shgysk8zer0/core-css.svg)](https://github.com/shgysk8zer0/core-css/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/shgysk8zer0/core-css.svg)](https://github.com/shgysk8zer0/core-css/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/shgysk8zer0/core-css.svg)](https://github.com/shgysk8zer0/core-css/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/shgysk8zer0/core-css.svg)](https://github.com/shgysk8zer0/core-css/commits/master)
[![GitHub release](https://img.shields.io/github/release/shgysk8zer0/core-css.svg)](https://github.com/shgysk8zer0/core-css/releases)
[![GitHub stars](https://img.shields.io/github/stars/shgysk8zer0/core-css.svg)](https://github.com/shgysk8zer0/core-css/stargazers)

![GitHub followers](https://img.shields.io/github/followers/shgysk8zer0.svg?style=social)
![GitHub forks](https://img.shields.io/github/forks/shgysk8zer0/core-css.svg?style=social)
![GitHub stars](https://img.shields.io/github/stars/shgysk8zer0/core-css.svg?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/shgysk8zer0.svg?style=social)](https://twitter.com/shgysk8zer0)

[![Donate using Liberapay](https://img.shields.io/liberapay/receives/shgysk8zer0.svg?logo=liberapay)](https://liberapay.com/shgysk8zer0/donate "Donate using Liberapay")
![Keybase BTC](https://img.shields.io/keybase/btc/shgysk8zer0.svg)
![Keybase PGP](https://img.shields.io/keybase/pgp/shgysk8zer0.svg)
- - -

## Helpful Links
- [Overview](#overview)
- [Example](#example)
- [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
- [Contributing](./.github/CONTRIBUTING.md)
- [Issues](https://github.com/shgysk8zer0/core-css/issues)
- [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)

## Overview
Unlike many CSS libraries, this one has the aim of allowing customization and
advanced features by utilizing the amazing features of modern CSS. Just changing
a `--custom-property` or two can completely change the theme of a site and, since
this is native CSS, you can edit these **in your browser and see the results live.**

For best results, namely in production, you should transpile your CSS using PostCSS
using:
- `cssnano`
- `cssnano-preset-default`
- `postcss`
- `postcss-cli`
- `postcss-import`
- `postcss-preset-env`
- `postcss-url`

It is intended to be used with  [shgysk8zer0/fonts](https://github.com/shgysk8zer0/fonts),
but that is completely optional. Simply don't use `fonts.css` and use whatever
font stylesheet(s) you want instead.

## Example
```css
@import url("./viewport.css");
@import url("./rem.css");
@import url("./fonts.css");
@import url("./animations.css");
@import url("./element.css");
@import url("./class-rules.css");
@import url("./jekyll-highlight.css");

:root {
  /*================= Font Size and loading =================*/
  --desktop-rem: 1.3vw;
  --tablet-rem: 1.5vw;
  --mobile-rem: 3.3vw;
  --main-font: "Roboto";
  --title-font: "Ubuntu";
  --header-font: "Alice";
  --article-font: "Ubuntu";
  --article-header-font: var(--header-font);
  --font-display: optional;

  /*================= Set color vars here =================*/
  --default-color: #010101;
  --alt-color: #FAFAFA;
  --primary-color: #E0E0E0;
  --link-color: var(--accent-color);
  --accent-color: #135f9d;
  --accent-color-2: #0d4a7c;
  --border-color: #2D2D2D;

  /*================= Button styles and config =================*/
  --button-background: var(--accent-color);
  --button-active-background: var(--accent-color-2);
  --button-disabled-background: var(--button-active-background);
  --button-border: border;
  --button-disabled-border: var(--button-border);
  --button-active-border: var(--button-disabled-border);
  --button-color: var(--alt-color);
  --button-active-color: var(--button-color);
  --button-border-radius: 4px;
  --button-accept-background: #1e8709;
  --button-reject-background: #b41e1e;

  /*================== Animation properties ==================*/
  --animation-stagger: 150ms;

  /* ================= Syntax Highlighting ====================*/
  --highlight-color: black;
  --highlight-background: #efefef;
  --highlight-literal-number-color: #CCA418;
}
```

```html
<body class="border-box scroll-smooth">
  <!-- ... -->
  <dialog class="animation-speed-normal animation-ease-in fade-in font-main">
     <header class="clearfix sticky top background-primary">
      <button type="button" class="background-accent color-alt float-right">
        <svg class="current-color icon">
          <use xlink:href="#close" />
        </svg>
      </button>
    </header>
    <div class="card shadow">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
```
