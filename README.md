# React

A front end library allowing us to accelerate buildout of a user interface (UI).

It is a declarative library, not procedural.

It does so thru the use of components. These are reusable and allow us to load/reload/remove them in a SPA way.

SPA stands for single-page-application. No more pages, everything is a component instead and a component lifecycle dictates when it appears, when it disappears, when it's hydrated with data.

The lifecycle is handled using something called the vDOM or Virtual DOM. No more figuring out how to show/hide stuff!

In order to start a project, we use a bundler called vite. We can download it using npm simply by running the following command:

```bash
npm create vite@latest
```

At this point select the project name, React library, and JavaScript language. Follow the remainder of the prompts, and your React app is live!

### React Structure

- `vite.config.js` - keeps parts of the vite bundler and any associated dependencies
- `package.json` - keeps all of our scripts and dependencies
- `index.html` - entry point to our React UI
- `eslint.config.js` - keeps settings specific to the projects eslint configuration
- `src` - folder which will keep the components of our React application
- `main.jsx` - takes the root div from the index.html and renders the React components to it
- `App.jsx` - topmost React component

React can have two different ways of styling content:
- global, thru the index.css file
- component-based, thru .css files specific to the components themselves.

HINT: Both will render the same, it's used for organization only.

What to tear out of Vite boilerplate for nice clean start:
- all files from `./src/assets` folder
- all files from `./public` folder
- all content from `App.css` and `index.css` stylesheets
- `App.jsx` should contain the following only:

```jsx
import './App.css'

function App() {

  return (
    <>
     
    </>
  )
}

export default App
```