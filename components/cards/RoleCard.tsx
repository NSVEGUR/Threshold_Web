import React from "react";
import roleCardStyles from "./RoleCard.module.css";
import student from "../../assests/images/roles/student.png";
import teacher from "../../assests/images/roles/teacher.png";
import administration from "../../assests/images/roles/administration.png";

interface Props {
  user: User;
}

const RoleCard: React.FC<Props> = ({ user }) => {
  let candidate = "a";
  let rr = `/_next/static/media/`;
  if (user.role === "Student") {
    candidate = `student.39eb862c.png`;
  } else if (user.role === "Teacher") {
    candidate = `teacher.438c0afc.png`;
  } else if (user.role === "Administration") {
    candidate = `administration.61ebe32b.png`;
  }

  console.log(student.src);
  console.log(teacher.src);
  console.log(administration.src);

  return (
    <div className={roleCardStyles.flex_container}>
      <div className={roleCardStyles.flex_left}>
        <img src={rr + candidate} height="88px" width="88px" alt={candidate} />
      </div>
      <div className={roleCardStyles.flex_right}>{user.role}</div>
    </div>
  );
};

export default RoleCard;
