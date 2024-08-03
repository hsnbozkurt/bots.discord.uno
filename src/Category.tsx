import { useState } from "react";
import Search from "./components/Search";
import { CustomPagination, useSearch } from "./common";
import Spinner from "./components/Spinner";
import BotFromSearchResult from "./components/BotFromSearchResult";
import "./assets/boxicons/css/boxicons.min.css";
import NavBar from "./components/Navbar";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { PaginationItem } from "@mui/material";
const categories = [
  {
    "id": 4,
    "name": "Entertainment"
  },
  {
    "id": 6,
    "name": "Games"
  },
  {
    "id": 8,
    "name": "Moderation and Tools"
  },
  {
    "id": 9,
    "name": "Social"
  },
  {
    "id": 10,
    "name": "Utilities"
  }
];
export default function Category() {
  const category = useParams().category;
  const categoryName = categories.find((c) => c.id === parseInt(category ?? "999"))?.name;
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get("page") ?? "1"));

  const query = useSearch({
    page,
    categoryId: category,
  });
  if (!category) {
    return (
        <div>
            <h1>How did you get here?</h1>
        </div>
    )
  }
  if (!categoryName) {
    return (
        <div>
            <h1>Naber</h1>
        </div>
    )
  }
  function handlePageChange(page: number) {
    setPage(page);
    setSearchParams({ page: page.toString() });
  }

  return (
    <main className="page-wrapper">
      <Helmet>
        <title>Discord.uno - Bots in {categoryName} {page > 1 ? `Page ${page}` : ""}</title>
        <meta
          name="description"
          content={`Discord.uno is a directory of Discord bots that you can add to your server. Find the perfect bot for your server in ${categoryName} on Discord.uno.`}
        />
        <meta
          name="keywords"
          content={`discord bots, discord bot list, discord bot directory, discord bot, discord, discord uno, ${categoryName} discord bot`}
        />
        <meta property="og:title" content={`Discord.uno - Bots in ${categoryName} ${page > 1 ? `Page ${page}` : ""}`} />
      </Helmet>
      <NavBar />
      <section className="position-relative py-5 border-bottom">
        <div className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
          <div className="align-items-end gy-3 mb-4 pb-lg-3 pb-1">
            <h1 className="mb-2 mb-md-0">Bots in {categoryName}</h1>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <CustomPagination
              count={query.data?.num_pages ?? 1}
              page={page}
              onChange={(_e, page) => handlePageChange(page)}
              color="secondary"
              size="large"
              showFirstButton
              showLastButton
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`?page=${item.page}`}
                  {...item}
                />
              )}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
