import { defineComponent, reactive, ref } from 'vue'
import useScrollTop from '../hooks/useScrollTop'
// import mentors from '../data/mentors'
import { post } from '../utils/request'
import Button from './Button'

export default defineComponent({
  name: 'CollectForm',
  props: {
    score: Number,
    onDone: Function
  },
  setup(props) {
    useScrollTop()
    const form = reactive({
      nickname: '',
      mentor: '',
      shimo: '',
      taiga: '',
      yapi: '',
      github: '',
      wallet: ''
    })
    const loading = ref(false)

    // const isTechMentor = form.mentor ? mentors.find(mentor => mentor[0] === form.mentor)?.[1] ?? false : false

    async function onSubmit(e: Event) {
      e.preventDefault()
      loading.value = true
      const resp = await post('/api/collect', { ...form, score: props.score })
      loading.value = false
      if (resp) {
        props.onDone?.()
      }
    }

    return () => (
      <form onSubmit={onSubmit}>
        <label class="block">
          <span class="text-gray-700">你的昵称</span>
          <input type="text" required class="rounded mt-1 block w-full" v-model={form.nickname} />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">你的Mentor</span>
          {/* <select required class="rounded mt-1 block w-full" v-model={form.mentor}>
            {mentors.map(name => (
              <option key={name[0]}>{name[0]}</option>
            ))}
          </select> */}
          <input
            type="email"
            required
            class="rounded mt-1 block w-full"
            v-model={form.mentor}
            placeholder="xxx@xxx.xx"
          />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">
            石墨文档（文档共享）账号，
            <a target="_blank" href="https://shimo.im/desktop">
              前往注册
            </a>
          </span>
          <input type="text" required class="rounded mt-1 block w-full" v-model={form.shimo} />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">
            Taiga（任务/Bug管理）账号，
            <a target="_blank" href="https://taiga.comunion.io/">
              前往注册
            </a>
          </span>
          <input type="text" required class="rounded mt-1 block w-full" v-model={form.taiga} />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">
            Yapi（API文档管理）账号，技术必填，
            <a target="_blank" href="https://yapi.comunion.io/">
              前往注册
            </a>
          </span>
          <input
            type="email"
            required={false}
            class="rounded mt-1 block w-full"
            v-model={form.yapi}
            placeholder="xxx@xxx.xx"
          />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">
            Github（代码管理）账号，技术必填，
            <a target="_blank" href="http://github.com/">
              前往注册
            </a>
          </span>
          <input type="text" required={false} class="rounded mt-1 block w-full" v-model={form.github} />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">
            以太坊钱包地址（用于管理虚拟币管理，建议使用
            <a target="_blank" href="https://token.im/">
              imToken
            </a>
            管理）
          </span>
          <input type="text" required class="rounded mt-1 block w-full" v-model={form.wallet} placeholder="0x..." />
        </label>
        <div class="mt-4 text-right">
          <Button loading={loading.value} class="btn" type="submit">
            🧐&nbsp;&nbsp;填写完毕，马上提交
          </Button>
        </div>
      </form>
    )
  }
})
