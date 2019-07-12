import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import { Card, Title, Text } from "./styles";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <Card>
      <div className="description">
        <Title>
          Mission:{" "}
          <span className={launch_success ? "text-success" : "text-danger"}>
            {mission_name}
          </span>
        </Title>
        <Text>
          Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
        </Text>
      </div>
      <div className="btn">
        <Link to={`/launch/${flight_number}`}>Launch Details</Link>
      </div>
    </Card>
  );
}
