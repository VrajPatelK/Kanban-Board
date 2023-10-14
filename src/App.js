import React, { useEffect, useState } from "react";

import CardBody from "./components/CardBody/CardBody";
import CardHeader from "./components/CardHeader/CardHeader";
import Card from "./components/Card/Card";
import "./index.css";
import "./App.css";

function App() {
  //
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTemp = async () => {
      try {
        //
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const responseData = await response.json();

        //
        // console.log(responseData);
        setUsers(responseData["users"]);
        setTickets(responseData["tickets"]);

        //
      } catch (error) {
        console.log("this is error in data fetching");
      }
    };

    fetchTemp();
  }, []);

  //
  const USER_CONTENT = users.map((user, index) => {
    const USER_TICKETS = tickets.filter((ticket) => {
      return ticket.userId === user.id;
    });

    return (
      <Card key={index}>
        <CardHeader user={user} noOfTickets={USER_TICKETS.length} />
        {USER_TICKETS.map((ticket) => {
          return <CardBody key={ticket.id} ticket={ticket} />;
        })}
      </Card>
    );
  });

  //
  return <div className="main-card-div">{USER_CONTENT}</div>;
}

export default App;
