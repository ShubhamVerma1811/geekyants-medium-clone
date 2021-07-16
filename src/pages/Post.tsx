import React from 'react';
import type { RouteComponentProps } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout/PageLayout';

type MatchProps = RouteComponentProps & {
  params: any;
};

export const Post = ({ match }: { match: MatchProps }) => {
  return (
    <PageLayout>
      <div>This is the post page for post_id : {match.params.pid}</div>
    </PageLayout>
  );
};

export default Post;
