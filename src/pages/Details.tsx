import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  useEffect(() => {
    
  }, []);

  return <div>details page</div>;
};

export default Details;
