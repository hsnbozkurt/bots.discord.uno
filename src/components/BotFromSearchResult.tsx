import { Result } from "../discord";
import { BotAvatar } from "./Bot";

export default function BotFromSearchResult({ result }: { result: Result }) {
  return (
    <a
      href={`/bot/${result.data.bot.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="accordion-item border-0 rounded-3 shadow-sm mb-3"
        style={{ padding: "10px" }}
      >
        <figcaption
          className="card-footer d-flex align-items-center border-0 mt-lg-0"
          style={{ padding: "3px" }}
        >
          <BotAvatar bot={result.data.bot} />
          <div className="ps-3">
            <h6 className="fw-semibold lh-base mb-0">
              <span className="fw-semibold me-2 mb-2">
                {result.data.bot.global_name ?? result.data.bot.username}
              </span>
              <span className="badge bg-faded-info text-info me-2 mb-2">
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  result.data.directory_entry.guild_count
                )}{" Servers"}
              </span>
            </h6>
            <span className="fs-sm text-muted">
              {result.data.directory_entry.short_description}
            </span>
          </div>
        </figcaption>
      </div>
    </a>
  );
}
