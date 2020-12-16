import React from "react";

export default function SearchForm({setSearchTerm}) {
  const searchValue = React.useRef("");

  React.useEffect(()=>{
    searchValue.current.focus();
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const serachCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }
  
  return <section className="section">
    <div className="section-title">search cocktails</div>
    <form action="" className="form search-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name" className="">
          search your favourite cocktail
        </label>
        <input type="text" name="name" id="name"
        onChange={serachCocktail} ref={searchValue}/>
      </div>
    </form>
  </section>;
}
