import React from 'react'

import ArticleAbstract from 'com/article/abstract'

export default class Home extends React.PureComponent {
  render () {
    const item = {
      title: '用shadowsocks走出去',
      id: 'abcde',
      content: '周末两天也在加班赶项目进度，真是有些累觉不爱的，好久没周末高强度加班了。晚上闲下来，也分享一下怎么访问国外网站（google、facebooke之类）的方法吧。 shadowsocks 这个是一个基于socks协议的代理工具，要使用这个，首先你得有一个webserver，具体可以看这里：shadowsocks in github 。 其他就不多说了，直接上步骤： vps上面的配置： 安装 使用pip或者nodejs安装配置。 pip安装 pip install shadowsocks nodejs安装',
      author: 'JoeRay61',
      date: '25 JUNE 2016',
      avatar: 'https://joeray61.com/images/joeray61.png',
      categories: ['技术', '生活']
    }
    return (
      <div>
        <ArticleAbstract {...item} />
        <ArticleAbstract {...item} />
        <ArticleAbstract {...item} />
        <ArticleAbstract {...item} />
        <ArticleAbstract {...item} />
      </div>
    )
  }
}
