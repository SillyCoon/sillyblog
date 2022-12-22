import rss from '@astrojs/rss';

const postsImport = import.meta.glob('/**/*.mdx', { eager: true });
const posts = Object.values(postsImport)
  .filter((p) => !p.frontmatter.draft)
  .map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.pubDate,
  }));

export const get = () =>
  rss({
    title: 'SillyBlog',
    description: 'SillyBlog News',
    site: 'https://sillyblog.netlify.app',
    items: posts,
    customData: `<language>ru-ru</language>`,
  });
