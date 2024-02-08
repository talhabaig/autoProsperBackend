

# What are the Pre-requisites?

Binaries      | Version
------------- | -------------
NodeJS        | >= LTS
NPM           | >= LTS
PostgreSQL    | >= 15
ts-node-dev   | >= 1.0.0

# What is the Structure?

```bash
├── config
│   └── index.sample.ts
├── database
│   ├── migrations
│   ├── seeders
│   └── snapshots
├── src
│   ├── controllers
│   │   ├── app.ts
│   │   ├── auth.ts
│   │   ├── index.ts
│   │   └── user.ts
│   ├── db_pool
│   │   ├── auto_schema.ts
│   │   ├── helper.ts
│   │   ├── pg_pool.ts
│   │   └── schema.ts
│   ├── events
│   │   ├── listeners
│   │   │   └── auth_listener.ts
│   │   └── index.ts
│   ├── helpers
│   │   ├── exception_wrapper.ts
│   │   ├── file.ts
│   │   ├── index.ts
│   │   ├── notfound_handler.ts
│   │   ├── random_string.ts
│   │   └── upload.ts
│   ├── middlewares
│   │   ├── check_auth.ts
│   │   └── schema.ts
│   ├── models
│   │   ├── auth.ts
│   │   ├── common.ts
│   │   ├── index.ts
│   │   ├── log.ts
│   │   ├── user_login.ts
│   │   └── user.ts
│   ├── providers
│   │   ├── cors.ts
│   │   ├── logger.ts
│   │   └── version.ts
│   ├── routes
│   │   ├── app
│   │   │   ├── index.ts
│   │   │   └── schema.ts
│   │   ├── auth
│   │   │   ├── index.ts
│   │   │   └── schema.ts
│   │   ├── user
│   │   │   ├── index.ts
│   │   │   └── schema.ts
│   │   └── index.ts
│   ├── services
│   │   ├── common_service.ts
│   │   ├── email_service.ts
│   │   ├── index.ts
│   │   ├── log_service.ts
│   │   └── user_service.ts
│   ├── swagger
│   │   ├── backend_api.yaml
│   │   └── index.ts
│   ├── typings
│   │   ├── interface.ts
│   │   └── types.ts
│   ├── validators
│   │   ├── auth.ts
│   │   └── user.ts
│   ├── extractOpenAPI.ts
│   ├── index.ts
├── .env
├── migration.js
├── package.json
├── prettier.config.js
├── tsconfig.json
├── .gitignore
└── README.md
```

# How to SetUp & Install?

```sh
# Clone the repository
git clone 

# Create the config file from the sample-config file
cp config/index.sample.ts config/index.ts;

# Add your database details in env
 DB_USER: 'db_username',
 DB_PASSWORD: 'db_password',
 DB_NAME: 'db_dbname',
 DB_HOST: 'db_host',
 DB_LOCALHOST: true/false,

# Install NPM dependencies
npm install;

```

# How to SetUp Database?

1. You should have **"postgres"** user available in your postgres eco-system.
2. **Create a database** with a name of your choice & assign **"postgres"** user to the database.
3. Now, you should **run the initial seed file** into your DB's Query Tool.
4. Define your migrations inside /database/migrations with format **yyyymmdd-001_(schemas/data/functions)_description.sql**

# Maintaining Database

To ensure consitency of database across every system that uses this boilerplate code we use in house logic and auto update functions to maintain our migrations and snapshots.

 ### How Migration works

- Create a new file inside `database/migrations` folder with .sql extension defining any SQL operation (UPDATE/CREATE/DROP/INSERT).
- New file name should follow convention like **yyyymmdd-001_(schemas/data/functions)_description.sql**. *schemas* - any changes in database tables or design, *data* - new data added to tables and *functions* - operations on sql functions.
- Every time application runs it checks for any newly added sql scripts inside migrations folder and add them to the database with respective statuses pending, successful and failed.
- **Pending** - Script execution has not occurred yet, **Successful** - Script execution completed without error and **Failed** - Script execution was unsuccessful.

 ### How to create new Migration File

```sh
new-migration
```
### How Snapshot works

- Inside `database/snapshots` folder you fill find all the tables with defined structure and views that are there in your connected database.
- Every time application runs the snapshots are updated with any new changes to the database design.
- If you are working in a large dev-team having knowledge of any new changes can help reduce errors.

# Explanation for custom postgres functions

Go to file [PostgresFunctions.md](/docs/PostgresFunctions.md) for detailed explanation of various functions we have used.

# Use of inheritance

Go to file [Inheritance.md](/docs/Inheritance.md) for the explanation on use of inheritance.

# Pre-defined routes

| Auth                      | User             | App           |
| ------------------------- | -----------------| ------------- |
|`/auth/login`              |`/user`           | `/app/version`|
|`/auth/forgot-password`    |`/user/add`       |               |
|`/auth/change-password`    |`/user/roles`     |               |
|`/auth/whoami`             |`/user/{id_user}` |               |
|`auth/refresh-token`       |`/user/{id_user}` |               |

# How to Run?

### Development Environment

```sh
npm run dev;
```

# How to access the API Documentation?

- Try accessing the http://`<HOST>:<PORT>`/swagger
- Note: Remember to replace the "HOST" & "IP" with your HOST & PORT number.

# Deploying the Project on AWS EC2
Follow these steps to deploy the project on an AWS EC2 instance:

1. Launch an EC2 Instance:
 - Log in to the AWS Management Console.
 - Navigate to the EC2 service.
 - Launch a new EC2 instance based on your requirements, ensuring it has the necessary specifications for running the project.

2. Connect to the EC2 Instance:
 - Once the instance is running, connect to it using SSH. Use the public IP address and the key pair associated with your instance.
```sh 
ssh -i [your-key-pair.pem] ec2-user@[your-ec2-instance-ip]
```

3. Clone the Repository:
 - Inside the EC2 instance, clone the project repository.
```sh
git clone [repository_url]
cd [project_directory]
```

4. Update Environment Variables:
 - Open the .env file and update the database details and any other necessary configurations.
```sh
nano .env
```

5. Install Dependencies:
- Install the project dependencies using npm.
```sh
npm install
```

6. Start the Application with PM2:
- Install PM2 globally if not already installed.
```sh
npm install -g pm2
```

7. Start the application using PM2.
```sh
pm2 start "npm run dev"
```