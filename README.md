# Stackoverflow

[![Version](https://img.shields.io/static/v1?label=version&message=1.0.0&color=blue)](https://www.npmjs.com/package/server/v/1.0.0)
[![NODE](https://img.shields.io/static/v1?label=node&message=16.5.0&color=red)](https://nodejs.org/es/blog/release/v18.16.0/)
[![BCRYPTJS](https://img.shields.io/static/v1?label=bcryptjs&message=2.4.3&color=yellow)](https://www.npmjs.com/package/bcryptjs)
[![CORS](https://img.shields.io/static/v1?label=cors&message=2.8.5&color=green)](https://www.npmjs.com/package/cors/v/2.8.5)
[![DOTENV](https://img.shields.io/static/v1?label=dotenv&message=16.3.1&color=orange)](https://www.npmjs.com/package/dotenv)
[![EXPRESS](https://img.shields.io/static/v1?label=express&message=4.18.2&color=violet)](https://www.npmjs.com/package/express)
[![JSONWEBTOKEN](https://img.shields.io/static/v1?label=jsonewbtoken&message=9.0.1&color=yellow)](https://www.npmjs.com/package/jsonwebtoken)
[![MONGOOSE](https://img.shields.io/static/v1?label=mongoose&message=7.4.5&color=purple)](https://mongoosejs.com/)
[![NODEMON](https://img.shields.io/static/v1?label=nodemon&message=2.0.22&color=brown)](https://www.npmjs.com/package/nodemon)

### [🌐 Website](https://stack-overflow-clone-mern.netlify.app)

# StackOverflow-Clone

A new stack overflow clone with all the features including signup, login, ask question, post answer, user tags, question tags, users list , users profile, delete questions, delete answers, share questions, share answers, upvote, downvote, overflow blog and others. Users can post their queries and also answer others queries. It also shows the time when question or otherwise answer is posted.

## My Tech Stack (MERN)

#### Front-end

- Front-end Framework: `React.js (with Redux)`
- Styling: `CSS`

#### Back-end

- For handling index requests: `Node.js with Express.js Framework`
- As Database: `Mongodb with Atlas`
- API tested using: `POSTMAN`

## Guidelines to setup

Hereby listed manual way to setup:-

### Manual Setup

1. Open your local CLI -

   ```
   mkdir Stackoverflow-Clone
   cd Stackoverflow-Clone
   ```

2. Setup the code -

   - Create a `.env` file and the format should be as given in `.env.example`.
   - Clone the code-

     ```
     git clone https://github.com/rohitkumargupta348/Stackoverflow.git
     cd Stackoverflow-Clone
     ```

3. Setup the backend code -

    - Create a `.env` file and the format should be as given in `.env.example`.
    - Goto server directory and install the modules-
     
     ```
     cd server

     npm install
     ```
     - Open your Mongoose Client -

     ```
     CREATE DATABASE stack_overflow;
     ```
     NOTE: Don't forget to keep the database name same in the `.env` and here.

   - Run the index server `npm start`.

3. Open a new CLI terminal and goto the root `Stackoverflow-Clone` folder you created in the first step.
4. Setup the Frontend code -

   - Goto client directory and install the modules-

     ```
     cd client

     npm install
     ```

   - Run the client index `npm start`.

## CONTRIBUTOR
 
### Rohit Kumar Gupta | [📝 LinkedIn](https://www.linkedin.com/in/rohit-kumar-gupta-7b168b201/)
