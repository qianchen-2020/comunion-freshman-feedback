import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Done',
  props: {},
  setup() {
    return () => <div class="py-24 text-center text-2xl text-blue-500">欢迎您加入Comunion！</div>
  }
})
