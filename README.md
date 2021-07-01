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

### yarn scripts

Most commonly used during development:

- `yarn dev`: Starts NextJS server in development mode and watches for changed files
- `yarn storybook`: Starts the Storybook component library on port 6006
- `yarn test:watch`: Run Jest tests in watch mode

Other (you won't use these often):

- `yarn format`: Autoformat all code using Prettier
- `yarn lint`: Runs the TypeScript compiler and ESLint and outputs issues
- `yarn test`: Run Jest tests once
- `yarn storybook:build`: Build Storybook to a static site that can be deployed
- `yarn build`: Builds the NextJS production asset bundle
- `yarn start`: Starts the NextJS server in production mode

### Working on an issue

To begin working on an issue, make sure you've assigned yourself to the issue in Github and marked it as "In Progress.".

Once you have an issue to work on, create a new branch off `main` using the naming convention:

`{issue #}-{short description}`

For example: `112-logo-component`

We have a pre-commit hook set up using Husky to run on staged files only. This will run [Prettier](https://prettier.io/), [TypeScript compilation](https://www.typescriptlang.org/) and [eslint](https://eslint.org/) and fail on errors. For an optimal developer experience, it's recommended that you configure your editor to run linting & formatting inline.

When your branch is ready, open a PR against `main`, fill out the description and request code reviews. The code must pass the same linting and formatting checks mentioned above, as well as [Jest tests](https://jestjs.io/) in order to merge.
