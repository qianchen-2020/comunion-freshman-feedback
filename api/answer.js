// [[正确索引, 得分]：如 [[1, 2]] [[[1, 2, 3], 2]]
const multipleAnswers = JSON.parse(process.env.MULTIPLE_ANSWERS)
const singleAnswers = JSON.parse(process.env.SINGLE_ANSWERS)

module.exports = (req, res) => {
  if (req.method.toUpperCase() === 'POST') {
    console.log(`multipleAnswers`, multipleAnswers, `singleAnswers`, singleAnswers)
    console.log(JSON.stringify(req.body))
    const { multiple, single } = req.body
    let score = 0
    for (const [index, answer] of multipleAnswers.entries()) {
      console.log(`multiple ${answer} ${multiple[index]}`)
      if (answer[0].length === multiple[index].length && answer[0].every(item => multiple[index].indexOf(item) > -1)) {
        score += answer[1]
        console.log(`multiple +score ${score} ${answer[1]}`)
      }
    }
    for (const [index, answer] of singleAnswers.entries()) {
      console.log(`single ${answer} ${single[index]}`)
      if (answer[0] === single[index]) {
        score += answer[1]
        console.log(`single +score ${score} ${answer[1]}`)
      }
    }
    res.json({ score, passed: score > 70 })
  } else {
    res.send('')
  }
}
