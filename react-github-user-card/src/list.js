import React from "react";
import Card from "./card.js";

const List = props => (
  <div>
    <Card subj={props.data} />
    <div>
      {props.list.map(cv => {
        return <Card subj={cv} key={cv.login} />;
      })}
    </div>
  </div>
);

export default List;
