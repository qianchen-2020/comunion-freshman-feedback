type QuestionItem = {
  title: string
  choices: string[]
}

type Questions = {
  multiple: QuestionItem[]
  single: QuestionItem[]
}

const questions: Questions = {
  multiple: [
    {
      title: '请选出以下对于网链经济描述正确的选项：（4分）',
      choices: [
        '网链经济是一种基于互联网和区块链技术构建的数字化、网络化和在线化的创新增长经济',
        '网链经济学是社会经济学的一个延伸',
        '网链经济学的基础支撑是竞争理论',
        '网链经济学致力于解决经济高速增长带来巨大进步的同时产生的一些社会性问题'
      ]
    },
    {
      title: '在网链经济中，全新的劳动价值转化机制解决了哪些社会问题？（4分）',
      choices: ['降低贫富差距', '提升就业率与劳动者收入', '促进创新与激活创业经济', '提升创业融资成功率']
    },
    {
      title: '以下对网链经济的发展背景描述正确的是？（4分）',
      choices: ['人口代际变革-Z时代以来', '数字游民将成为全球职业群体', '数字化时代全面到来', '在线生产力工具全面普及']
    },
    {
      title: '网链经济的特点有哪些？（4分）',
      choices: [
        '提升创业成功率，降低创业创新门槛',
        '提升创造性',
        '提升劳动力的流动性与资源利用率',
        '更高效率的生成产业'
      ]
    },
    {
      title: '网链经济白皮书中描述的的未来经济发展趋势有哪些？（4分）',
      choices: ['逆全球化', '更加公平的社会治理价值，降低社会矛盾', '数字经济驱动未来', '全面进入创新与创业时代']
    },
    {
      title: '网链组织的特点有哪些？（4分）',
      choices: [
        '组织成员流动性较强',
        '核心理念是协作和互助',
        '组织模式以管理和控制为主',
        '组织模式以愿景和共识为核心'
      ]
    },
    {
      title: '发起网链组织的要素有哪些？（4分）',
      choices: [
        '愿景节点发起明确的愿景',
        '组织成员采用中心化的管理模式',
        '寻找认同该愿景的共识节点',
        '共识性节点与愿景节点链接协作'
      ]
    },
    {
      title: '以下关于去中心化组织和网链组织描述不正确的是？（4分）',
      choices: [
        '两种组织核心目标都是为了组织生产关系，输出有效的生产力',
        '两种组织的组织模式都以管理和控制为核心，以提升效率',
        '网链组织与传统的中心化组织在基本的协作单元上存在本质不同',
        '网链组织比传统的中心化组织更有利于集中调配资源'
      ]
    },
    {
      title: '以下那项符合 Comunion 虫洞空间的描述？（4分）',
      choices: [
        '汇集生产力与智慧融合，生成创业组织',
        '为数字游民，远程办公的创业组织或是成员提供自由开放式的工作环境',
        '构建以投资者获得资本收益为目的的流动性市场',
        '聚集一定规模的，上下游关系的创业组织，构建产业社群，驱动城市产业经济发展'
      ]
    },
    {
      title: '以下哪几项符合网链组织的成员画像？（4分）',
      choices: ['极强的主动性与自我管理能力', '超级个体意识', '组织中多维度的管理', '开源协作的思维']
    },
    {
      title: '以下符合 Comunion 团队协作描述的有哪些？（4分）',
      choices: [
        '开发者具有严格的时间观念',
        '及时沟通，主动沟通，高频沟通',
        '申请多人会议需提前至少6小时预定时间',
        '开发者批量完成长周期任务，最后一次性提交'
      ]
    },
    {
      title: '以下哪些行为不完全符合网链 Comunion 团队协作公约？（4分）',
      choices: [
        '研发开始时，项目召集人召集不同技能的开发者组建对应的网链组织',
        '项目联调时，协调人提前12小时发起会议，但未明确会议主题',
        '某开发者研发结束后未提交自己的测试用例和技术文档',
        '任务进行时，某开发者因网络故障无法进行联调，经与协调人沟通后次日接入'
      ]
    },
    {
      title: '网链组织协作中常见的问题有哪几种？（4分）',
      choices: [
        '单点成员故障，工作质量不过关',
        '任务分配和验收标准不清晰',
        '项目进度延迟严重',
        '企图经常协调全体成员统一时间'
      ]
    },
    {
      title: '以下关于网链组织协作管理机制描述不准确的是？（4分）',
      choices: [
        '核心思想是切成细粒度的执行单元，以可执行单元为执行和验收的基本单位',
        '让所有成员在统一的时间内协作并产出有价值的任务交付',
        '尽量缩短全体成员协作的时间和对单一成员的时间上的无效占用',
        '将项目功能模块组合，进行批量执行和验收'
      ]
    }
  ],
  single: [
    {
      title: '网链经济的基础支撑是什么？（4分）',
      choices: ['区块链链接价值', '劳动价值', '弱关系网链价值', '流动性转化价值']
    },
    {
      title: '以下那项不是网链经济的运转模式？（4分）',
      choices: ['生产力云池，汇集劳动力和生产力', '劳动力资本化，生成创业组织结构', '创业生成产业', '虫洞空间']
    },
    {
      title: '以下不在网链组织风险管理之内的是？（4分）',
      choices: ['公众账号安全性', '成员的隐私性保护', '开发者数量过多', '开发者在任务中突然退出']
    },
    {
      title: '某网链组织项目进度延迟，以下那项原因应该排除在内？（4分）',
      choices: ['开发者人数过多', '技术预言不足', '架构设计不合理', '产品设计不合理']
    },
    {
      title: '以下那一项不是网链经济致力于解决的问题？（4分）',
      choices: [
        '提升数字货币的数量',
        '打破行业巨头垄断，促进社会创新与创业',
        '缩小贫富差距，降低社会矛盾',
        '提升就业率与劳动效率'
      ]
    },
    {
      title: '以下那一项不符合网链组织理论中描述的寻找共识节点的方式？（4分）',
      choices: ['人脉好友', '社交网络', '炒币社群', '自媒体']
    },
    {
      title: '以下关于网链组织描述正确的是？（2分）',
      choices: ['组织关系为雇佣制', '激励方式为股票', '协作模式为线下或线上统一办公', '组织成员成分多元化']
    },
    {
      title: '以下哪种流动性市场不是网链经济学所描述的？（2分）',
      choices: [
        '大型中心化、去中心化数字货币交易所',
        '私募/公募机构、VC等为主要构成的市场',
        '劳动技能获取资本收益的交易市场',
        '小额货币作为投资手段的交易市场'
      ]
    },
    {
      title: '以下那一种方式不适合提升网链组织成员的有效协作？（2分）',
      choices: ['建立协作体系', '建立决策机制', '建立每日打卡机制', '建立核心组织网络']
    },
    {
      title: '以下哪项不是网链经济描述的创业者无法启动自己创业项目的常见问题？（2分）',
      choices: [
        '受限制于启动资金',
        '创业成功率低，不敢随意启动',
        '自己背景普通，无法招聘到优秀的合伙人',
        '运营成本高，资金使用效率低下'
      ]
    },
    {
      title: '以下对于社会生产要素组织与交易形式描述不正确的是？（2分）',
      choices: [
        '生产要素通常包括劳动力、土地、资本',
        '所有的生产要素中，人的要素是核心生产要素',
        '当下的世界两个核心生产要素是劳动力和资本',
        '信息时代，人比资本的流动性更强'
      ]
    },
    {
      title: '不符合网链组织协作方式的是？（2分）',
      choices: ['制定层级关系', '制定协作机制', '明确协作工具', '明确协作流程']
    },
    {
      title: 'Comunion 的愿景是？（2分）',
      choices: [
        '让全球化的劳动力与资本的自由流动与链接',
        '让劳动价值像资本一样自由流通，积累和交易',
        '创造全新的组织形式与创业互助网络，链接每一位劳动者',
        '建设数字时代的全新商业基础设施，帮助创业者和劳动者实现自由的价值交易'
      ]
    },
    {
      title: '以下不符合 Comunion 产品特性的是？（2分）',
      choices: [
        '去中心化的组织与运营形式',
        '去中心化的证券交易市场',
        '劳动价值与资本价值量价一致',
        '重新定义组织募资方式'
      ]
    },
    {
      title: 'Comunion 的 Token 价值单元是什么？（2分）',
      choices: ['BTC', 'ETH', 'UVL', 'UVU']
    },
    {
      title: 'Comunion 第一届执行委员会主席是谁？（2分）',
      choices: ['kering', 'superest泽', '二锅头', '前尘']
    }
  ]
}

export default questions
