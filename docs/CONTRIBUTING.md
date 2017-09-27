# Contributing to the project
**Table of Contents**
- [General](#general)
- [Requirements](#requirements)
- [CSS Contributions](#css)
- [NPM Modules / Dev dependencies](#dev-dependencies)

- - -

## General
Write access to the GitHub repository is restricted, so make a fork and clone
that. All work should be done on its own branch, named according to the issue
number (*e.g. `42` or `bug/23`*). When you are finished with your work, push
your feature branch to your fork, preserving branch name (*not to master*), and
create a pull request.

**Always pull from `upstream master` prior to sending pull-requests.**

## Requirements
- [Node/NPM](https://nodejs.org/en/)
- [Git](https://www.git-scm.com/download/)

## CSS
Like in the above, one of the goals of this project is to keep things working
natively, which means standardized CSS and JavaScript. Although the features may
be new, `import` and `export` in JavaScript, and `@import` and `--var-name: value`
are official standards. In the case of CSS, browser support does exist, and so
this project will use `@import` and CSS variables in favor of SASS or LESS.

All CSS **MUST** pass `stylelint` tests with rules defined in `.stylelintrc`.

![CSS sample](https://i.imgur.com/j4sC5qv.png)

## NPM
Simply run `npm install` after download to install all Node modules.

## Dev dependencies
- [PostCSS](https://www.npmjs.com/package/postcss)
- [cssnext](http://cssnext.io/)
- [Stylelint](https://github.com/stylelint/stylelint)
