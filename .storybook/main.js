module.exports = {
  stories: [
    '../docs/**/*.stories.(ts|mdx)',
    '../src/**/*.stories.(ts|mdx)'
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs'
  ]
}