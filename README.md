# Etelie web application

Web application, branding, user experience

### Development environment setup

#### 0. Clone this repository

    git clone git@github.com:etelie/web.git

#### 1. Install Node.js

Node.js is the server-side JavaScript engine we use to run the web application. To manage Node versioning, first install the Node Version Manager (`nvm`)

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

Add the `NVM_DIR` environment variable definition to your shell configuration

    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

Install Node version 18.15

    nvm install v18.15

#### 2. Environment variables

Our environment variable file, `.env`, is ignored by version control because it contains secrets. The file `.env.template` is instead checked-in, but it is incomplete. Copy `.env.template` into `.env` and fill the missing values as necessary. Email devops@etelie.com to request necessary secrets.

    cp .env.template .env

### Development notes

- #### Environment variables

Environment variables are specified in `.env`. If you need to add an environment variable, there is a three-step process you must follow:

1. Add the variable to `.env`
    - If the variable should be exposed to the client, prefix it with `NEXT_PUBLIC_`
    - Never allow secrets to be visible to the client
2. If the value is not secret, add it to `.env.template`. If the value is secret, still add the variable to the template file, but leave it unassigned. (e.g. `TWITTER_API_TOKEN=`)
3. Add a Zod type validator to `src/env.mjs`

Client environment variables are built into the Docker image as build arguments. Server variables are injected at runtime as regular environment variables unto the container.

### Contribution guidelines

Tests

- Unit testing is an essential component of the software development lifecycle

- Good code is maintainable code

- Superfluous tests extend build times unnecessarily

Code review

- All contributions must pass code review

- The role of the code reviewer is to ensure code quality does not diminish over time

- Read: [The standard of code review](https://google.github.io/eng-practices/review/reviewer/standard.html)

### Contact

zachary@etelie.com

