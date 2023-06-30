"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchInput}`);
  };
  return (
    <form onSubmit={handleSearch} className="flex flex-row gap-3">
      <input
        type="text"
        value={searchInput}
        placeholder="Search Here"
        onChange={(e) => setSearchInput(e.target.value)}
        style={{border:"1px solid"}}
      />
      <button type="submit" className="border-2 bg-lightblue px-6">
        Go
      </button>
    </form>
  );
};

export default Search;
