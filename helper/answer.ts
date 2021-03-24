import { MultipleAnswers, SingleAnswers } from '../types'

// [[正确索引, 得分]：如 [[1, 2]] [[[1, 2, 3], 2]]
export const multipleAnswers: MultipleAnswers = JSON.parse(process.env.MULTIPLE_ANSWERS!)
export const singleAnswers: SingleAnswers = JSON.parse(process.env.SINGLE_ANSWERS!)
