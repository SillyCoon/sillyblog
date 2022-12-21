import { List } from 'immutable';
import type { PostItem } from '../interface/PostItem';

export const findLatestPost = (posts: PostItem[]) =>
  sortByPubDate(posts.filter((p) => !p.frontmatter.draft))[0];

export const findEarliestPost = (posts: PostItem[]) =>
  sortByPubDate(posts).at(-1);

export const groupPostsByCycles = (posts: PostItem[]) =>
  List(posts).groupBy<string>((g) => g.frontmatter.cycle);

export const sortByPubDate = (posts: PostItem[]) =>
  posts.sort((a, b) => +getPubDate(b) - +getPubDate(a));

export const sortByOrder = (posts: PostItem[]) =>
  posts.sort((a, b) => a.frontmatter.order - b.frontmatter.order);

export const getPubDate = (post: PostItem): Date =>
  new Date(post.frontmatter.pubDate);
