import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Done',
  props: {},
  setup() {
    return () => (
      <div class="py-24">
        <p class="text-2xl text-blue-500 text-center">欢迎你加入Comunion！</p>
        <p class="mt-4">我们将会附带你填写的消息给你的 Mentor 发送邮件。</p>
        <p class="mt-1">你可以主动联系你的 Mentor 或者等待 Mentor 为你开通相关帐号。</p>
        <p class="mt-4 italic text-sm">最后希望你能在 Comunion 有所收获、有所成就。</p>
      </div>
    )
  }
})
