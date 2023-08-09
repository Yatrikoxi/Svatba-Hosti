import ListFilter from "./components/list/ListFilter";
import ListTable from "./components/list/ListTable";
import Form from "./components/Form";
import { useState } from "react";
import ListSearch from "./components/list/ListSearch";

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
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchedPerson, setSearchedPerson] = useState("");

  const visibleChoice =
    selectedCategory || searchedPerson
      ? person.filter(
          (e) =>
            e.option === selectedCategory ||
            e.sleep === selectedCategory ||
            e.firstName === searchedPerson ||
            e.lastName === searchedPerson
        )
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
            <div className='d-flex justify-content-between'>
              <ListSearch
                onSearchOption={(value) => setSearchedPerson(value)}
              />
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
