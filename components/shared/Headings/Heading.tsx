import Styles from "./headings.module.css";
interface heading {
  title: string;
}
function Heading({ title }: heading) {
  return <h1 className={Styles.Heading}>{title}</h1>;
}

export default Heading;
