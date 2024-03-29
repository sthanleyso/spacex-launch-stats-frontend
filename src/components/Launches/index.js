import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import LaunchItem from '../LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export default function Launches() {
  return (
    <Query query={LAUNCHES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) console.log(error);

        return (
          <>
            {data.launches.map(launch => (
              <LaunchItem key={launch.flight_number} launch={launch} />
            ))}
          </>
        );
      }}
    </Query>
  );
}
