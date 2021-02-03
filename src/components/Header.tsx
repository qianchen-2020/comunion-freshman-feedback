import { defineComponent } from 'vue'
import HeaderImage from '../assets/header.png'

export default defineComponent({
  name: 'Header',
  props: {},
  setup(props, ctx) {
    return () => (
      <div>
        <h1 class="mb-4 text-gray-600 text-center text-2xl">Comunion Economics</h1>
        <img class="max-width-full" src={HeaderImage} />
      </div>
    )
  }
})