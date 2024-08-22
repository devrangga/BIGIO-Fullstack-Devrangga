import React from "react";

type Props = {
  children: React.ReactNode;
};
const Content: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Content;
