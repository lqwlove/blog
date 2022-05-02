module.exports = {
    title: '伟哥的博客',
    description: '专注web技术',
    themeConfig: {
        nav: [{ text: "主页", link: "/" },
        { text: "前端", link: "/web/" },
        { text: "github", link: "/database/" },
        ],
        sidebar: {
            '/web/': [
                {
                    title: '前端',
                    // path: 'vue',
                    // collabsable: false,
                    children: [
                        { title: 'vue', path: '/web/vue/a' },
                    ]
                }
            ],
        },
    }
}
