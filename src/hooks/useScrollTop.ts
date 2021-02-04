import { nextTick, onMounted } from 'vue'
import { scrollToTop } from '../utils/dom'

export default function () {
  onMounted(() => {
    nextTick(() => {
      scrollToTop()
    })
  })
}
