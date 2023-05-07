import Styles from "./AddressModal.module.css"
interface AddressLabel {
  icon: any;
  labelName: string;
}

const AddressLabel = ({ icon, labelName }: AddressLabel) => {
  return (
    <p className={Styles.selectLabel}>
      {icon}
      {labelName}
    </p>
  );
};

export default AddressLabel;
