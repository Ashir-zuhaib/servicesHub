import Image from "next/image";
import AvatarImage from "/public/Static/avatar.svg";

const Avatar = () => {
  return <Image src={AvatarImage} alt="avatar" width={40} height={40} />;
};

export default Avatar;
