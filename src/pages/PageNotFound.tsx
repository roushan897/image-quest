import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "98vw",
        height: "98vh",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        Page not found. 😔
      </div>

      <div style={{ fontSize: "16px", fontWeight: "bold" }}>
        Go to{"  "}
        <span>
          <Link to="/">home page</Link>
        </span>
      </div>
    </div>
  );
};

export default PageNotFound;
