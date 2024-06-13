import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import PaginationButton from "../components/Pagination/Pagination";
import ListView from "../components/listView/ListView";
import { netWrapper } from "../utils/network";

const Home = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [query, setQuery] = useState("car");
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await netWrapper(
      `/search/photos?query=${query}&page=${page}&per_page=6`
    );

    console.log(res);

    setTotalPage(res?.data?.total_pages || 0);

    setData(res?.data?.results);
  };

  const handleSearch = () => {
    setPage(1);
    console.log(query, page);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <Navbar handleInputChange={setQuery} handleSearch={handleSearch} value={query} />
      <ListView data={data || []} />
      {/* onChange={handleChange} */}
      <PaginationButton
        count={totalPage || 10}
        page={page}
        onChange={(event: React.ChangeEvent, page: number) => setPage(page)}
      />
    </div>
  );
};

export default Home;
