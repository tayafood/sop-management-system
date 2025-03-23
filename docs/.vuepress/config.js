import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'GMP',
                link: '/sop/GMP/eu/SOP-DAP-VIEN.md',
            },
        ],
    }),
    plugins: [
        mdEnhancePlugin({
            // Các tùy chọn khác
            mermaid: true, // Bật hỗ trợ Mermaid
        }),
    ],
})