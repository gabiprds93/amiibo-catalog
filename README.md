# About Project

In this web application, you can find all Amiibos figures by [Nintendo](https://www.nintendo.com/es_LA/amiibo/).

Only on the Home page, you can be filtered by Type and Character, also can be seen all Amiibo Series as categories in Categories Menu and then go to a Categories page. You can search by name in the Search Bar and go to the Results page for a more specific search. In each Amiibo item, there is a heart to add it to favorites, you can see the complete list on the Favorites page. You can also sort the Amiibos in ascending or descending alphabetical order. And last but not least there is a Switch to change from light mode to dark mode and vice versa. Don't just judge me by the colors, please, I did the best I can. :relieved::blush:

# Tech stack

This is a [ReactJs](https://reactjs.org/) project bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app) and [TypeScript](https://github.com/Microsoft/TypeScript).

The following libraries were also used:
- [Axios](https://axios-http.com/) to consume API.
- [React query](https://react-query.tanstack.com/) to data synchronozation.
- [React responsive](https://github.com/contra/react-responsive) to handle media queries.
- [React router DOM](https://reactrouter.com/) for the routing of the pages.
- [React togle](https://github.com/aaronshaf/react-toggle) for switch component.

[Context API](https://reactjs.org/docs/context.html) was used as state manager.

The style preprocessor [Stylus](https://github.com/stylus/stylus) was also used.

[AmiiboAPI](https://www.amiiboapi.com/) was used to obtain the Amiibos data.

# How to install and run the project

- First, you need to copy the URL to clone the project.
  
- Second, in a folder on your computer, you have to open the command console and run the following command and paste the URL you copied:
  
  `git clone [url]`

- Then open the project in your favorite IDE and the command console in that root.

- The next step is to install the dependencies with the following command:
  
   `npm install`

- Finally, to get the project up you have to run the following command:

  `npm start`

You can test the web application in this [link](https://amiibo-catalog.herokuapp.com/) hosted on [Heroku](https://www.heroku.com/).

####Enjoy it! :smile:

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
