# Indecision App

# React CDN

```js
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

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

```
 yarn global remove babel-cli live-server
 npm uninstall -g babel-cli live-server
 yarn add babel-cli live-server
```

run

```
yarn run server
yarn run build
```

- [DOM Elements](https://reactjs.org/docs/dom-elements.html)
- [SyntheticEvent](https://reactjs.org/docs/events.html)
- [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
