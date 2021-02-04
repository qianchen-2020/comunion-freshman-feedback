import { defineComponent, reactive, ref } from 'vue'
import questions from '../data/questions'
import useScrollTop from '../hooks/useScrollTop'
import { post } from '../utils/request'
import Button from './Button'

const choiceChars = ['A', 'B', 'C', 'D']

export default defineComponent({
  name: 'Questions',
  props: {
    onDone: Function
  },
  setup(props) {
    useScrollTop()
    const multipleChoices = reactive(Array<number[]>(questions.multiple.length).fill([]))
    const singleChoices = reactive(Array<number | null>(questions.single.length).fill(null))

    const loading = ref(false)

    async function onFinish(e: Event) {
      e.preventDefault()
      const multipleEmpty = multipleChoices.filter(choice => !choice.length).length
      const singleEmpty = singleChoices.filter(choice => !choice).length
      if (multipleEmpty || singleEmpty) {
        const confirmed = window.confirm(
          `你还有${multipleEmpty ? `${multipleEmpty}道多选题` : ''}${
            singleEmpty ? `${singleEmpty}道单选题` : ''
          }没选，将会影响得分，确认要继续提交么？`
        )
        if (!confirmed) return
      }
      if (window.confirm('确认不再检查一遍了么？')) {
        loading.value = true
        const resp = await post('/api/answer', { multiple: multipleChoices, single: singleChoices })
        loading.value = false
        if (resp) {
          const { score, passed } = resp
          alert((passed ? `😃 恭喜通过新人考核!` : '🤭 抱歉，你并没有通过新人考核！') + `得分：${score}`)
          passed && props.onDone?.(score)
        }
      }
    }

    return () => (
      <div class="mt-4">
        <h3>新人答题：</h3>
        <form onSubmit={onFinish}>
          <p class="mb-2 p-2 text-lg bg-blue-300 text-white border-l-2 border-blue-500">多选题</p>
          {questions.multiple.map((question, index) => (
            <div key={index} class="mb-4">
              <p class="text-base">
                ✍🏻&nbsp;&nbsp;{index + 1}. {question.title}
              </p>
              <div class="mt-2">
                {question.choices.map((choice, cIndex) => (
                  <label class="flex mb-1">
                    <input type="checkbox" class="mt-1 text-blue-500" value={cIndex} v-model={multipleChoices[index]} />
                    <span class="ml-2 text-base text-gray-600">
                      {choiceChars[cIndex]}. {choice}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <p class="mb-2 p-2 text-lg bg-blue-300 text-white border-l-2 border-blue-500">单选题</p>
          {questions.single.map((question, index) => (
            <div key={index} class="mb-4">
              <p class="text-base">
                ✍🏻&nbsp;&nbsp;{index + 1}. {question.title}
              </p>
              <div class="mt-2">
                {question.choices.map((choice, cIndex) => (
                  <label class="flex mb-1">
                    <input type="radio" class="mt-1 text-blue-500" value={cIndex} v-model={singleChoices[index]} />
                    <span class="ml-2 text-base text-gray-600">
                      {choiceChars[cIndex]}. {choice}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div class="mt-4 text-right">
            <Button loading={loading.value} type="submit">
              🧐&nbsp;&nbsp;填写完毕，提交答卷
            </Button>
          </div>
        </form>
      </div>
    )
  }
})
