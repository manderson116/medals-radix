import axios from "axios";
import { useState, useEffect, useRef } from "react";
import {
  Theme,
  Button,
  Flex,
  Heading,
  Badge,
  Container,
  Grid,
} from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import "@radix-ui/themes/styles.css";
import "./App.css";
import Country from "./components/Country";
import NewCountry from "./components/NewCountry";

function App() {
  const [appearance, setAppearance] = useState("dark");
  const [countries, setCountries] = useState([]);
  const medals = useRef([
    { id: 1, name: "gold", color: "#FFD700" },
    { id: 2, name: "silver", color: "#C0C0C0" },
    { id: 3, name: "bronze", color: "#CD7F32" },
  ]);
  const apiEndpoint = "https://olympicmedalsapi-hwhwa9eecffugeg7.northcentralus-01.azurewebsites.net/api/country";

  function toggleAppearance() {
    setAppearance(appearance === "light" ? "dark" : "light");
  }
  const handleDelete = async (id) => {
    const originalCountries = countries;
    console.log(`delete country: ${id}`);
    setCountries(countries.filter((c) => c.id !== id));
    try {
      await axios.delete(`${apiEndpoint}/${id}`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        // country already deleted
        console.log(
          "The record does not exist - it may have already been deleted"
        );
      } else {
        alert("An error occurred while deleting a country");
        setCountries(originalCountries);
      }
    }
  }
  const handleAdd = async (name) => {
    console.log(`add country: ${name}`);
    const { data: post } = await axios.post(apiEndpoint, {
      name: name,
      gold: 0,
      silver: 0,
      bronze: 0,
    });
    setCountries(countries.concat(post));
  };
    //setCountries(
    //  [...countries].concat({
    //    id:
    //      countries.length === 0
    //        ? 1
    //        : Math.max(...countries.map((country) => country.id)) + 1,
    //    name: name,
    //    gold: 0,
    //    silver: 0,
    //    bronze: 0,
    //  })
    //);
  //}
  function handleIncrement(countryId, medalName) {
    const idx = countries.findIndex((c) => c.id === countryId);
    const mutableCountries = [...countries];
    mutableCountries[idx][medalName] += 1;
    setCountries(mutableCountries);
  }
  function handleDecrement(countryId, medalName) {
    const idx = countries.findIndex((c) => c.id === countryId);
    const mutableCountries = [...countries];
    mutableCountries[idx][medalName] -= 1;
    setCountries(mutableCountries);
  }
  function getAllMedalsTotal() {
    let sum = 0;
    medals.current.forEach((medal) => {
      sum += countries.reduce((a, b) => a + b[medal.name], 0);
    });
    return sum;
  }
  useEffect(() => {
    // initial data loaded here
    async function fetchData() {
      const { data: fetchedCountries } = await axios.get(apiEndpoint);
      setCountries(fetchedCountries);
    }
    fetchData();
  }, []);

  return (
    <Theme appearance={appearance}>
      <Button
        onClick={toggleAppearance}
        style={{ position: "fixed", bottom: 20, right: 20, zIndex: 100 }}
        variant="ghost"
      >
        {appearance === "dark" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Flex p="2" pl="8" className="fixedHeader" justify="between">
        <Heading size="6">
          Olympic Medals
          <Badge variant="outline" ml="2">
            <Heading size="6">{getAllMedalsTotal()}</Heading>
          </Badge>
        </Heading>
        <NewCountry onAdd={handleAdd} />
      </Flex>
      <Container className="bg"></Container>
      <Grid pt="2" gap="2" className="grid-container">
        {countries
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((country) => (
            <Country
              key={country.id}
              country={country}
              medals={medals.current}
              onDelete={handleDelete}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          ))}
      </Grid>
    </Theme>
  );
}

export default App;
