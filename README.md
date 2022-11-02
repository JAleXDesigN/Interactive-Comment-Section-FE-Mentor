
# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Get started](#get-started)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot
![screencapture-commentsection-jalex-web-app-2022-10-28-19_15_19](https://user-images.githubusercontent.com/108622508/198752892-04d7d79d-8c44-48f9-ac1a-d1c0723e6e91.png)
![screencapture-commentsection-jalex-web-app-2022-10-28-19_15_50](https://user-images.githubusercontent.com/108622508/198752904-dcd94bb6-59a8-4a50-8e4a-7cf5358b7efa.png)
![screencapture-commentsection-jalex-web-app-2022-10-28-19_16_08](https://user-images.githubusercontent.com/108622508/198752922-d6c04cc0-eea1-4fa3-8d03-6b4bcd1ccfbb.png)


![screencapture-commentsection-jalex-web-app-2022-10-28-18_47_05](https://user-images.githubusercontent.com/108622508/198752291-f256e7d6-8bea-43b0-acb1-154227bed80d.png)
![screencapture-commentsection-jalex-web-app-2022-10-28-18_49_02](https://user-images.githubusercontent.com/108622508/198752298-51c50928-fb89-4698-a38a-e2fc477e7220.png)
![screencapture-commentsection-jalex-web-app-2022-10-28-18_49_45](https://user-images.githubusercontent.com/108622508/198752319-988a990b-1474-42b3-a81a-db8df654db71.png)
![screencapture-commentsection-jalex-web-app-2022-10-28-18_50_38](https://user-images.githubusercontent.com/108622508/198752326-990fed5c-4cf6-426f-a171-4d0ca3e86abe.png)

![screencapture-commentsection-jalex-web-app-2022-10-28-19_07_43](https://user-images.githubusercontent.com/108622508/198752498-0e607377-19b7-4f10-a0d8-0ce1bb4d2c77.png)
![screencapture-commentsection-jalex-web-app-2022-10-28-19_08_25](https://user-images.githubusercontent.com/108622508/198752521-d297ea09-9aba-45c9-8112-fd0b1653321e.png)

![screencapture-commentsection-jalex-web-app-2022-10-28-19_11_54](https://user-images.githubusercontent.com/108622508/198752692-0992db75-2297-4baf-821e-7f4a69b223d4.png)
![screencapture-commentsection-jalex-web-app-2022-10-28-19_12_31](https://user-images.githubusercontent.com/108622508/198752719-4955cc29-47b0-447e-b141-66bcc3fc297a.png)
![screencapture-commentsection-jalex-web-app-2022-10-28-19_13_07](https://user-images.githubusercontent.com/108622508/198752748-85971140-c8fd-4ef9-9dbd-41d02d4c1c46.png)

### Links

- Solution URL: [Go solution :arrow_right:](https://your-solution-url.com)
- Live Site URL: [Go :earth_americas:](https://commentsection-jalex.web.app)

## My process

### Built with

- [Vite](https://vitejs.dev/) 
- [React](https://reactjs.org/) - JS library
- [Emotion Styled](https://emotion.sh/docs/styled) - For styles
- [Material UI](https://mui.com/material-ui/) - For Modals & Tooltip
- [Firebase](https://firebase.google.com/) - Authentication, Firestore Database, Storage, Hosting

### What I learned

In this challenge I was able to learn how to implement user authentication in my webapp using Firebase and how to upload files to storage from a form, I also learned how to use validation schemes for forms that include file type inputs.

## Get started

Install dependencies and start development server.

```bash
  npm install
  npm run dev
```
Add the following [environment variables](https://vitejs.dev/guide/env-and-mode.html) to your .env file at the root of the project.

`VITE_API_KEY=XXX_XXX`

`VITE_AUTH_DOMAIN=XXX_XXX`

`VITE_PROJECT_ID=XXX_XXX`

`VITE_STORAGE_BUCKET=XXX_XXX`

`VITE_MESSAGING_SENDER_ID=XXX_XXX`

`VITE_APP_ID=XXX_XXX`

The variables are found in your **firebaseConfig** when creating a project in Firebase.

    
## Author

- Frontend Mentor - [@JalexDesign](https://www.frontendmentor.io/profile/JalexDesign)
- Twitter - [@Jonathan_HM9](https://www.twitter.com/Jonathan_HM9)
