import Styles from "./headings.module.css";
interface subHeadingBlue {
  title: string;
}
function SubHeadingBlue({ title }: subHeadingBlue) {
  return <h6 className={Styles.subHeadingBlue}>{title}</h6>;
}

export default SubHeadingBlue;
