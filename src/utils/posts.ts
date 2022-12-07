import { List } from 'immutable';

export const sortPostsByPubDate = <T extends { frontmatter: any }>(
  posts: T[]
) =>
  List(
    posts.sort(
      (a, b) =>
        +new Date(b.frontmatter.pubDate) - +new Date(a.frontmatter.pubDate)
    )
  );

export const findLatestPost = <T extends { frontmatter: any }>(posts: T[]) =>
  sortPostsByPubDate(posts).first();

export const groupPostsByCycles = <T extends { frontmatter: any }>(
  posts: T[]
) => List(posts).groupBy((g) => g.frontmatter.cycle);
