import React from "react";
import { useGetContactsQuery } from "../api/slices/apiSlice";
import Navbar from "../components/Navbar/Navbar";
import TableWrapper from "../components/Table/TableWrapper";
import Loader from "../components/Loader/Loader";
import Error from "./Error";

const Home = () => {
  const { data: contacts, isLoading, isError } = useGetContactsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error/>
  }

  return (
    <>
      <Navbar />
      <TableWrapper data={contacts} />
    </>
  );
};

export default Home;
