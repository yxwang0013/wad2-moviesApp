import React, { useContext } from "react";
import PageTemplate from '../components/templatePeopleListPage'
import { PeoplesContext } from "../contexts/peoplesContext";
import AddPeopleButton from '../components/buttons/addPeopleReview'

const PeopleListPage = () => {
  const context = useContext(PeoplesContext)
  const peoples = context.peoples.filter((p) => {
    return !("mark" in p)
  })
  return (
    <PageTemplate
      title='Famous Actor'
      peoples={peoples}
      action={(people) => {
        return <AddPeopleButton people={people} />
      }}
    />
  );
};

export default PeopleListPage;