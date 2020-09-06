module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          node: '12'
        }
      }
    ],
    '@babel/preset-react'
  ]
};
