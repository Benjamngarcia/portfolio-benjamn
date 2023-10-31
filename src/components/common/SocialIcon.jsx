import React from "react";
import Link from "next/link";

export const SocialIcon = ({ href, icon, ...rest }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="links-styles social-icons"
      {...rest}
    >
      {icon}
    </Link>
  );
};
