import React from "react";

const Card = (props) => {
  const { name, username, email, website } = props.user;
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow mb-2 md:mb-0">
      <h1 className="text-xl font-bold">{name}</h1>
      <small className="text-sm text-gray-700">({username})</small>
      <p>
        Email: <strong>{email}</strong>
      </p>
      <p>
        Website: <strong>{website}</strong>
      </p>
    </div>
  );
};

export default Card;
