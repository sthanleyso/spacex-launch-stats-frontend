import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { Container, Title, ListTitle, List, ListItem, Separator } from './styles';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number,
      mission_name,
      launch_year,
      launch_success,
      launch_date_local,
      rocket {
        rocket_id,
        rocket_name,
        rocket_type
      }
    }
  }
`;

export default function LaunchDetails(props) {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);

  return (
    <Container>
      <Query query={LAUNCH_QUERY} variables={{flight_number}}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) console.log(error);

          const {
            flight_number,
            mission_name,
            launch_year,
            launch_success,
            rocket: {
              rocket_id,
              rocket_name,
              rocket_type
            }
          } = data.launch;

          return (
            <>
              <Title>Mission: <span>{mission_name}</span></Title>
              <ListTitle>Launch Details</ListTitle>
              <List>
                <ListItem>Flight Number: {flight_number}</ListItem>
                <ListItem>Launch Year: {launch_year}</ListItem>
                <ListItem>
                  Launch Successful:
                  {' '}
                  <span className={launch_success ? 'text-success' : 'text-danger'}>
                    {launch_success ? 'Yes' : 'No'}
                  </span>
                </ListItem>
              </List>
              <ListTitle>Rocket Details</ListTitle>
              <List>
                <ListItem>Rocket ID: {rocket_id}</ListItem>
                <ListItem>Rocket Name: {rocket_name}</ListItem>
                <ListItem>Rocket Type: {rocket_type}</ListItem>
              </List>
              <Separator />
              <Link to="/">Back</Link>
            </>
          );
        }}
      </Query>
    </Container>
  );
}
