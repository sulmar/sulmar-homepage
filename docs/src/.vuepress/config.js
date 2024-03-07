const { description } = require('../../package')
const path = require('path');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Sulmar',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: "/sulmar-homepage/",
  /* alias: {'styles': path.resolve(__dirname, './theme/styles')}, */

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ['link', { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" }],
    ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/icons/sulmar_logo_vector.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Szkolenia',
        link: '/#courses',
      },
    ],
    sidebar: {
      '/szkolenia/': [
        {
          title: 'Szkolenia',
          collapsable: false,
          children: [
            '',
            'using-vue',
            'szkolenie1',
            'redis',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/blog', {
      directories: [
        {
          id: 'courses',
          dirname: 'courses',
          path: '/courses/',
          layout: 'IndexCourse',
          itemLayout: 'Course',
          itemPermalink: '/courses/:slug',/* edytować ten slug */
          pagination: {
            lengthPerPage: 100,
            layout: 'IndexCourse', /* definiuje layout 2-strony wyświetlanych kursów, jeśli np. na danej stronie chę wyświetlić tylko x(lengthPerPage) domyślnie layout jest taki sam jak strony głównej */
            prevText: 'Poprzednia',
            nextText: 'Następna',
          },
        }
      ]
    },
  ]
  ]
}
