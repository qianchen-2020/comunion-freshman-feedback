import { defineComponent, ref } from 'vue'
import Collect from './components/Collect'
import Done from './components/Done'
import Header from './components/Header'
import Questions from './components/Questions'
import LearnInfo from './components/LearnInfo'
import { MultipleChoices, SingleChoices } from '../types'

export default defineComponent({
  name: 'App',
  setup() {
    const learned = ref(false)
    const collectVisible = ref(false)
    const done = ref(false)
    const choices = ref<[MultipleChoices, SingleChoices]>([[], []])

    const score = ref(0)

    return () => (
      <>
        <Header />
        {(() => {
          if (done.value) return <Done />
          if (collectVisible.value)
            return (
              <Collect
                score={score.value}
                multipleChoices={choices.value[0]}
                singleChoices={choices.value[1]}
                onDone={() => (done.value = true)}
              />
            )
          if (learned.value)
            return (
              <Questions
                onDone={(_score: number, _multipleChoices: MultipleChoices, _singleChoices: SingleChoices) => {
                  score.value = _score
                  collectVisible.value = true
                  choices.value[0] = _multipleChoices
                  choices.value[1] = _singleChoices
                }}
              />
            )
          return <LearnInfo onDone={() => (learned.value = true)} />
        })()}
      </>
    )
  }
})
