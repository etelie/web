# Etelie web application

Web application, branding, user experience

### Development environment setup

1. Install Node.js

Install `nvm`

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" \
        [ -s "$NVM_DIR/nvm.sh" ] && \
        \. "$NVM_DIR/nvm.sh"

Install Node.js (version 19.7.x)

    nvm install 19.7
    nvm use 19.7

2. Install project dependencies

Dependencies for Node projects are defined in `package.json`, with versioning configured in `package-lock.json`.

    npm install

3. Environment variables

The application uses `.env` to look up environment configurations. Since `.env` may contain secrets, it is ignored by version control. Instead, `.env.template` is checked in to Git, and you must manually copy `.env.template` into `.env`, and subsequently fill the necessary secrets. Send an email to devops@etelie.com to request needed secrets.

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

### Deployment process

Coming soon

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

