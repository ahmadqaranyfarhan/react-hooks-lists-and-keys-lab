import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksTags = links.map((link) => {
    return (
      <a href={`#${link}`} key={link}>
        {link}
      </a>
    );
  });
  return <nav>{linksTags}</nav>;
}

export default NavBar;
