import BotFromCollection from "./BotFromCollection";
import Hero from "./Hero";
import Search from "./Search";
import TopCategories from "./TopCategories";
import { Collections } from "../discord";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import {Helmet} from "react-helmet";

function HomeComponent({ collections }: { collections: Collections }) {
  return (
    <main className="page-wrapper border-bottom">
    <Helmet>
      <title>Discord.uno - Discord Bots</title>
      <meta name="description" content="Discord.uno is a directory of Discord bots that you can add to your server. Find the perfect bot for your server on Discord.uno." />
      <meta name="keywords" content="discord bots, discord bot list, discord bot directory, discord bot, discord, discord uno" />
      <meta property="og:title" content="Discord.uno - Discord Bots" />
    </Helmet>
    <NavBar/>
      <Hero />
      <section className="container py-5">
        <h2 className="h2 mb-4 pt-lg-2 pb-lg-3 py-1 text-center">
          Top Categories
        </h2>
        <TopCategories />
        <Search />
        <Link to="/allbots" className="btn btn-outline-primary my-1 mb-3 w-100" type="button">View All Bots</Link>
      </section>
      {collections.map((collection) => (
        <section className="container" key={collection.id}>
          <div className="py-2 py-md-4">
            <h1 className="h2 text-left">{collection.title}</h1>
            <span className="fs-sm text-left d-block mb-3">
              {collection.description}
            </span>
            <div className="accordion">
              {collection.application_directory_collection_items.map((item) => (
                <BotFromCollection bot={item} key={item.application.bot.id} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
export default HomeComponent;
