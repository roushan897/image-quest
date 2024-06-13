import { IData, IListViewProps } from "../../types";
import ImageCard from "../imageCard/ImageCard";
import styles from "./list.module.css"

const ListView = ({ data }: IListViewProps) => {
  return (
    <div className={styles.mainList}>
      {data?.map((item: IData, idx: number) => (
        <ImageCard key={idx} data={item} />
      ))}
    </div>
  );
};

export default ListView;
