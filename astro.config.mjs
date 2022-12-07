import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
import preact from '@astrojs/preact';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), mdx(
    {rehypePlugins: [rehypeAutolinkHeadings]}
  )]
});