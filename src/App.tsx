import ListFilter from "./components/list/ListFilter";
import ListTable from "./components/list/ListTable";
import Form from "./components/Form";
import { useState } from "react";
import ListSearch from "./components/list/ListSearch";

function removeDiacritics(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function App() {
  const [person, setPerson] = useState([
    {
      id: 0,
      firstName: "První",
      lastName: "host",
      amount: 1,
      option: "family",
      sleep: "yes",
    },
    {
      id: 1,
      firstName: "První",
      lastName: "host",
      amount: 1,
      option: "family",
      sleep: "yes",
    },
    {
      id: 2,
      firstName: "Prví",
      lastName: "host",
      amount: 1,
      option: "family",
      sleep: "yes",
    },
    {
      id: 3,
      firstName: "Pvní",
      lastName: "host",
      amount: 1,
      option: "family",
      sleep: "yes",
    },
    {
      id: 4,
      firstName: "Prní",
      lastName: "host",
      amount: 1,
      option: "family",
      sleep: "yes",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const updateSearchTerm = (term: string) => {
    setSearchTerm(removeDiacritics(term.toLowerCase()));
  };

  const visibleChoice =
    selectedCategory || searchTerm
      ? person
          .filter(
            (e) =>
              (!selectedCategory ||
                e.option === selectedCategory ||
                e.sleep === selectedCategory) &&
              (!searchTerm ||
                removeDiacritics(e.firstName.toLowerCase()).includes(
                  searchTerm
                ) ||
                removeDiacritics(e.lastName.toLowerCase()).includes(searchTerm))
          )
          .sort((a, b) => {
            if (searchTerm) {
              const scoreA = [...searchTerm].filter((letter) =>
                (
                  removeDiacritics(a.firstName) + removeDiacritics(a.lastName)
                ).includes(letter)
              ).length;
              const scoreB = [...searchTerm].filter((letter) =>
                (
                  removeDiacritics(b.firstName) + removeDiacritics(b.lastName)
                ).includes(letter)
              ).length;
              return scoreB - scoreA;
            } else {
              return a.id - b.id;
            }
          })
      : person;

  return (
    <>
      <div className='container vh-100 d-flex mx-auto bg-light'>
        <div className='row h-100 w-100'>
          <div className='col-3 bg-secondary-subtle'>
            <Form
              onSubmit={(data) =>
                setPerson([...person, { ...data, id: person.length + 1 }])
              }
            />
          </div>
          <div className='col-9 mt-5'>
            <div className='d-flex justify-content-end gap-3'>
              <p className='h1'>Celkový počet:</p>
              <p className='h1'>
                {visibleChoice.reduce((acc, person) => person.amount + acc, 0)}
              </p>
            </div>
            <div className='d-flex justify-content-between mb-4'>
              <ListSearch onSearchOption={updateSearchTerm} />
              <ListFilter
                onSelectOption={(option) => setSelectedCategory(option)}
              />
            </div>
            <ListTable
              summ={visibleChoice}
              onDelete={(id) => setPerson(person.filter((e) => e.id !== id))}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
