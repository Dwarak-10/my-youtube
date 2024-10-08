import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
    "Valantines",
    "IPL",
  ];
  return (
    <div className="flex">
      {btnList.map((list, index) => (
        <Button key={index} name={list} />
      ))}
      {/* <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Valantines" />
      <Button name="IPL" /> */}
    </div>
  );
};

export default ButtonList;
