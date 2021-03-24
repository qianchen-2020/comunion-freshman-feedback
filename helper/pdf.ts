import PDFDocument = require('pdfkit')
import { Base64Decode } from 'base64-stream'
import { join } from 'path'
import { MultipleChoices, SingleChoices } from '../types'
import { multipleAnswers, singleAnswers } from './answer'
import questions from '../src/data/questions'

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
  return doc
    .text(`${space}${indexChars[index]}: ${isChecked ? '◉' : space} [${isAnswer ? ' ✓ ' : `${space} `}] `, {
      continued: true
    })
    .fillColor(isChecked === isAnswer ? rightColor : wrongColor)
    .text(title)
    .fillColor(contentColor)
}

export function generatePDF(
  name: string,
  score: number,
  multipleChoices: MultipleChoices,
  singleChoices: SingleChoices
): Promise<string> {
  const doc = new PDFDocument()
  const stream = doc.pipe(new Base64Decode())
  doc
    .font(join(__dirname, '../assets/SourceHanSansCN Medium.ttf'))
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
    let content = ''
    stream.on('data', chunk => {
      content += chunk
    })
    stream.on('end', () => resolve(content))
  })
}
