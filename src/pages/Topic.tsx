import React from 'react';
import type { RouteComponentProps } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout/PageLayout';

type MatchProps = RouteComponentProps & {
  params: any;
};

export const Topic = ({ match }: { match: MatchProps }) => {
  return (
    <PageLayout>
      <div>This is the Topics Page for {match.params.topic_name}</div>
    </PageLayout>
  );
};

export default Topic;
