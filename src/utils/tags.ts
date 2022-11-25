import { Set } from 'immutable';

export const getUniqueTags = (posts: any[]) => {
  return Set<string>(posts.flatMap((p: any) => p.frontmatter.tags)).toArray();
};
