import { useState } from "react";
import Search from "./components/Search";
import { useSearch } from "./common";
import Spinner from "./components/Spinner";
import BotFromSearchResult from "./components/BotFromSearchResult";
import "./assets/boxicons/css/boxicons.min.css"
export default function Allbots() {
  const [page, setPage] = useState(1);
  const query = useSearch({
    page,
  });
  function handlePageChange(amount: number | "first" | "last") {
    if (amount === "first") {
      setPage(0);
    }
    if (amount === "last") {
      setPage(query.data!.num_pages);
    }
    if (typeof amount === "number") {
      setPage(page + amount);
    }
    console.log(query.status)
  }
  return (
    <main className="page-wrapper">
      <section className="position-relative py-5 border-bottom">
        <div className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
          <div className="align-items-end gy-3 mb-4 pb-lg-3 pb-1">
            <h1 className="mb-2 mb-md-0">Total Bots</h1>
            <span className="text-muted">
              Find the best bots for your server..
            </span>
          </div>
          <Search />
          {query.isPending ? (
            <Spinner />
          ) : query.isSuccess ? (
            <>
              {query.data!.results.map((bot) => (
                <BotFromSearchResult result={bot} key={bot.data.bot.id} />
              ))}
            </>
          ) : (
            <div className="alert alert-danger">Error: {query.status}</div>
          )}
        </div>
        <nav aria-label="Page navigation">
          <ul className="pagination mb-4" style={{ justifyContent: "center" }}>
            <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
              <button onClick={() => handlePageChange("first")} className="page-link">
                <i className="bx bx-chevrons-left ms-n1 me-1"/>
              </button>
            </li>
            <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
              <button onClick={() => handlePageChange(-1)} className="page-link">
                <i className="bx bx-chevron-left me-1"/>
              </button>
            </li>
          {Array.from({ length: Math.min(3, query.data?.num_pages ?? 0) }, (_, i) => (
            <li
              key={i}
              className={`page-item ${page === i ? "active" : ""}`}
            >
              <button onClick={() => setPage(i)} className="page-link">
                {i}
              </button>
            </li>
          ))}
            <li className={`page-item ${page === query.data?.num_pages ? "disabled" : ""}`}>
              <button onClick={() => handlePageChange(1)} className="page-link">
                <i className="bx bx-chevron-right me-1"/>
              </button>
            </li>
            <li className={`page-item ${page === query.data?.num_pages ? "disabled" : ""}`}>
              <button onClick={() => handlePageChange("last")} className="page-link">
                <i className="bx bx chevrons-right me-1"/>
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
