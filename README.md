## Description

Users register, log in to their accounts, and post articles.

## Stack

- DB: SQLite
- Schema drawing tool: dbdiagram.io (Using DBML - Database Markup Language)
- ORM: Prisma. Object-Relational Mapping is a library that allows interaction with a database through a programming language (such as JavaScript) without needing to write SQL queries.

## Database analysis

- Functional analysis
- Draw a schema using DBML
- Creating schema in Prisma

## Functional analysis

- User registration: email, name, password, confirm password
- User login: email, password
- User posting: title, content
- Applying JWT for user authentication, integrating Access Token and Refresh Token: Access Token will be stateless, Refresh Token will be stored in the database (stateful)
- One user can have multiple posts
- One user can log in on multiple devices => There will be multiple Refresh Tokens for each user
- From the above requirements, we will have 3 tables: User, Post, RefreshToken
- Table naming convention: I will name tables and fields according to Prisma rules: [Prisma Rules](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#naming-conventions)

## Draw a schema using DBML

Refer to the [DBML](https://dbml.dbdiagram.io/home/) documentation for instructions on writing schemas.

Datatypes in DBML are very flexible; you can type any text you want. Therefore, I usually use Prisma datatypes for easier understanding (instead of SQLite datatypes).

> ⚠️ **Lưu ý:** Prisma will automatically convert the datatypes you declare in the schema to the datatypes of your database according to their rules. To understand SQLite data types in more detail, you can search "sqlite data types" on Google or type "data types in sqlite" on chatgpt. This video avoids overcomplicating things; I'll just demonstrate using Prisma.


Relationships between tables:

A user can have multiple posts: One-to-many relationship
A user can have multiple Refresh Tokens: One-to-many relationship
Each table must have at least one unique field to distinguish between items.

```dbml
Project CRUD {
  database_type: 'SQLite'
  Note: 'Sử dụng Prisma ORM. Columne Type cũng theo Prisma'
}

Table User {
  id        Int      [pk, increment]
  email     String   [unique]
  name      String
  password  String
  createdAt DateTime [default: `now()`]
  updatedAt DateTime [note: '@updatedAt']
}

Table Post {
  id        Int      [pk, increment]
  title     String
  content   String
  authorId  Int
  createdAt DateTime [default: `now()`]
  updatedAt DateTime [note: '@updatedAt']
}

Ref: Post.authorId > User.id [delete: cascade, update: no action]  // When a user is deleted, all of their posts are also deleted.

Table RefreshToken {
  token     String   [unique] 
  userId    Int
  expiresAt DateTime
  createdAt DateTime [default: `now()`]
}

Ref: RefreshToken.userId > User.id  [delete: cascade, update: no action] // When a user is deleted, all of their tokens are also deleted.

