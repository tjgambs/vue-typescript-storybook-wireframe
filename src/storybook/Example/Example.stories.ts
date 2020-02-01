import { storiesOf } from '@storybook/vue'
import Example from './Example.vue'

const stories = storiesOf('Example|Example', module)

stories.add('Example', () => ({
  components: { Example },
  template:
    `<Example
      msg="Example Message"
    ></Example>`
}), { decorators: [] })