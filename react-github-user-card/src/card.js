import React from "react";

const Card = props => (
  <a href={props.subj.html_url} target="blank" className="gitCard">
    <div>
      <img src={props.subj.avatar_url} alt="Profile Avatar" />
      <section> {props.subj.name} </section>
      <section> {props.subj.company} </section>
      <section> {props.subj.bio} </section>
      <ul>
        <li> Followed by: {props.subj.followers} </li>
        <li> Follows: {props.subj.following} </li>
        <li> Repos: {props.subj.public_repos} </li>
      </ul>
    </div>
  </a>
);
export default Card;
