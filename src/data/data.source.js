import React from 'react';

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      // {
      //   name: 'item0',
      //   className: 'header3-item',
      //   children: {
      //     href: '#',
      //     children: [{ children: '导航一', name: 'text' }],
      //   },
      //   subItem: [
      //     {
      //       name: 'sub0',
      //       className: 'item-sub',
      //       children: {
      //         className: 'item-sub-item',
      //         children: [
      //           {
      //             name: 'image0',
      //             className: 'item-image',
      //             children:
      //               'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
      //           },
      //           {
      //             name: 'title',
      //             className: 'item-title',
      //             children: 'Ant Design',
      //           },
      //           {
      //             name: 'content',
      //             className: 'item-content',
      //             children: '企业级 UI 设计体系',
      //           },
      //         ],
      //       },
      //     },
      //     {
      //       name: 'sub1',
      //       className: 'item-sub',
      //       children: {
      //         className: 'item-sub-item',
      //         children: [
      //           {
      //             name: 'image0',
      //             className: 'item-image',
      //             children:
      //               'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
      //           },
      //           {
      //             name: 'title',
      //             className: 'item-title',
      //             children: 'Ant Design',
      //           },
      //           {
      //             name: 'content',
      //             className: 'item-content',
      //             children: '企业级 UI 设计体系',
      //           },
      //         ],
      //       },
      //     },
      //   ],
      // },
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#/',
          children: [{ children: '首页', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#/blog',
          children: [{ children: '博客', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#/kit',
          children: [{ children: '工具', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '#/about',
          children: [{ children: '关于', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};


export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '开发小插件',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '开发小插件',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '开发小插件',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
    ],
  },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '金融云提供专业的服务',
        className: 'title-h1',
      },
      { name: 'content', children: '基于计算强大的基础资源' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'PHONE', className: 'content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: 'TABLET' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: 'DESKTOP', className: 'content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式业务接入',
            },
            { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式事中风险监控',
            },
            {
              name: 'content',
              children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式数据运营',
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '企业资源管理' },
  content: {
    className: 'content1-content',
    children:
      '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于强大的基础资源',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '企业资源管理' },
          content: {
            className: 'content3-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云安全' },
          content: {
            className: 'content3-content',
            children:
              '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云监控' },
          content: {
            className: 'content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children:
              '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '分布式中间件' },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children:
              '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },
    ],
  },
};

export const Content70DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '金融云提供专业的服务',
        className: 'title-h1',
      },
      { name: 'content', children: '基于计算强大的基础资源' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'PHONE', className: 'content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>
                符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: 'TABLET' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>
                符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: 'DESKTOP', className: 'content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>
                符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};


export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/NuuAwJBxewWglRSoNjET.png',
        className: 'copyright-logo',
      },
      {
        name: 'group',
        children: '蚂蚁金服体验科技大会',
        className: 'copyright-group',
      },
      {
        name: 'image2',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
        className: 'copyright-line',
      },
      {
        name: 'copyright',
        children: 'Copyright © 超级编码器',
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'weibo',
        href: '#',
        className: 'links-weibo',
        children:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjYgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT53ZWlibzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNCI+CiAgICAgICAgPGcgaWQ9IumhteiEmiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU2LjAwMDAwMCwgLTIxLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJ3ZWlibyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYuMDAwMDAwLCAyMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS4wOTMyNDIyLDkuNDM5OTgwNzIgQzE5LjUwNzk3MjcsOC4zOTk3OTc1OSAxOS41NTA5NTksNy41MDI1NjYyNyAxOS4xMDExMzg3LDYuODYyNTcyMjkgQzE4LjI1Nzk5MjIsNS42NjIzNTkwNCAxNS45NTA2Njk5LDUuNzI2OTAyNDEgMTMuMzA1NzI4NSw2LjgzMDMxMzI1IEMxMy4zMDU3Mjg1LDYuODI4OTQ2OTkgMTIuNDc1MzAyNyw3LjE5MjQ3NDcgMTIuNjg3NTkzNyw2LjUzNTc1NjYzIEMxMy4wOTQ0MDIzLDUuMjMyNTY3NDcgMTMuMDMzMjg3MSw0LjE0MTI1MDYgMTIuNDAwMTIxMSwzLjUxMDg5NjM5IEMxMC45NjU0MjM4LDIuMDgwMTEzMjUgNy4xNDk3NzE0OCwzLjU2NTA2NjI3IDMuODc3MjUsNi44MjQ1NDQ1OCBDMS40MjcwMjkzLDkuMjY2NDkwMzYgMC4wMDQwODc4OTA2MiwxMS44NTQ2NzcxIDAuMDA0MDg3ODkwNjIsMTQuMDkyNzcxMSBDMC4wMDQwODc4OTA2MiwxOC4zNzM1ODMxIDUuNTEyOTkwMjMsMjAuOTc1OTYzOSAxMC45MDI1NTY2LDIwLjk3NTk2MzkgQzE3Ljk2NzIxODgsMjAuOTc1OTYzOSAyMi42NjY4OTY1LDE2Ljg4NTU0MzQgMjIuNjY2ODk2NSwxMy42MzgxODQzIEMyMi42NjY4OTY1LDExLjY3NjE3NzEgMjEuMDA4NTU4NiwxMC41NjI3OTc2IDE5LjUxODM1NzQsMTAuMTAyMDYyNyBDMTkuMTUyNjA1NSw5Ljk5MzExNTY2IDE4LjkwMTU2ODQsOS45MTgzNzU5IDE5LjA5MzIxNjgsOS40Mzk5ODA3MiBMMTkuMDkzMjQyMiw5LjQzOTk4MDcyIFogTTIuNjI0NzU1ODYsMTUuMTE0MTMwMSBDMi4zNDU1NjA1NSwxMi4zMDA5Mzk4IDUuNjA2NTI5Myw5LjY3NzI1NTQyIDkuOTA2MzMwMDgsOS4yNTM4MTQ0NiBDMTQuMjA3MDk1Nyw4LjgyOTU4OTE2IDE3LjkxOTQzMzYsMTAuNzY3MDI4OSAxOC4xOTg2MDM1LDEzLjU3OTQwOTYgQzE4LjQ3NzIxNDgsMTYuMzkzNzEzMyAxNS4yMTc2MTcyLDE5LjAxODE4MTkgMTAuOTE2ODI2MiwxOS40NDE4MjUzIEM2LjYxNjY2OTkyLDE5Ljg2NDMwNDggMi45MDQzMDY2NCwxNy45Mjc4NTE4IDIuNjI0NzU1ODYsMTUuMTE0MTMwMSBaIE0xMS4zNDY3OTEsMTEuNDE4OTE0NSBDOS4zMDAzMzIwMywxMC44ODgwNjk5IDYuOTg3MjIwNywxMS45MDQ0NDQ2IDYuMDk4MzcxMDksMTMuNzAxNDEyIEM1LjE5MzE0NDUzLDE1LjUzMzkyNzcgNi4wNjg0ODYzMywxNy41NjgxOTUyIDguMTM1NzkxMDIsMTguMjMzMzM4NiBDMTAuMjc3NjkzNCwxOC45MjEzNTQyIDEyLjgwMTcyNDYsMTcuODY2NzQ5NCAxMy42Nzk3ODMyLDE1Ljg4ODk3OTUgQzE0LjU0NTI5ODgsMTMuOTU1MjA4NCAxMy40NjQ0MTk5LDExLjk2NDE4MDcgMTEuMzQ2NzkxLDExLjQxODkxNDUgWiBNOS43ODM4OTY0OCwxNi4wOTg5Nzk1IEM5LjM2Nzk5ODA1LDE2Ljc2MDEgOC40NzcyNDQxNCwxNy4wNDk4MjQxIDcuODA2MDY4MzYsMTYuNzQ0NzE2OSBDNy4xNDQ5NDcyNywxNi40NDQ5OTg4IDYuOTUwMDIzNDQsMTUuNjc2NSA3LjM2NjA5OTYxLDE1LjAzMTY5ODggQzcuNzc2OTcwNywxNC4zODk4MDcyIDguNjM3NjYyMTEsMTQuMTAzMzQ3IDkuMzAzODEwNTUsMTQuMzgxNzEwOCBDOS45NzcyOTY4NywxNC42Njc4MTY5IDEwLjE5MjY2MDIsMTUuNDMwNzQ5NCA5Ljc4Mzg5NjQ4LDE2LjA5ODk3OTUgWiBNMTEuMTU0MTc3NywxNC4zNDYxODggQzExLjAwMzc4OTEsMTQuNjAyODY4NyAxMC42NzExOTczLDE0LjcyNTgzMjUgMTAuNDEwOTE4LDE0LjYxOTAxMDggQzEwLjE1NDQ3MjcsMTQuNTE0MTEyIDEwLjA3NDI2MzcsMTQuMjI3NDQ5NCAxMC4yMTk4MjgxLDEzLjk3NTM3MzUgQzEwLjM2OTgzNTksMTMuNzI0ODQxIDEwLjY4OTUyOTMsMTMuNjAyNjYxNCAxMC45NDQ5ODQ0LDEzLjcwMzMzNDkgQzExLjIwNDcwNTEsMTMuNzk4MjE0NSAxMS4yOTc4Mzc5LDE0LjA4ODM0MzQgMTEuMTU0MjAzMSwxNC4zNDYxODggTDExLjE1NDE3NzcsMTQuMzQ2MTg4IFogTTI0LjIwOTc4MzIsMi4yNjg0MDQ4MiBDMjUuOTE2ODk2NSw0LjE1MTI2OTg4IDI2LjM3Njc0NjEsNi43MTgxMDI0MSAyNS42NDgzMTQ1LDguOTcwNjE4MDcgQzI1LjY0ODEzNjcsOC45NzE3ODE5MyAyNS42NDgxMzY3LDguOTczNjc5NTIgMjUuNjQ4MTM2Nyw4Ljk3NDQ2Mzg2IEMyNS40Nzg4MzIsOS40OTQzNTMwMSAyNC45MTgxNTYyLDkuNzc5NDcyMjkgMjQuMzk2MDIzNCw5LjYxMDk5MTU3IEMyMy44NzE5NjA5LDkuNDQyNDg1NTQgMjMuNTg1ODU5NCw4Ljg4NDc0NTc4IDIzLjc1NTEzODcsOC4zNjI5MDg0MyBMMjMuNzU0OTM1NSw4LjM2MjMyNjUxIEMyNC4yNzM3OTMsNi43NjE3MjE2OSAyMy45NDQ4NTc0LDQuOTM1MzI4OTIgMjIuNzMzMjY3NiwzLjU5Njc2ODY3IEMyMS41MTk3MjI3LDIuMjU4MjA4NDMgMTkuNzMxNjM4NywxLjc0NjM5MDM2IDE4LjA3OTA2NDUsMi4wOTU4NzU5IEMxNy41NDE3MjI3LDIuMjEwNTY2MjcgMTcuMDEzMDM5MSwxLjg2ODM5Mjc3IDE2Ljg5ODkwODIsMS4zMzM1IEMxNi43ODMzODA5LDAuNzk4ODA5NjM5IDE3LjEyNjQwODIsMC4yNzE2MDg0MzQgMTcuNjYzMzY5MSwwLjE1NzUgTDE3LjY2NDEzMDksMC4xNTc1IEMxOS45ODcyOTY5LC0wLjMzNDU1NzgzMSAyMi41MDQwMTU2LDAuMzgzNjE2ODY3IDI0LjIwOTc4MzIsMi4yNjgzNzk1MiBMMjQuMjA5NzgzMiwyLjI2ODQwNDgyIFogTTIxLjU4OTUyMTUsNC42MjQ0NTMwMSBMMjEuNTg5NTIxNSw0LjYyNDI3NTkgQzIyLjQyMTg3Nyw1LjU0MjI3OTUyIDIyLjY0NDE3MTksNi43OTE4ODA3MiAyMi4yODg0NDkyLDcuODg5NyBDMjIuMTQzMjY1Niw4LjMzODEzODU1IDIxLjY2MDg2OTEsOC41ODI5MDI0MSAyMS4yMTA0NjQ4LDguNDM5MzY4NjcgQzIwLjc2MDQ0MTQsOC4yOTM3MzQ5NCAyMC41MTQ0MzE2LDcuODEyNDU1NDIgMjAuNjU5NDEyMSw3LjM2NDgyNjUxIEwyMC42NTg4MjgxLDcuMzY0ODI2NTEgQzIwLjgzMzcxODgsNi44MjgxODc5NSAyMC43MjQyMDksNi4yMTY0NTU0MiAyMC4zMTc5NTksNS43NjcyNTc4MyBDMTkuOTExNTA1OSw1LjMxOTYwMzYxIDE5LjMxMTcwMzEsNS4xNDk3NTY2MyAxOC43NTg1MTc2LDUuMjY2NTQ2OTkgTDE4Ljc1ODUxNzYsNS4yNjU2MTA4NCBDMTguMjk3MTQ0NSw1LjM2NTkwNDgyIDE3Ljg0MjI5NjksNS4wNzA0MTIwNSAxNy43NDMxOTczLDQuNjExMjIwNDggQzE3LjY0MzkxOTksNC4xNDk3MjY1MSAxNy45Mzg3MDUxLDMuNjk1OTI0MSAxOC40MDE0NDkyLDMuNTk3NzMwMTIgQzE5LjUzMzQxNDEsMy4zNTc5NTA2IDIwLjc1OTI5ODgsMy43MDY4NTQyMiAyMS41ODk1MjE1LDQuNjI0NDUzMDEgTDIxLjU4OTUyMTUsNC42MjQ0NTMwMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
      },
      {
        name: 'zhihu',
        href: '#',
        className: 'links-zhihu',
        children:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7nn6XkuY48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjQiPgogICAgICAgIDxnIGlkPSLpobXohJoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTQuMDAwMDAwLCAtMjEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IuefpeS5jiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE0LjAwMDAwMCwgMjEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43Nzg1ODQ2MSwxMS43MjI5IEwxMS4yOTA5Nzg1LDExLjcyMjkgQzExLjI5MDk3ODUsMTAuNjQ0OSAxMC43OTEyODYyLDEwLjAxMzUgMTAuNzkxMjg2MiwxMC4wMTM1IEw2Ljg3NDM4NzcsMTAuMDEzNSBDNi45Njc0MzM4NSw4LjA2MTE5OTk5IDcuMDUwODMwNzcsNS41NTU4OTk5OSA3LjA4MTE1NjkzLDQuNjI0ODk5OTkgTDEwLjgwNjQ0OTIsNC42MjQ4OTk5OSBDMTAuODA2NDQ5Miw0LjYyNDg5OTk5IDEwLjc4NTc3MjMsMy4wMjQgMTAuMzcyMjMzOCwzLjAyNCBMMy44MjI0NzM4NSwzLjAyNCBDMy44MjI0NzM4NSwzLjAyNCA0LjIxNjcxMzg0LDAuOTMwMyA0Ljc0MTkwNzY5LDAuMDA1NjAwMDA2ODQgQzQuNzQxOTA3NjksMC4wMDU2MDAwMDY4NCAyLjc4NjU1OTk5LC0wLjEwMTQ5OTk5MyAyLjExOTM4NDYyLDIuNTQ2NjAwMDEgQzEuNDUyMjA5MjQsNS4xOTQ3MDAwMSAwLjQ1MjEzNTM5MSw2Ljc5NTYgMC4zNDY2ODMwODQsNy4wODgxOTk5OSBDMC4yNDA1NDE1NTIsNy4zODA3OTk5OSAwLjkyMjE5MDc2OSw3LjIyNjc5OTk5IDEuMjEwMjg5MjIsNy4wODgxOTk5OSBDMS40OTgzODc2OCw2Ljk0OTU5OTk5IDIuODAyNDEyMyw2LjQ3MjIgMy4xODE0ODkyNCw0LjYyNDg5OTk5IEw1LjIwNTc2MDAxLDQuNjI0ODk5OTkgQzUuMjMzMzI5MjMsNS43OTYgNS4zMTMyODAwMSw5LjM4NDE5OTk5IDUuMjg4NDY3NywxMC4wMTM1IEwxLjExOTMxMDc2LDEwLjAxMzUgQzAuNTI3OTUwNzYzLDEwLjQ0NDcgMC4zMzE1MTk5OTMsMTEuNzIyOSAwLjMzMTUxOTk5MywxMS43MjI5IEw1LjA5NjE3MjMxLDExLjcyMjkgQzQuODk2OTg0NjMsMTMuMDU5MiA0LjU0ODIzMzg1LDE0Ljc4MTkgNC4wNjAyNTg0NywxNS42OTQ3IEMzLjI4NzYzMDc3LDE3LjE0MyAyLjg3ODIyNzY5LDE4LjQ2NjcgMC4wODk1OTk5OTMzLDIwLjc0NDUgQzAuMDg5NTk5OTkzMywyMC43NDQ1IC0wLjM2NTI5MjMxNCwyMS4wODMzIDEuMDQ0MTg0NjIsMjAuOTYwMSBDMi40NTQzNTA3NywyMC44MzY5IDMuNzg4MDEyMzEsMjAuNDY3MyA0LjcxMjk1OTk5LDE4LjU4OTIgQzUuMjU1MTIxMjcsMTcuNDY5MTYwNiA1LjcxMTU5MTYsMTYuMzA4Mzk4NyA2LjA3ODMyNjE2LDE1LjExNzIgTDYuMDc2OTQ3NjksMTUuMTIyMSBMMTAuMDAzNDk1NCwxOS43MTM0IEMxMC4wMDM0OTU0LDE5LjcxMzQgMTAuNTE5MDQsMTguNDgxNCAxMC4xMzk5NjMxLDE3LjEyNjkgTDcuMjI5MzQxNTMsMTMuODE1OSBMNi4yNDM3NDE1NSwxNC41NTY1IEw2LjI0MzA1MjMsMTQuNTYgQzYuNTE2Njc2OTEsMTMuNTg1NiA2LjcxMzEwNzY4LDEyLjYyMjQgNi43NzQ0NDkyMiwxMS43ODQ1IEw2Ljc3OTI3Mzg1LDExLjcyMjkgTDYuNzc4NTg0NjEsMTEuNzIyOSBaIE0xMi4yMzEwODkyLDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMTguNTczOCBMMTMuODc1NTkzOSwxOC41NzM4IEwxNC41NDk2NjE1LDIwLjQ4NjkgTDE3LjQwMDMyLDE4LjU3MzggTDIwLjk5MzI4LDE4LjU3MzggTDIwLjk5MzI4LDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMi42ODUyMDAwMSBaIE0xOS4zMDA1MjkyLDE2Ljg2NTEgTDE3LjQzMjcxMzgsMTYuODY1MSBMMTUuMTAzODAzMSwxOC40Mjc1IEwxNC41NTMxMDc3LDE2Ljg2NTEgTDEzLjk3MjA4NjEsMTYuODY1MSBMMTMuOTcyMDg2MSw0LjQ1ODMgTDE5LjI5OTg0LDQuNDU4MyBMMTkuMjk5ODQsMTYuODY1MSBMMTkuMzAwNTI5MiwxNi44NjUxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
      },
    ],
  },
};

export const Content01DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          title: { children: '一站式业务接入' },
          content: { children: '支付、结算、核算接入产品效率翻四倍' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          title: { children: '一站式事中风险监控' },
          content: { children: '在所有需求配置环节事前风险控制和质量控制能力' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          title: { children: '一站式数据运营' },
          content: { children: '沉淀产品接入效率和运营小二工作效率数据' },
        },
      },
    ],
  },
};

