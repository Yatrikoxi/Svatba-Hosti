import { useState } from "react";
import ListTable from "./list/ListTable";
import ListFilter from "./list/ListFilter";

const Amount = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [person, setPerson] = useState([
    {
      id: 1,
      name: "Novákovic Pepík",
      amount: 2,
      option: "family",
      sleep: "yes",
    },
    {
      id: 2,
      name: "Novákovic franmta",
      amount: 2,
      option: "friends",
      sleep: "no",
    },
    {
      id: 3,
      name: "Nováaw a",
      amount: 2,
      option: "friends",
      sleep: "yes",
    },
  ]);

  const visibleChoice = selectedCategory
    ? person.filter(
        (e) => e.option === selectedCategory || e.sleep === selectedCategory
      )
    : person;

  return (
    <>
      <div className='d-flex justify-content-end gap-3'>
        <p className='h1'>Celkový počet:</p>
        <p className='h1'>
          {visibleChoice.reduce((acc, person) => person.amount + acc, 0)}
        </p>
      </div>
      <ListFilter onSelectOption={(option) => setSelectedCategory(option)} />
      <ListTable
        summ={visibleChoice}
        onDelete={(id) => setPerson(person.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default Amount;
