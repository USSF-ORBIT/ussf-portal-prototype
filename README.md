# ussf-portal-prototype

[![Netlify Status](https://api.netlify.com/api/v1/badges/8913c1a5-79ca-48e1-a05e-2c24e98b80df/deploy-status)](https://app.netlify.com/sites/jolly-mcclintock-622e06/deploys)

This is a prototype application for testing design concepts for the USSF portal website. It is a static site built on [NextJS](https://nextjs.org/). We're also using [Storybook](https://storybook.js.org/) for building and reviewing components.

## Development

### Environment Setup

- Make sure you are using the version of node specified in `.node-version`.
  - We recommend using [nodenv](https://github.com/nodenv/nodenv) to install and manage node versions.
- Use [yarn v1](https://yarnpkg.com) to manage JS packages.
  - [Install yarn](https://yarnpkg.com/en/docs/install) if you do not already have it.
  - Type `yarn` or `yarn install` inside the project directory to install dependencies. You will need to do this once after cloning the project, and continuously if the dependencies in `package.json` change.

### Available commands

- `yarn dev`: Starts NextJS server in development mode and watches for changed files
- `yarn build`: Builds the NextJS production asset bundle
- `yarn start`: Starts the NextJS server in production mode
- `yarn storybook`: Starts the Storybook component library on port 6006
- `yarn storybook:build`: Build Storybook to a static site that can be deployed
- `yarn format`: Autoformat all code using Prettier
- `yarn lint`: Runs the TypeScript compiler and ESLint and outputs issues

### Working on an issue

To begin working on an issue, make sure you've assigned yourself to the issue in Github and marked it as "In Progress.".

Once you have an issue to work on, create a new branch off `main` using the naming convention:

`{issue #}-{summary}`

For example: `112-logo-component`

When you commit your changes, several hooks will run to check and format staged files. In order to be eligible for merging, all branches must pass the following automation.

- [Prettier](https://prettier.io/), [TypeScript compilation](https://www.typescriptlang.org/) and [eslint](https://eslint.org/) are run on _staged files_ as a pre-commit hook
  - For an optimal developer experience, it's recommended that you configure your editor to run linting & formatting inline.
- [Jest tests](https://jestjs.io/) are run in CI and must pass before the branch can be merged
- PR titles must follow conventional commits specification.
  - We use [`standard-version`](https://github.com/conventional-changelog/standard-version). This auto-generates version numbers and changelog based on commits. We [squash & merge](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squash-and-merge-your-pull-request-commits) PR commits, so the title must be correct.
  - The version number is determined based on the commit prefix -
    **[fix]** indicates a bug fix, **[feat]** indicates a minor bump.
    **[!]** or [BREAKING CHANGES] indicates a major bump. Other
    possibilities include **build**, **ci**, **chore**, **docs**,
    **perf**, **refactor**, **revert**, **style**, **test**. It is
    _strongly_ recommended you familiarize yourself with [conventional commits](https://www.conventionalcommits.org).
  - The **[WIP]** prefix can be used to indicate a pull request is still work in progress. In this case, the PR title is not validated and the pull request lint check remains pending.
