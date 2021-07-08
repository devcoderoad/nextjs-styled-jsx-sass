# Next.JS app with Styled-jsx with SASS

> This is a React app project using NextJS with Style-jsx and SASS

### Add requirement for NextJS with styled-jsx Sass

`yarn add styled-jsx-plugin-sass @zeit/next-sass redux react-redux`

> The requirement on using Styled-jsx and SCSS in NextJS app in package.json

```
{
  "name": "nexjs-styled-jsx-sass",
  "version": "1.0.0",
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "@zeit/next-sass": "^1.0.1",
    "cssnano": "^4.1.10",
    "next": "latest",
    "next-redux-wrapper": "^5.0.0",
    "node-sass": "4.5.3",
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-redux": "^7.2.0",
    "redux": "^4.0.5",
    "styled-jsx-plugin-sass": "0.2.0"
  },
  "browserslist": [
    ">0.3%",
    "not ie 11",
    "not dead",
    "not op_mini all"
  ],
  "license": "ISC"
}
```

### Add next.config.js in the root project

```
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2
  }
});
```

### Add postcss.config.js in the root project for autoprefixer and minified css assets

```
module.exports = {
  plugins: [
    // PostCSS Config
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }),
    require("autoprefixer")({
      flexbox: "no-2009",
      stage: 3,
      overrideBrowserslist: [
        "last 3 version",
        "Chrome >= 35",
        "Firefox >= 38",
        "Edge >= 10",
        "Explorer >= 10",
        "ie >= 10",
        "iOS >= 8",
        "Safari >= 8",
        "Android 2.3",
        "Android >= 4",
        "Opera >= 12"
      ]
    })
  ]
};

```

> postcss autoprefixer, cssnano was required for adding browser css prefix and minified global css in our project.

### Add .babelrc for styled-jsx-scss plugins

```
{
  "presets": [
    [
      "next/babel",
      {
        "styled-jsx": {
          "plugins": ["styled-jsx-plugin-sass"]
        }
      }
    ]
  ]
}
```

### Run your project

`$ yarn dev`
