import { addPeople } from "@/redux/state";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { People } from "../../data/people";
import { PeopleTable } from "./components/PeopleTable";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;
