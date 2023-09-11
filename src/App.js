import { useEffect, useState } from "react";
export default function App() {
  const [fact, setFact] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  async function getFact() {
    const url =
      "https://numbersapi.p.rapidapi.com/1492/year?json=true&fragment=true";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "064f7ac8eamsh1e1277dd09ef078p133386jsn94ca992658ca",
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com"
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setYear(result.number);
      setDate(result.date);
      setFact(result.text);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(function () {
    getFact();
  }, []);
  return (
    <div className="App">
      <h1>
        The year is {year}. {date ? `On ${date}, ` : ""}
        {fact}.{" "}
      </h1>
      <button onClick={getFact}>Get Fact</button>
    </div>
  );
}
