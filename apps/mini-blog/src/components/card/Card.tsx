import React, {FC} from "react";

interface CardProps {
  title: string;
}

export const Card:FC<CardProps> = ({title}) => {
  return (
    <div>
      <h1>Welcome to Card! {title}</h1>
    </div>
  );
}
