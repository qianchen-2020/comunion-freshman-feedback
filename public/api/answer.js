// [[正确索引, 得分]：如 [1, 2]]
const multipleAnswers = process.env.MULTIPLE_ANSWERS
const singleAnswers = process.env.SINGLE_ANSWERS

module.exports = (req, res) => {
  if (req.method.toUpperCase() === 'POST') {
    const { multiple, single } = req.body
    let score = 0
    for (const [answer, index] of multipleAnswers.entries()) {
      if (answer[0] === multiple[index]) {
        score += answer[1]
      }
    }
    for (const [answer, index] of singleAnswers.entries()) {
      if (answer[0] === single[index]) {
        score += answer[1]
      }
    }
    res.json({ score, passed: score > 80 })
  } else {
    res.send('')
  }
}
