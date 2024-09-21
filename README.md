# Building a Single React App with Nx

We're going to start with a default React application and progressively add the core of Nx

## Creating a new React App

Create a new React application that uses Vite with the following command:

```sh
npm create vite react-app -- --template=react-ts
```

Once you have run npm install, set up Git with the following commands:

```sh
git init
git add .
git commit -m "initial commit"
```

## Add Nx

To enable Nx in your repository, run a single command:

```sh
npx nx@latest init
```

Second, the script asks a series of questions to help set up caching for you.

- Which scripts are cacheable? - Choose build and lint
- Does the "build" script create any outputs? - Enter dist
- Does the "lint" script create any outputs? - Enter nothing
- Would you like remote caching to make your build faster? - Choose Skip for now

We'll enable Nx Cloud and set up remote caching later in the tutorial.

Checkout this link: [click Here](https://nx.dev/getting-started/tutorials/react-standalone-tutorial#creating-a-new-react-app)
