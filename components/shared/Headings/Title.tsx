import Styles from "./headings.module.css";
interface Title {
  title: string;
}
function Title({ title }: Title) {
  return <h1 className={(Styles.title)}>{title}</h1>;
}

export default Title;
