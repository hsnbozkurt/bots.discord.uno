import { useState } from "react";
import Search from "./components/Search";
import { CustomPagination, useSearch } from "./common";
import Spinner from "./components/Spinner";
import BotFromSearchResult from "./components/BotFromSearchResult";
import "./assets/boxicons/css/boxicons.min.css";
import NavBar from "./components/Navbar";
import { Helmet } from "react-helmet";
import { PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
export default function Allbots() {
  const url = new URL(window.location.href);
  const [page, setPage] = useState(
    parseInt(url.searchParams.get("page") ?? "1")
  );

  const query = useSearch({
    page,
  });

  function handlePageChange(page: number) {
    setPage(page);
  }

  return (
    <main className="page-wrapper">
      <Helmet>
        <title>Discord.uno - All Bots</title>
        <meta
          name="description"
          content="Discord.uno is a directory of Discord bots that you can add to your server. Find the perfect bot for your server on Discord.uno."
        />
        <meta
          name="keywords"
          content="discord bots, discord bot list, discord bot directory, discord bot, discord, discord uno"
        />
        <meta property="og:title" content="Discord.uno - Discord Bots" />
      </Helmet>
      <NavBar />
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
