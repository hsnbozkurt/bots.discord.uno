import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ApplicationResult, SimularBots } from "./discord";
import "./assets/botspagestyles.css";
import "./assets/boxicons.min.css";
import { useState } from "react";
import Spinner from "./components/Spinner";
import BotFromSearchResult from "./components/BotFromSearchResult";
import MarkdownRenderer from "./components/MarkdownRenderer";
import { CustomPagination } from "./common";
import NavBar from "./components/Navbar";
import { Helmet } from "react-helmet";
import { PaginationItem } from "@mui/material";
export default function Bot({ id }: { id?: string | undefined }) {
  const paramBotId = useParams().id;
  const botId = id || paramBotId;
  const bot = useQuery({
    queryKey: ["bot", botId],
    queryFn: async () => {
      const res = await fetch(
        `https://discord.com/api/v9/application-directory-static/applications/${botId}`
      );
      if (!res.ok) throw new Error("Failed to load bot");
      return res.json() as Promise<ApplicationResult>;
    },
    enabled: !!botId,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [simularBotsPage, setSimularBotsPage] = useState(parseInt(searchParams.get("relevant_bots_page") ?? "1"));
  const simularBots = useQuery({
    queryKey: ["simularBots", botId, simularBotsPage],
    queryFn: async () => {
      const res = await fetch(
        `https://discord.com/api/v9/application-directory-static/applications/${botId}/similar?page=${simularBotsPage}`
      );
      if (!res.ok) throw new Error("Failed to load similar bots");
      return res.json() as Promise<SimularBots>;
    },
    enabled: !!botId,
  });
  if (!botId) {
    return (
      <div>
        <h1>How did you get here?</h1>
      </div>
    );
  }
  if (bot.isLoading) {
    return <Spinner />;
  }
  if (bot.isError) {
    return (
      <div>
        <h1>Bot not found</h1>
      </div>
    );
  }
  if (!bot.data) {
    return (
      <div>
        <h1>Bot not found</h1>
      </div>
    );
  }
  return (
    <main className="page-wrapper">
      <Helmet>
        <title>{bot.data.bot.username} - Discord.uno</title>
        <meta
          name="description"
          content={bot.data.directory_entry.detailed_description ?? ""}
        />
        <meta
          name="keywords"
          content={`discord bots, discord bot list, discord bot directory, discord bot, discord, discord uno, ${bot.data.bot.username}, ${bot.data.bot.username} invite`}
        />
        <meta property="og:title" content={`${bot.data.bot.username} - Discord.Uno`} />
      </Helmet>
    <NavBar/>
      <section className="container mt-4 mb-5 pt-2 pb-lg-5">
        <div className="row gy-4"></div>
      </section>
      <section className="container pb-lg-5 border-bottom">
        <div className="row gy-md-5 gy-4">
          <div className="col-lg-9 col-md-8 order-md-1">
            <div className="mb-4 mb-lg-5">
              <BotFromSearchResult
                result={{
                  data: bot.data,
                }}
              />
            </div>
            <div className="text-center">
              <Link
                to="#botDetails"
                className="btn btn-primary fw-semibold w-100 d-md-none mb-3"
                data-scroll
              >
                <i className="bx bxs-chevron-down align-middle me-2 "></i>
                Click to view bot information
              </Link>
            </div>
            <h3 className="h4 mb-4 pt-2 pt-md-0">Description</h3>
            <div
              className="accordion-item border-0 rounded-3 shadow-sm mb-3"
              style={{ padding: "10px" }}
            >
              <p className="card-footer d-flex align-items-center border-0  mt-lg-0">
                <MarkdownRenderer
                  markdownText={
                    bot.data.directory_entry.detailed_description ?? ""
                  }
                />
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 order-md-2 position-relative"
            id="botDetails"
          >
            <div className="sticky-top ps-lg-4" style={{ top: "105px" }}>
              <a
                href={`https://discord.com/oauth2/authorize?client_id=${bot.data.bot.id}`}
                target="_blank"
                className="btn btn-lg btn-outline-secondary mb-3"
                style={{ width: "--webkit-fill-available" }}
              >
                <i className="bx bx-plus me-2 lead"></i>Invite
              </a>
              {bot.data.directory_entry.external_urls?.map((url) => (
                <a
                  key={url.url}
                  href={url.url}
                  target="_blank"
                  className="btn btn-lg btn-outline-secondary mb-3"
                  style={{ width: "--webkit-fill-available" }}
                >
                  <img
                    src={`//f7.allesedv.com/16/${new URL(url.url).hostname}`}
                    alt={new URL(url.url).hostname}
                    className="me-2"
                    width={16}
                    height={16}
                  />
                  {url.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <h3 className="h4 mb-4">Similar bots</h3>
        <div className="row gy-4">
          {simularBots.isLoading && <Spinner />}
          {simularBots.isError && (
            <div>
              <h1>Failed to load similar bots</h1>
            </div>
          )}
          {simularBots.data?.applications.map((result) => (
            <div key={result.bot.id} className="col-lg-4 col-md-6">
              <BotFromSearchResult
                result={{
                  data: result
                }}
              />
            </div>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <CustomPagination
              page={simularBotsPage}
              onChange={(_e, page) => {
                setSimularBotsPage(page);
                setSearchParams({ relevant_bots_page: page.toString() });
              }}
              count={simularBots.data?.num_pages ?? 1}
              color="secondary"
              size="large"
              showFirstButton
              showLastButton
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`?relevant_bots_page=${item.page}`}
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
