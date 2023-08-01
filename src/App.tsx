import ListFilter from "./components/list/ListFilter";
import ListTable from "./components/list/ListTable";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleChoice = selectedCategory
    ? person.filter(
        (e) => e.option === selectedCategory || e.sleep === selectedCategory
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
            <ListFilter
              onSelectOption={(option) => setSelectedCategory(option)}
            />
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
