import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import alpinejs from '@astrojs/alpinejs';
import robotsTxt from 'astro-robots-txt';
import remarkMath from 'remark-math';
import remarkEmoji from 'remark-emoji';
import rehypeKatex from 'rehype-katex';
import remarkPlantUML from '@akebifiky/remark-simple-plantuml';
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs';
import { remarkDiagram } from './remark-plugins/remark-diagram.mjs';
import icon from "astro-icon";

import markdoc from "@astrojs/markdoc";

import starlight from "@astrojs/starlight";
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ['svgo'],
      noExternal: ['swiper', 'leaflet']
    }
  },
  site: 'https://tech-by-design.github.io',
  base: '/',
  integrations: [
    icon(),
    tailwind(),
    sitemap(),
    expressiveCode(), // Ensure this comes before `mdx()`
    mdx(),
    alpinejs(),
    robotsTxt(),
    markdoc(),
    starlight({
			title: 'Documentation',
			logo: {
				light: '/src/assets/tech-by-design_doc_full-color_small.png',
				dark: '/src/assets/tech-by-design_doc_full-color_small.png',
				replacesTitle: true,
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],
			head: [{
				tag: "script",
				attrs: {
					type: "module",
					defer: true
				},
				content: `
					import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
					mermaid.initialize({ startOnLoad: true });
					await mermaid.run({
						querySelector: 'pre[data-language="mermaid"]',
				  	});`
			}],
			editLink: {
				baseUrl: 'https://github.com/tech-by-design/docs.techbd.org/edit/main/',
			},
			social: {
				github: 'https://github.com/tech-by-design/docs.techbd.org',
			},
			sidebar: [
				{
					label: 'Introduction to Tech by Design',
					link: 'docs/techbd-intro',
				},
				{
					label: '1115 Waiver',
					items: [
						{
							label: "FHIR Services",
							autogenerate: { directory: 'docs/1115-hub/fhir-services' }
						}, {
							label: "SFTP Services",
							autogenerate: { directory: 'docs/1115-hub/sftp-services' }
						}]
				},
				{
					label: 'Developer Experience',
					autogenerate: { directory: 'docs/dx' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'docs/reference' },
				},
				{
					label: 'Collaboration Hub',
					items: [
						{
							label: "login",
							autogenerate: { directory: 'docs/collaborationhub/login' }
						},{
							label: "Overview",
							autogenerate: { directory: 'docs/collaborationhub/overview' }
						},						
						{
							label: "Dashboard",
							autogenerate: { directory: 'docs/collaborationhub/dashboard' }
						},
						{
							label: "Content",
							autogenerate: { directory: 'docs/collaborationhub/content' }
						}]
				},
			],
		}),
  ],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkReadingTime, remarkMath, remarkPlantUML, remarkDiagram, remarkEmoji],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  },
  scopedStyleStrategy: 'where',
  output: "static",
})