import { defineComponent } from 'vue'
import HeaderImage from '../assets/header.jpg'

export default defineComponent({
  name: 'Header',
  props: {},
  setup() {
    return () => (
      <>
        <h1 class="mb-4 text-gray-600 text-center text-2xl">Comunion Economics</h1>
        <img class="max-h-64 w-full object-cover" src={HeaderImage} />
      </>
    )
  }
})
