import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { FaSearch, FaSpotify } from "react-icons/fa";
import { Layout } from "../../layout";

import styles from "./styles.module.scss";
import { getAccessToken, searchDataSpotify } from "../../services/api";

export function Search() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(value);
  };

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    const spotifyToken = localStorage.getItem("spotifyToken")!;

    const searchResult = await searchDataSpotify(spotifyToken, searchValue);
    console.log(searchResult);
  };

  useEffect(() => {
    const fetchAccessToken = async () => {
      const { access_token: spotifyToken } = await getAccessToken();

      localStorage.setItem("spotifyToken", spotifyToken);
    };

    fetchAccessToken();
  }, []);

  return (
    <Layout>
      <section className={styles.container}>
        <h1>
          <FaSpotify /> Spotify Clone
        </h1>

        <form className={styles.searchContainer} onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Artist, Songs or albums"
            name="searchInput"
            value={searchValue}
            onChange={handleInputChange}
          />

          <button type="submit">
            <FaSearch /> Search
          </button>
        </form>
      </section>
    </Layout>
  );
}
