# Task will done during 04-10 February
***I have to finish my previous project, thanks for your patience***

**Task description:**

The goal of the task is to implement SPA application with just one view. You should use the below API endpoint to display the paginated list of products. At the top of the view, there should be text input, which allows the user to filter results by id. The input should accept only numbers, other signs should not even appear. Below this input user should see a table displaying the following items’ properties: id, name, and year. Additionally, the background colour of each row should be taken from the colour property. After clicking on a row a modal should be displayed and should present all item data. The table should display 5 items per page. Under the table, there should be a pagination component, which allows switching between pages with “next” and “previous” arrows.

Please remember about handling situations when API endpoint returns a 4XX or 5XX error. In such a case the user should be informed about the error.

Apart from React, the technology stack totally ups to you, the same applies to styling. As a result of the task, we expect a link to a repository on GitHub, GitLab, or bitbucket. Your app should start after running npm install & npm start.

Extra requirement (optional):

Please reflect pagination and filtering in the address URL, so users can copy and share the URL with each other.

API endpoint

https://reqres.in/api/products
Requirements

React
Typescript
git
github/gitlab/bitbucket
Nice to have

Unit tests
Redux/Context API or other state management library
Remarks:

- filtering and pagination should be performed within the API, not on the frontend side

- take into account that API returns 12 items in total

- after changing the page it should be possible to copy-paste web browser URL to another tab, where this exact page should be displayed on the start

Tips

per_page field lets you set the number of items per page
page field lets you set the page number of results
id field lets you filter results by id
Proposed styling library(contains also icons): https://mui.com/



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
