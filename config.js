/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: false,

  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'knockout', // 社区名字
  description: 'knockout：Knockout.js专业中文社区', // 社区的描述
  keywords: 'knockout, ko, knockout.js, mvvm, mvc',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />'
  ],
  site_logo: '/public/images/ko-logo.png', // default is `name`
  site_icon: '/public/images/ko_icon.png', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    [ '/about', '关于' ]
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'localhost',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: '',
  // 默认的cnzz tracker ID，自有站点请修改
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://127.0.0.1/knockout_club',
  db_name: 'knockout_club',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,

  session_secret: 'kocn_club_secret', // 务必修改
  auth_cookie_name: 'kocn_club',

  // 程序运行的端口
  port: 80,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS配置
  rss: {
    title: 'knockoutcn：Knockout.js专业中文社区',
    link: 'http://www.knockout.com.cn',
    language: 'zh-cn',
    description: 'knockoutcn：Knockout.js专业中文社区',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // 邮箱配置
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'knockoutcn@126.com',
      pass: 'wikin026'
    }
  },

  //weibo app key
  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { user_login_name: true },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: '91db0ebd4c29352f625b',
    clientSecret: '1b4795294bf056d6821e104f295598d66ee46a39',
    callbackURL: 'http://www.knockout.com.cn/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // newrelic 是个用来监控网站性能的服务
  newrelic_key: 'yourkey',

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'dy_E46OZRBersHPRhwd306Pbu7F9XiGYRtbAK4nM',
    secretKey: 'rM7lI3RIxqfeIkWpeFeNoDmOWBEPR6tBBUpnjcP1',
    bucket: 'wikieswan',
    domain: 'http://{bucket}.qiniudn.com'
  },

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  // 版块
  tabs: [
    ['share', '分享'],
    ['ask', '问答'],
    ['job', '招聘'],
  ],

  // 极光推送
  jpush: {
    appKey: 'f153bf8f49dc15cbaffad648',
    masterSecret: '5071fcb7b5905a03bcedb73b',
    isDebug: false,
  },

  create_post_per_day: 1000, // 每个用户一天可以发的主题数
  create_reply_per_day: 1000, // 每个用户一天可以发的评论数
  visit_per_day: 1000, // 每个 ip 每天能访问的次数
};

module.exports = config;
