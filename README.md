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

#### 3. Database

The current plan is to separate the web server entirely from the application's data layer, forcing the web server to query HTTP APIs provided by the service layer for database interactions and authentication.

##### Deprecated: PostgreSQL setup

The web application utilizes a Postgres database. For local development, you can easily launch a PostgreSQL instance with Docker Compose.

    cd ./docker/web
    docker compose up postgres

The PostgreSQL server is pre-configured for the user "postgres" with password "password".

### Development notes

- #### Environment variables

Environment variables are specified in `env/.env`. If you need to add an environment variable, there is a three-step process you must follow:

1. Add the variable to `env/.env`
    - If the variable should be exposed to the client, prefix it with `CLIENT__` (defined in vite.config.ts)
    - Never allow secrets to be visible to the client
2. If the value is not secret, add it to `env/.env.template`. If the value is secret, still add the variable to the template file, but leave it unassigned. (e.g. `TWITTER_API_TOKEN=`)
3. Add a type declaration for the environment variable to `src/vite-env.d.ts`

### Contribution guidelines

Testing

- Testable code should be tested.

- Code should be designed to be testable.

Code review

- All contributions must pass code review

- The role of the code reviewer is to ensure code quality does not diminish over time

- Read: [The standard of code review](https://google.github.io/eng-practices/review/reviewer/standard.html)

### Contact

zachary@etelie.com

