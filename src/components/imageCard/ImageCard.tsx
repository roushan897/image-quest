import { IData } from "../../types";
import styles from './card.module.css'

const ImageCard = ({ data }: { data: IData }) => {
  return (
    <div className={styles.mainCard}>
      <img src={data?.urls?.small} alt="" />
      <h3>{data?.user?.name}</h3>
      <p>{data?.description}</p>
    </div>
  );
};

export default ImageCard;
