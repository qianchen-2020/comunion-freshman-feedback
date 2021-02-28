import sgMail from '@sendgrid/mail'
import { NowRequest, NowResponse } from '@vercel/node'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export default function (req: NowRequest, res: NowResponse) {
  if (req.method!.toUpperCase() === 'POST') {
    const { mentor, nickname, score, shimo, taiga, yapi, github, wallet } = req.body
    const cc = ['utakata9408@163.com', 'yanshuai110@163.com']
    let ccFoundIndex = cc.findIndex(mentor)
    if (ccFoundIndex > -1) {
      cc.splice(ccFoundIndex, 1)
    }
    sgMail
      .send({
        to: mentor, // Change to your recipient
        // cc uta和前尘
        cc,
        from: 'comunion@comunion.io', // Change to your verified sender
        subject: `Comunion新人考核通过：${nickname}`,
        html: `<p><strong>首先恭喜新人 ${nickname} 通过 Comunion 新人审核，得分${score}，正式加入 Comunion。</strong></p><p>TA的石墨账号是：${shimo}</p><p>TA的Taiga账号是：${taiga}</p><p>TA的yapi账号是：${yapi}</p><p>TA的Github账号是：${github}</p><p>TA的钱包地址是：${wallet}</p><p><strong>请Mentor帮忙开通新人相关账号，更快得接入Comunion。</strong></p>
        `
      })
      .then(() => {
        console.log('Email sent')
        res.send({ msg: 'ok' })
      })
      .catch(error => {
        console.error(error)
        res.status(500).send(error)
      })
  } else {
    res.status(405).end()
  }
}
