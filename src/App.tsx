import { defineComponent, ref } from 'vue'
import Collect from './components/Collect'
import Done from './components/Done'
import Header from './components/Header'
import Questions from './components/Questions'
import LearnInfo from './components/LearnInfo'

export default defineComponent({
  name: 'App',
  setup() {
    const learned = ref(false)
    const collectVisible = ref(false)
    const done = ref(false)

    const score = ref(0)

    return () => (
      <>
        <Header />
        {(() => {
          if (done.value) return <Done />
          if (collectVisible.value) return <Collect score={score.value} onDone={() => (done.value = true)} />
          if (learned.value) return <Questions onDone={(_score: number) => {
            score.value = _score
            collectVisible.value = true
          }} />
          return <LearnInfo onDone={() => (learned.value = true)} />
        })()}
      </>
    )
  }
})
