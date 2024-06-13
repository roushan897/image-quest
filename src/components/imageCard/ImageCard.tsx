import { useNavigate } from "react-router-dom";
import { IData } from "../../types";
import styles from "./card.module.css";

const ImageCard = ({ data }: { data: IData }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.mainCard}
      onClick={() => navigate(`/details/${data.id}`)}
    >
      <img width="100%" src={data?.urls?.small} alt="unsplash image" />
      <h3>{data?.user?.name}</h3>
      <p>{data?.description}</p>
    </div>
  );
};

export default ImageCard;
