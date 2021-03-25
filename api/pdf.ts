import PDFDocument = require('pdfkit')
import { join } from 'path'
import { MultipleChoices, SingleChoices } from './types'
import { multipleAnswers, singleAnswers } from './answers'
import questions from './questions'

const gray = '#999'
const headColor = '#000'
const contentColor = '#333'
const rightColor = '#41ae3c'
const wrongColor = '#fb5930'

const indexChars = ['A', 'B', 'C', 'D']

const space = '\u3000'

function printChoice(
  doc: PDFKit.PDFDocument,
  index: number,
  title: string,
  isChecked: boolean,
  isAnswer: boolean
): PDFKit.PDFDocument {
  return (
    doc
      .text(`${space}${indexChars[index]}: ${isChecked ? '◉' : space} [${isAnswer ? ' ✓ ' : `${space} `}] `, {
        continued: true
      })
      // 正确的选择用绿色，错误的选择用红色，没选择的非答案项正常显示
      .fillColor(isChecked === isAnswer ? (isAnswer ? rightColor : contentColor) : wrongColor)
      .text(title)
      .fillColor(contentColor)
  )
}

export function generatePDF(
  name: string,
  score: number,
  multipleChoices: MultipleChoices,
  singleChoices: SingleChoices
): Promise<string> {
  const doc = new PDFDocument()
  doc
    .font(join(__dirname, './SourceHanSansCN Medium.ttf'))
    // 标题
    .fontSize(18)
    .fillColor(headColor)
    .text(`${name}的答题报告`, { align: 'center' })
    // 副标题
    .fontSize(13)
    .fillColor(gray)
    .text(`得分：${score}`, { align: 'right' })
    // 多选题
    .fontSize(14)
    .fillColor(headColor)
    .text('多选题：')
    .fontSize(12)
    .fillColor(contentColor)
  questions.multiple.forEach((question, index) => {
    doc.text(`${index + 1}: ${question.title}`)
    question.choices.forEach((choice, cIndex) => {
      // 是否选了
      const isChecked = multipleChoices[index].includes(cIndex)
      // 是否是正确答案
      const isRightAnswer = multipleAnswers[index][0].includes(cIndex)
      printChoice(doc, cIndex, choice, isChecked, isRightAnswer)
    })
    doc.moveDown()
  })
  // 多选题
  doc.moveDown(2).fontSize(14).fillColor(headColor).text('单选题：').fontSize(12).fillColor(contentColor)
  questions.single.forEach((question, index) => {
    doc.text(`${index + 1}: ${question.title}`)
    question.choices.forEach((choice, cIndex) => {
      // 是否选了
      const isChecked = singleChoices[index] === cIndex
      // 是否是正确答案
      const isRightAnswer = singleAnswers[index][0] === cIndex
      printChoice(doc, cIndex, choice, isChecked, isRightAnswer)
    })
    doc.moveDown()
  })
  doc.end()
  return new Promise(resolve => {
    const buffers: Uint8Array[] = []
    doc.on('data', buffers.push.bind(buffers))
    doc.on('end', () => {
      resolve(Buffer.concat(buffers).toString('base64'))
    })
  })
}
