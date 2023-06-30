import React from "react";
type PageProps = {
  params: {
    keyword: string;
  };
};

const simulateSearch = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Successful!!!");
    }, 3000);
  });
};
const page = async ({ params: { keyword } }: PageProps) => {
  const tmp = await simulateSearch();
  return <div>This is your search result for "{keyword}"</div>;
};

export default page;
