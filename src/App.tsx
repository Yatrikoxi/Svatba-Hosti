import Amount from "./components/Amount";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className='container vh-100 d-flex mx-auto bg-light'>
        <div className='row h-100 w-100'>
          <div className='col-3 bg-secondary-subtle'>
            <Form onSubmit={(newPerson) => console.log(newPerson)} />
          </div>
          <div className='col-9 mt-5'>
            <Amount />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
