import { useQuery } from "@tanstack/react-query";
import { SearchResults } from "./discord";
import { Pagination, styled } from "@mui/material";

export function useSearch({
  query,
  categoryId,
  page,
}: {
  query?: string;
  categoryId?: string;
  page?: number;
}) {
  const searchResult = useQuery({
    queryKey: ["bots", "search", categoryId, query, page],
    queryFn: async () => {
      let url = categoryId
        ? `https://discord.com/api/v9/application-directory-static/search?category_id=${categoryId}&query=${
            query ?? ""
          }&locale=en-US`
        : `https://discord.com/api/v9/application-directory-static/search?query=${
            query ?? ""
          }&locale=en-US`;
      if (page) {
        url += `&page=${page}`;
      }
      const req = await fetch(url);
      const json = await req.json();
      return json as SearchResults;
    },
    enabled: query == undefined || query.length > 0,
  });
  return searchResult;
}

export const CustomPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": [
    {
      color: "inherit",
    },
  ],
});
