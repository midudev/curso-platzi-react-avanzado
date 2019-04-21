require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['babel-plugin-styled-components']
})
require('./server')
