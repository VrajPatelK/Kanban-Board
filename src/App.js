import React, { useEffect, useState } from "react";

import "./index.css";
import "./App.css";
import Users from "./components/Users/Users";
import Status from "./components/Status/Status";

function App() {
  //----------------- STATE-HANDLING -----------------
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);

  //----------------- API-FETCH -----------------
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

  //----------------- USER_CONTENT -----------------
  // const USER_CONTENT = users.map((user, index) => {
  //   const USER_TICKETS = tickets.filter((ticket) => {
  //     return ticket.userId === user.id;
  //   });

  //   return (
  //     <Card key={index}>
  //       <CardHeader user={user} noOfTickets={USER_TICKETS.length} type="USER" />
  //       {USER_TICKETS.map((ticket) => {
  //         return <CardBody key={ticket.id} ticket={ticket} type="USER" />;
  //       })}
  //     </Card>
  //   );
  // });

  //----------------- STATUS_CONTENT -----------------
  // const STATUS_CONTENT = users.map((user, index) => {
  //   const USER_TICKETS = tickets.filter((ticket) => {
  //     return ticket.userId === user.id;
  //   });

  //   return (
  //     <Card key={index}>
  //       <CardHeader
  //         user={user}
  //         noOfTickets={USER_TICKETS.length}
  //         type="STATUS"
  //       ></CardHeader>
  //       {USER_TICKETS.map((ticket) => {
  //         return <CardBody key={ticket.id} ticket={ticket} type="STATUS" />;
  //       })}
  //     </Card>
  //   );
  // });

  //
  return (
    <div className="main-card-div">
      <Users users={users} tickets={tickets} />
      {/* <Status users={users} tickets={tickets} /> */}
    </div>
  );
}

export default App;
