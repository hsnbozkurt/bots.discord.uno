import Categories from "./Categories";
import { ApplicationDirectoryCollectionItem, Bot as BotType } from "../discord";

export default function Bot({
  bot: item,
}: {
  bot: ApplicationDirectoryCollectionItem;
}) {
  return (
    <a
      key={item.application.bot.id}
      href={`/bot/${item.application.bot.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="accordion-item border-0 rounded-3 shadow-sm mb-3"
        style={{ padding: "10px" }}
      >
        <figcaption
          className="card-footer d-flex align-items-center border-0  mt-lg-0"
          style={{ padding: "3px" }}
        >
          <BotAvatar bot={item.application.bot} />
          <div className="ps-3">
            <h6 className="fw-semibold lh-base mb-0">
              <span className="fw-semibold me-2 mb-2">
                {item.application.bot.username}
              </span>
              <span className="badge bg-faded-success text-success me-2 mb-2">
                Online
              </span>
              &nbsp;|&nbsp;&nbsp;
              <span className="badge bg-faded-warning text-warning me-2 mb-2">
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  item.application.directory_entry.guild_count
                )}{" "}
                Servers
              </span>
              <Categories categories={item.application.categories} />
            </h6>
            <span className="fs-sm text-muted">{item.application.directory_entry.short_description}</span>
          </div>
        </figcaption>
      </div>
    </a>
  );
}
export function BotAvatar({
  bot,
}: {
  bot: BotType;
}) {
  return (
    <img
      className="rounded-circle"
      src={
        bot.avatar
          ? `https://cdn.discordapp.com/avatars/${bot.id}/${bot.avatar}.png`
          : `https://cdn.discordapp.com/embed/avatars/${0}.png`
      }
    />
  );
}
