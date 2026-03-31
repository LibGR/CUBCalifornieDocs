// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://LibGR.github.io',
  	base: '/CUBCalifornieDocs',
	integrations: [
		starlight({
			title: 'CUBDocumentations',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/LibGR/CUBCalifornieDocs/' }],
			sidebar: [
				{
					label: 'Autre (EPOKA)',
					autogenerate: { directory: 'epoka' },
				},
				{
					label: 'Documentations',
					autogenerate: { directory: 'documentations' },
				},
				{
					label: 'Infrastructure',
					autogenerate: { directory: 'infrastructure' },
				},
				//{
				//	label: 'Reference',
				//	autogenerate: { directory: 'reference' },
				//},
			],
		}),
	],
});
