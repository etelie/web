# etelie website
Web application, branding, user experience

### Development environment setup
#### 1. Install Homebrew and add it to your PATH

Homebrew will be used to install necessary utilitites.

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

#### 2. Install AWS CLI tools

The AWS CLI and AWS Vault allow us to connect to AWS from local consoles as well as through an SDK.

    brew install awscli aws-vault


#### 3. Configure AWS Vault

AWS Vault is a conveinent utility which simplifies the use of multiple AWS account roles.

##### Environment setup

Check that aws-vault was installed properly by querying the version

    aws-vault --version

By default, aws-vault will store your credentials in a brand new keychain vault. One side effect of this is that it will prompt you for your vault password fairly frequently. There are a couple of environment variables you can set to make it a smoother process.

    export AWS_VAULT_KEYCHAIN_NAME=login  # fewer keychain password prompts
    export AWS_VAULT_PROMPT=osascript     # nice dialog prompt for entering mfa auth token

##### Configuring credentials

If you have not already been given AWS access keys, send an email to devops@etelie.com to request access.

Initialize your `~/.aws/config` file with the following. (`ETELIE_USERNAME` is your email address before the '@' symbol)

```properties
[default]
region = us-east-1
output = json
cli_pager = json
sso_start_url = https://d-9a6701454a.awsapps.com/start/
sso_region = us-east-2
sso_account_id = 016089980303

[sso-session ETELIE_USERNAME]
sso_start_url = https://d-9a6701454a.awsapps.com/start/
sso_region = us-east-2
sso_registration_scopes = sso:account:access
sso_account_id = 016089980303
```

Note: `region` and `sso_region` are different. Login will fail if `sso_region` is set incorrectly.

Log in to the [AWS Identity Center](https://d-9a6701454a.awsapps.com/start/) with your provided AWS username and password. The Identity Center user interface allows you to view each of the permission sets assigned to your user.  and choose one of them with which to interact with the AWS console. 

For each permission set, add a profile to your `~/.aws/config` using the following template: (`ROLE_NAME` is the name of the permission set (e.g. `ReadOnlyAccess`), `PROFILE_NAME` may be whatever is conveinent for you)

```properties
[profile PROFILE_NAME]
sso_role_name = ROLE_NAME
sso_session = ETELIE_USERNAME
```

You should now be able to log in to the AWS console with each of your allowed roles using AWS Vault:

    aws-vault login PROFILE_NAME

Note: You should not have an `~/.aws/credentials` file.

##### Usage

To test you can use the AWS CLI with a specific profile:

    aws-vault exec PROFILE_NAME -- aws s3 ls

You can also use the traditional method built-in to the AWS CLI

    aws s3 ls --profile PROFILE_NAME

Run a credential server with AWS vault to allow local services using the AWS SDK to use your role permissions as would an EC2 instance.

    aws-vault exec PROFILE_NAME --server
    echo $AWS_VAULT  # environment variable set to your PROFILE_NAME
    ps               # aws-vault forks a separate process to run the server
    exit

##### Useful shell configurations

```sh
### aws-vault
function aws_vault_with_profile() {
    local profile="$1"
    shift
    aws-vault exec ${profile} -- aws "$@"
}

alias awsp='aws_vault_with_profile $1'
alias currentvaultpid='echo $(ps -ef | grep "[a]ws-vault exec" | cut -f3 --delim=" ")'
alias currentvaultkill='kill -9 $(currentvaultpid)'
alias currentvault='echo "$(test -z $AWS_VAULT && echo "*" || echo $AWS_VAULT) $(currentvaultpid)"'
```

##### Troubleshooting

###### `sudo` can't find aws-vault
You may encounter the following error resulting from `sudo` not having access to `aws-vault` in the system `PATH`.

    sudo: aws-vault: command not found
    aws-vault: error: exec: Failed to start credential server: exit status 1

To fix this, edit `/etc/sudoers`, and add the path to the `aws-vault` binary to the `secure_path` variable.

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
- [The standard of code review](https://google.github.io/eng-practices/review/reviewer/standard.html)

### Contact
zachary@etelie.com

