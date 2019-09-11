import React from "react";
import { StaticQuery, graphql } from "gatsby";

const SocialLinks = () => (
  <StaticQuery
    query={graphql`
      query {
        allSocialLinksJson {
          edges {
            node {
              name
              className
              url
            }
          }
        }
      }
    `}
    render={data => (
      <ul className="icons">{getIcons(data)}</ul>
    )}
  />
);

const getIcons = (data) => {
  const iconArray = [];
  data.allSocialLinksJson.edges.forEach(item =>
    iconArray.push(
      <li key={item.node.name}><a href={item.node.url} className={`icon brands ${item.node.className}`}>{item.node.name}</a></li>
    )
  );
  return iconArray;
}

export default SocialLinks;
