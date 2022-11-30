import { Set } from 'immutable';

export const findLatestPost = <T extends { frontmatter: any }>(posts: T[]) =>
  Set(posts)
    .sort(
      (a, b) =>
        +new Date(b.frontmatter.pubDate) - +new Date(a.frontmatter.pubDate)
    )
    .first();
