import sgMail from '@sendgrid/mail'
import { NowRequest, NowResponse } from '@vercel/node'
import { generatePDF } from './pdf'
import { MultipleChoices, SingleChoices } from './types'

interface RequestData {
  mentor: string
  nickname: string
  score: number
  yuque: string
  taiga: string
  yapi?: string
  github?: string
  wallet: string
  multipleChoices: MultipleChoices
  singleChoices: SingleChoices
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

async function sendMail(data: RequestData) {
  const { mentor, nickname, score, yuque, taiga, yapi, github, wallet, multipleChoices, singleChoices } = data
  const pdfContent = await generatePDF(nickname, score, multipleChoices, singleChoices)
  const cc = ['utakata9408@163.com', 'yanshuai110@163.com']
  const ccFoundIndex = cc.indexOf(mentor)
  if (ccFoundIndex > -1) {
    cc.splice(ccFoundIndex, 1)
  }
  return sgMail
    .send({
      to: mentor, // Change to your recipient
      // cc uta和前尘
      cc,
      from: 'comunion@comunion.io', // Change to your verified sender
      subject: `Comunion新人考核通过：${nickname}`,
      html: `<p><strong>首先恭喜新人 ${nickname} 通过 Comunion 新人审核，得分${score}，正式加入 Comunion。</strong></p><p>TA的语雀账号是：${yuque}</p><p>TA的Taiga账号是：${taiga}</p><p>TA的yapi账号是：${yapi}</p><p>TA的Github账号是：${github}</p><p>TA的钱包地址是：${wallet}</p><p><strong>请Mentor帮忙开通新人相关账号，更快得接入Comunion。</strong></p>
        `,
      attachments: [
        {
          content: pdfContent,
          filename: `${nickname}的答题报告`,
          type: 'application/pdf',
          disposition: 'attachment'
        }
      ]
    })
    .then(() => pdfContent)
}

export default async function (req: NowRequest, res: NowResponse) {
  if (req.method!.toUpperCase() === 'POST') {
    sendMail(req.body as RequestData)
      .then(pdf => {
        console.log('Email sent')
        res.send({ msg: 'ok', pdf })
      })
      .catch(error => {
        console.error(error)
        res.status(500).send(error)
      })
  } else {
    res.status(405).end()
  }
}

// test
// sendMail({
//   nickname: 'erguotou',
//   mentor: 'erguotou525@gmail.com',
//   score: 78,
//   yuque: 'xxxx',
//   taiga: 'xxxx',
//   wallet: '0xsssss',
//   multipleChoices: [
//     [1, 4],
//     [0, 1, 3],
//     [0],
//     [0, 1, 3],
//     [0, 2, 3],
//     [2],
//     [0,  3],
//     [2, 4],
//     [0, 2, 3],
//     [0, 1],
//     [1, 2],
//     [3],
//     [0, 1, 2, 3],
//     [2]
//   ],
//   singleChoices: [2, 3, 1, 0, 2, 2, 3, 0, 2, 3, 2, 1, 1, 0, 0, 0, 2]
// })
