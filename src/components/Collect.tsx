import { defineComponent, reactive } from 'vue'
import mentors from '../data/mentors'
import { post } from '../utils/request'

export default defineComponent({
  name: 'CollectForm',
  props: {
    onDone: Function
  },
  setup(props) {
    const form = reactive({
      nickname: '',
      mentor: '',
      shimo: '',
      taiga: '',
      yapi: '',
      github: '',
      wallet: ''
    })

    const isTechMentor = form.mentor ? mentors.find(mentor => mentor[0] === form.mentor)?.[1] ?? false : false

    async function onSubmit(e: Event) {
      e.preventDefault()
      if (await post('/api/info', form)) {
        props.onDone?.()
      } else {
        alert('信息提交失败')
      }
    }

    return () => (
      <form onSubmit={onSubmit}>
        <label class="block">
          <span class="text-gray-700">您的昵称</span>
          <input type="text" required class="rounded mt-1 block w-full" v-model={form.nickname} />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">您的Mentor</span>
          <select required class="rounded mt-1 block w-full" v-model={form.mentor}>
            {mentors.map(name => (
              <option key={name[0]}>{name[0]}</option>
            ))}
          </select>
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">石墨文档（文档共享）账号</span>
          <input type="text" required class="rounded mt-1 block w-full" v-model={form.shimo} />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">Taiga（任务/Bug管理）账号</span>
          <input type="text" required class="rounded mt-1 block w-full" v-model={form.taiga} />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">Yapi（API文档管理）账号</span>
          <input
            type="email"
            required={isTechMentor}
            class="rounded mt-1 block w-full"
            v-model={form.yapi}
            placeholder="xxx@xxx.xx"
          />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">Github（代码仓库管理）账号</span>
          <input type="text" required={isTechMentor} class="rounded mt-1 block w-full" v-model={form.github} />
        </label>
        <label class="mt-4 block">
          <span class="text-gray-700">以太坊钱包地址（用于管理虚拟币管理）</span>
          <input type="text" required class="rounded mt-1 block w-full" v-model={form.wallet} placeholder="0x..." />
        </label>
        <div class="mt-4 text-right">
          <button class="btn" type="submit">
            🧐&nbsp;&nbsp;填写完毕，马上提交
          </button>
        </div>
      </form>
    )
  }
})
