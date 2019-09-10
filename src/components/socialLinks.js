import React from "react";
import { StaticQuery, graphql } from "gatsby";

const SocialLinks = () => (
  <StaticQuery
    query={graphql`
      query SocialLinksQuery {
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
      <ul class="icons">{getIcons(data)}</ul>
    )}
  />
);

const getIcons = (data) => {
  const iconArray = [];
  data.allSocialLinksJson.edges.forEach(item =>
    iconArray.push(
      <li><a href={item.node.url} class={`icon brands ${item.node.className}`}>{item.node.name}</a></li>
    )
  );
  return iconArray;
}

export default SocialLinks;
