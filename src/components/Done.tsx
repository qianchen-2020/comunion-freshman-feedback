import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Done',
  props: {},
  setup(props, ctx) {
    return () => <div>欢迎您加入Comunion！</div>
  }
})