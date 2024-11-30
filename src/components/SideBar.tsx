import apiClient from "@/services/api-client";
import { Box, Heading, HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface FetchedResult {
  count: number;
  results: Genre[];
}

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const SideBar = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchedResult>("/genres")
      .then((res) => setGenres(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <Heading size="3xl" mt="8" ml="5">
        Genres
      </Heading>
      <ul>
        {genres.map((genre) => (
          <Box mt="2" ml="5">
            <li key={genre.name}>
              <HStack>
                <Image
                  height="40px"
                  src={genre.image_background}
                  rounded="md"
                  aspectRatio={1 / 1}
                ></Image>
                <p>{genre.name}</p>
              </HStack>
            </li>
          </Box>
        ))}
      </ul>
    </>
  );
};

export default SideBar;
