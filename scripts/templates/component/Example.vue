<template>
  <div>
    {{ exampleProp }}
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

/**
 * __DESCRIPTION
 */
@Component({
  components: { }
})
export default class __COMPONENT extends Vue {
  /**
   * Example Prop explanation
   */
  @Prop({ default: 'Example' })
  private exampleProp!: string
}
</script>
<style lang='scss' scoped>

</style>