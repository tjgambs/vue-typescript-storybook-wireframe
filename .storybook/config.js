import { configure } from "@storybook/vue"

configure(() => {
  const req = require.context("../src/storybook/", true, /.stories.ts$/)
  req.keys().forEach(filename => req(filename))
}, module)
