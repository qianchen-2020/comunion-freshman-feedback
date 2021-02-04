import { NowRequest, NowResponse } from '@vercel/node'

// [[正确索引, 得分]：如 [[1, 2]] [[[1, 2, 3], 2]]
const multipleAnswers: [number[], number][] = JSON.parse(process.env.MULTIPLE_ANSWERS!)
const singleAnswers: [number, number][] = JSON.parse(process.env.SINGLE_ANSWERS!)

export default function (req: NowRequest, res: NowResponse) {
  if (req.method?.toUpperCase() === 'POST') {
    const { multiple, single } = req.body
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
