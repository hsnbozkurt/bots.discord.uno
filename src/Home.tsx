import { useQuery } from "@tanstack/react-query"
import { Collections } from "./discord"
import Spinner from "./components/Spinner"
import HomeComponent from "./components/HomeComponent"

function Home() {
  const query = useQuery({
    queryKey:["collections"],
    queryFn: async () => {
      const response = await fetch("https://discord.com/api/v9/application-directory-static/collections?includes_inactive=false&locale=en-US")
      return response.json() as Promise<Collections>
    }
  })
  return (
    <>
    {
      query.isLoading ? (
        <Spinner />
      ) : query.isError ? (
        <div>Error: {query.error.message}</div>
      ) :  !query.data ? (
        <div>No data</div>
      ) : (
        <HomeComponent collections={query.data} />
      )
    }
    </>
  )
}

export default Home
