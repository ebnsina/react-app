import React from "react";

import Card from "./Card";

const CardList = (props) => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-10">
      {props.users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CardList;
