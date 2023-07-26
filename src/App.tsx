import Amount from "./components/Amount";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className='container vh-100 d-flex mx-auto bg-light'>
        <div className='row h-100 w-100'>
          <div className='col-3 bg-secondary-subtle'>
            <Form />
          </div>
          <div className='col-9 mt-5 px-5'>
            <Amount />
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              maiores voluptatem accusantium porro unde quidem atque expedita
              quo sequi eius repellat neque doloremque vitae rem, similique
              harum nemo placeat laborum!
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
