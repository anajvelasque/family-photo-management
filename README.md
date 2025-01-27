<<<<<<< HEAD
# Full-stack coding assignment

Develop a basic family photo management application, where a family member can view photos in albums of another family member, while being able to create, update, and delete their own photos and albums.

## Assignment Requirements

### Public APIs

- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/users/{userId}/albums
- https://jsonplaceholder.typicode.com/photos

Public API guide https://jsonplaceholder.typicode.com/guide/

Public API note
**JSONPlaceholder doesn’t persist changes, so we’d expect to see how you would implement the API, but you may keep the changes in state. **

Think of it as optimistic updates!

## Setup and Configuration

- Create a new React application using Typescript
- Create a Backend for a Frontend using Typescript that maps the API response
- Configure the project with a linter and a code formatter.
- We do not expect anything hosted on the cloud, localhost is fine

## User Interface

Design a simple and responsive UI with the following components:

- Add Photo: Allows users to upload a photo, assign it to an existing or new album, and add a title or description.
- (page) My users: Display a list of users (show their username and email) which opens a page to the albums of that user, when clicked on.
- (page) My user albums: Display a list of photo albums for a user (show their username and email) which opens a page to the photos of that album, when clicked on.
- (page) My album photos: Display a list of photos for a users album (show their username).

## Functionality

1. CRUD photos and albums
   1. Read other users photos & albums
   2. Create, update, and delete current user’s photo’s & albums
2. I should be able to open the albums page for a user.
   1. If I open my own album page I want to be able to edit/delete my photos and albums.

### TypeScript

- Ensure that all components are typed correctly.
- Use interfaces and types to define the structure of the API response and component props.

### Testing

- **Write at least 1 unit test**

### Best Practices

- Write clean, modular, and reusable code.
- Ensure the application is performant and handles API errors gracefully.

### Bonus (Optional):

- Follow best practices for accessibility (e.g., semantic HTML, aria labels).
- Write unit test(s) for any business logic created in the BE for a FE.

### Deliverables:

- A GitHub repository containing the code for the project.
- A README.md file with instructions on how to run the project locally.
- (Optional) A live demo link if the application is deployed.

### Evaluation Criteria:

- Code quality and organization
- Front-end & Backend libraries used for the assignment.
- Responsiveness
- Effective use of testing
- Bonus features (if implemented)
=======
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
>>>>>>> master
