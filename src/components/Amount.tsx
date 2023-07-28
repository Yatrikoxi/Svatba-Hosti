import { useState } from "react";
import ListTable from "./list/ListTable";

const Amount = () => {
  const [person, setPerson] = useState([
    {
      id: 1,
      name: "Novákovic Pepík",
      amount: 2,
      family: false,
      sleep: true,
    },
    {
      id: 2,
      name: "Novákovic franmta",
      amount: 2,
      family: true,
      sleep: true,
    },
    {
      id: 3,
      name: "Nováaw a",
      amount: 2,
      family: true,
      sleep: false,
    },
  ]);

  return (
    <>
      <div className='d-flex justify-content-end gap-3'>
        <p className='h1'>Celkový počet:</p>
        <p className='h1'>
          {person.reduce((acc, person) => person.amount + acc, 0)}
        </p>
      </div>
      <ListTable
        summ={person}
        onDelete={(id) => setPerson(person.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default Amount;
