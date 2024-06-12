import { useState } from "react";
import BotFromSearchResult from "./BotFromSearchResult";
import { useSearch } from "../common";

export default function Search({ categoryId }: { categoryId?: number }) {
  const [query, setQuery] = useState("");
  const searchResult = useSearch({
    query,
    categoryId,
  });
  function handleChange() {
    const searchValue = (document.getElementById("searchBot") as HTMLInputElement)!
      .value;
    setQuery(searchValue);
  }
  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        type="text"
        id="searchBot"
        placeholder="Search for a bot"
        aria-label="Search for a bot"
        onChange={handleChange}
      />
      <button
        className="btn btn-secondary"
        type="button"
        onClick={handleChange}
      >
        {searchResult.isLoading ? (
          <span
            className="spinner-grow spinner-grow-sm me-2"
            role="status"
            aria-hidden="true"
          >
            <span className="visually-hidden">Searching</span>
            Searching...
          </span>
        ) : (
          "Search"
        )}
      </button>
      <div className="accordion" id="foundBot">
        {searchResult.isSuccess && searchResult.data
          ? searchResult.data.results.map((result) => (
              <BotFromSearchResult result={result} key={result.data.bot.id} />
            ))
          : searchResult.isError ? (
            <div className="alert alert-danger" role="alert">{searchResult.error.message}</div>
          ) : null}
      </div>
    </div>
  );
}
