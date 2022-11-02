import SimpleReactFooter from "simple-react-footer";
import React from "react";
import PropTypes, { string } from 'prop-types';

export function Footer(color) {
  const description =
  "Recoil is an experimental state management library and It provides several capabilities that are difficult to achieve with React alone.In this article we learn about the recoil. js, and how it is managing state in react. JavaScript React Recoil. Recoil js is another state management library for React."
  const title = "Recoil";
  const columns = [
    {
      title: "Resources",
      resources: [
        { 
          name: "About",
          link: "/about"
        },
        {
          name: "Careers",
          link: "/careers"
        },
        {
          name: "Contact",
          link: "/contact"
        },
        {
          name: "Admin",
          link: "/admin"
        }
      ]
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/privacy"
        },
        {
          name: "Terms",
          link: "/terms"
        }
      ]
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/locations"
        },
        {
          name: "Culture",
          link: "/culture"
        }
      ]
    }
  ];
  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      linkedin="fluffy_cat_on_linkedin"
      facebook="fluffy_cat_on_fb"
      twitter="fluffy_cat_on_twitter"
      instagram="fluffy_cat_live"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="fluffy_cats_collections"
      copyright="nobody"
      iconColor="red"
      backgroundColor="skyblue"
      copyrightColor="darkgrey"
      
    />
  );
}
 Footer

Footer.PropTypes = {
    background: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    description: string
  }
  
  Footer.defaultProps = {
    name: 'Enter a value',
    
  }