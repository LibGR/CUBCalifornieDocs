// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
