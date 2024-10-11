// src/CardList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const CardList = () => {
  const [userData, setUserData] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get(
          "https://random-data-api.com/api/v2/users?size=5" // Fetching only 5 users
        );
        setUserData(userResponse.data);

        // Fetch Pokémon data (first 5 Pokémon)
        const pokemonIds = [1, 4, 7, 10, 25]; // IDs for Bulbasaur, Charmander, Squirtle, Caterpie, Pikachu
        const pokemonPromises = pokemonIds.map((id) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        );

        // Wait for all Pokémon API requests to complete
        const pokemonResponses = await Promise.all(pokemonPromises);
        const pokemonData = pokemonResponses.map((response) => ({
          id: response.data.id,
          name: response.data.name,
          avatar: response.data.sprites.front_default,
          type: response.data.types
            .map((typeInfo) => typeInfo.type.name)
            .join(", "),
        }));
        setPokemonData(pokemonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-gray-100 p-4">
      <div>
        <h1 className="text-9xl font-kaushan text-darkorange">Card List</h1>
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {/* Display User Cards */}
        {userData.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-lg m-4 p-6 flex flex-col items-center max-w-xs transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-24 h-24 rounded-full border-4 border-orange-500 shadow-md"
            />
            <h2 className="text-2xl font-semibold text-center mt-4 text-gray-800">{`${user.first_name} ${user.last_name}`}</h2>
            <p className="text-center text-gray-600 mt-2">{`${user.gender}`}</p>
            <p className="text-center text-gray-600">{`${user.phone_number}`}</p>
            <p className="text-center text-gray-600">{`${user.username}`}</p>
          </div>
        ))}

        {/* Display Pokémon Cards */}
        {pokemonData.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white rounded-lg shadow-lg m-4 p-6 flex flex-col items-center max-w-xs transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
          >
            <img
              src={pokemon.avatar}
              alt={pokemon.name}
              className="w-24 h-24 rounded-full border-4 border-orange-500 shadow-md"
            />
            <h2 className="text-2xl font-semibold text-center mt-4 text-gray-800">{`${
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
            }`}</h2>
            <p className="text-center text-gray-600 mt-2">{`Type: ${pokemon.type.toUpperCase()}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
