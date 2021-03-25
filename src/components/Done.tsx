import { defineComponent } from 'vue'
import Button from './Button'

export default defineComponent({
  name: 'Done',
  props: {
    pdf: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const showPDF = () => {
      const byteCharacters = atob(props.pdf)
      const byteNumbers = new Array(byteCharacters.length)
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)
      const blob = new Blob([byteArray], { type: 'application/pdf' })
      window.open(URL.createObjectURL(blob))
    }
    return () => (
      <div class="py-24">
        <p class="text-2xl text-blue-500 text-center">欢迎你加入Comunion！</p>
        <p class="mt-4">我们将会附带你填写的消息给你的 Mentor 发送邮件。</p>
        <p class="mt-1">你可以主动联系你的 Mentor 或者等待 Mentor 为你开通相关帐号。</p>
        <p class="mt-2">
          <a href="https://bbs.comunion.io/d/359-comunion/11">不要忘了去提交一份申请书哦！</a>
        </p>
        <p class="mt-4 italic text-sm">最后希望你能在 Comunion 有所收获、有所成就。</p>
        <div class="mt-12 text-center">
          <Button onClick={showPDF}>查看答题报告</Button>
        </div>
      </div>
    )
  }
})
