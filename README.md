# Indecision App

# Yarn init

```js
yarn init
```

# Babel

```js
// global
yarn global add babel-cli

// project
yarn add babel-preset-react babel-preset-env
```

run

```js
// --watch 監控，只要一 save 就會自動轉換
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

# Avoid Global Modules

```js
 yarn global remove babel-cli live-server
 npm uninstall -g babel-cli live-server
 yarn add babel-cli live-server
```

run

```js
yarn run server
yarn run build
```

# Webpack

```js
yarn add webpack webpack-cli
```

# Add React not use CDN

```js
yarn add react react-dom
```

# Add babel

```js
// babel-core to use in webpack
// babel-loader allows transpiling JavaScript files using Babel and webpack.
yarn add babel-core babel-loader
```

# Add webpack-dev-server

```js
yarn add webpack-dev-server

```

# Add class properties

```js
yarn add babel-plugin-transform-class-properties
```

# Add scss loader

```js
yarn add style-loader css-loader sass-loader node-sass
```

# Add normalize css

```js
yarn add normalize.css
```

# Run

```
yarn run dev-server
```

- [DOM Elements](https://reactjs.org/docs/dom-elements.html)
- [SyntheticEvent](https://reactjs.org/docs/events.html)
- [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
- [webpack](https://webpack.js.org/)
