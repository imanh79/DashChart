import { ArrowButton } from "@/assets/icon-svgs";
import React from "react";

const Profile = ({ imglink, name }: any) => {
  return (
    <div className="flex items-center pt-2 ">
      <img src={imglink} width={58} height={58} alt="profile" />
      <span className=" pr-2">{name}</span>
      {ArrowButton}
    </div>
  );
};

export default Profile;
