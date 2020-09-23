# normalize-webapp.css

> A fork of the popular normalize.css, but with a few more tweaks to make the interface behave more like a native app

## Differences

This fork sports the same features as normalize.css, but with a few add ons such as:
- Disabling selection
- Disabling the blue highlight when tapping
- Disabling the right click on images

## Usage

To install it simply run:

```
npm install --save normalize-webapp.css
```

### Parcel

You can import it into a css file using:
```
@import 'normalize-webapp.css/normalize.css'
```

### Browserify

First you have to install browserify-css
```
npm install --save-dev browserify-css
```

After that you can simply import it into a css file like so:
```
@import 'normalize-webapp.css/normalize.css'
```

### Webpack
This will be a little more complicated. But you can follow this [guide](https://webpack.js.org/loaders/css-loader)