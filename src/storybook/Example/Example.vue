<template>
  <div class="test">
    <div class="sub-test">{{ msg }}</div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  components: { }
})
export default class Example extends Vue {
  @Prop()
  private msg!: string;
}
</script>
<style lang='scss' scoped>
.test {
  .sub-test {
    color: gray;
  }
}
</style>
