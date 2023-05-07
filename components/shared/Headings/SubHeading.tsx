
import Styles from "./headings.module.css";
interface subHeading {
  title: string;
}
const SubHeading = ({title}:subHeading) => {
    return <h6 className={Styles.subHeading}>{title}</h6>;

}

export default SubHeading
