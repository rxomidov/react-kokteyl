import React from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

export default function Home() {
    const [loading, setLoading] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState("a");
    const [cocktails, setCocktails] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(response => response.json())
            .then(data => setCocktails(data.drinks));
    }, [searchTerm])

    return <main>
        <SearchForm setSearchterm={setSearchTerm}/>
        <CocktailList loading={loading} cocktails={cocktails}/>
    </main>;
}
