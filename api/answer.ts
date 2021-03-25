import { NowRequest, NowResponse } from '@vercel/node'
import { MultipleChoices, SingleChoices } from './types'
import { multipleAnswers, singleAnswers } from './answers'

export default function (req: NowRequest, res: NowResponse) {
  if (req.method!.toUpperCase() === 'POST') {
    const { multiple, single } = req.body as { multiple: MultipleChoices; single: SingleChoices }
    let score = 0
    for (const [index, answer] of multipleAnswers.entries()) {
      if (answer[0].length === multiple[index].length && answer[0].every(item => multiple[index].indexOf(item) > -1)) {
        score += answer[1]
      }
    }
    for (const [index, answer] of singleAnswers.entries()) {
      if (answer[0] === single[index]) {
        score += answer[1]
      }
    }
    res.json({ score, passed: score > 70 })
  } else {
    res.status(405).end()
  }
}
