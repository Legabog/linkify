# [Linkify](https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/trash%2Flinkify-logo.png?alt=media&token=21898316-b4eb-4ab7-a091-7559b508006c) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/Legabog/social-network-v2.0.0_legabog/blob/master/LICENSE)

This social network was built by using the UI and style features of [Facebook](https://www.facebook.com/).

* **The main concept** The main concept of this project is to try to create a social network as similar to [Facebook](https://www.facebook.com/) as possible.

* **Practise** The side goal of the project is to improve skills and experiment with the technology stack.

## What’s In This Document

- [Getting started](#-getting-started)
  - [Environment File](#environment-file)
  - [Basic Scripts](#basic-scripts)
- [Stack of technologies](#%EF%B8%8F-stack-of-technologies)
- [Contact](#-contact)
- [License](#memo-license)
- [Powered by](#-powered-by)

## 🚀 Getting started

You can set up the project locally on your machine with these steps:

1. **Clone the "master" branch in the repository.**

   ```shell
   git clone -b master https://github.com/Legabog/social-network-v2.0.0_legabog.git

   ```
2. **Install the packages using the command.**
   ```shell
   npm install
   ```

## **Environment File**

- Create a `.env` file in the root directory of the project. Add these lines with your parameters:

  ```shell

    # Firebase config
    REACT_APP_FIREBASE_API_KEY = "Your Firebase Api key"
    REACT_APP_FIREBASE_AUTH_DOMAIN = "your_project.com"
    REACT_APP_FIREBASE_DATABASE_URL = "https://your_project.firebaseio.com"
    REACT_APP_FIREBASE_PROJECT_ID = "your_project"
    REACT_APP_FIREBASE_STORAGE_BUCKET = "your_project.appspot.com"
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "your_project id"
    REACT_APP_FIREBASE_API_ID = "your_project id"

    # Music-api
    REACT_APP_FIREBASE_MUSIC_API_URL = "https://social-network-backend-legabog.herokuapp.com"

    # Openweathermap.org
    REACT_APP_WEATHER_URL = "https://api.openweathermap.org/data/2.5"
    REACT_APP_WEATHER_API_KEY = "Your openweather.org Api key"

    # Openstreetmap.org
    REACT_APP_ADDRESS_URL = "https://nominatim.openstreetmap.org"

    # Welcome compoenent Privacy Guide slides
    REACT_APP_PRIVACY_GUIDE_SLIDE_1 = "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacy-Guide-Slide_1.jpg?alt=media"
    REACT_APP_PRIVACY_GUIDE_SLIDE_2 = "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacu-Guide-Slide_2.jpg?alt=media"
    REACT_APP_PRIVACY_GUIDE_SLIDE_3 = "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacy-Guide-Slide_3.jpg?alt=media"   
    
    ```
## **Basic Scripts**

List of available scripts:

1. **start** - this script runs your app (using Dev mode). You can open browser and insert `http://localhost:3000/`.

   ```shell
   npm run start

   ```
2. **build** - this script builds your app for production. After a ~minute of waiting you can see this build in `./build` folder.

   ```shell
   npm run build
   ```
3. **test** - this script launches the test runner in the interactive watch mode.

   ```shell
   npm run test

   ```
4. **size** - this script builds your app and analyzes boundle size.

   ```shell
   npm run size
   ```   
5. **flow** - this script runs Flow.

   ```shell
   npm run flow
   ```   
6. **eject** - this CRA is not ejected. Previous version was.

   ```shell
   npm run eject
   ```
## 🛠️ Stack of technologies

## Frontend

* This app was created with **[create react app](https://create-react-app.dev/)**. After was ejected.

* **[React](https://reactjs.org/)**

* **[Redux](https://redux.js.org/)**

* **[Redux-thunk](https://github.com/reduxjs/redux-thunk)**

* Styles was written with simple CSS and **[BEM](https://ru.bem.info/)** naming.

* **[Material-UI](https://material-ui.com/)**

## Backend (Serverless Google Firebase services)

* **[Firebase](https://firebase.google.com/)**

## [Backend of music module](https://social-network-backend-legabog.herokuapp.com/) with using **[Heroku](https://www.heroku.com/)**

* RestFull Api with using **[Express](https://expressjs.com/)**

* **[MongoDB](https://www.mongodb.com/)**

* **[Mongoose](https://mongoosejs.com/)**

## 📧 Contact

If you have any questions for me or you want to discuss something specific about the projects. You are welcome.

My email: **[probringer@mail.ru](mailto:probringer@mail.ru)**

## :memo: License

Licensed under the [MIT License](./LICENSE).

## 💜 Powered by

Weather module powered by **[Openweathermap.org](https://openweathermap.org/)** and **[Openstreetmap.org](https://www.openstreetmap.org/)**.

Thank you 🙏.
   
