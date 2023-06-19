import Styles from "./headings.module.css";
interface subTitle {
  title: string;
}
function SubTitle({ title }: subTitle) {
  return <h2 className={Styles.subTitle}>{title}</h2>;
}

export default SubTitle;
