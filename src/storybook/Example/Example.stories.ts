import Example from './Example.vue'

export default {
  component: Example,
  title: 'Example'
}

const _Example = () => ({
  components: { Example },
  template:
    `<Example
      msg="Example Message"
    ></Example>`
})

export { _Example }
