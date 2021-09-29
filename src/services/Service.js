// import React from "react";

const OUT_ARRAY_LENGTH = 3;
export default function getPageArgs(props) {
  const { match: { url } } = props;
  const args = url.slice(1).trim().split('/', OUT_ARRAY_LENGTH);
  return args;
}
