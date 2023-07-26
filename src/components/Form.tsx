import image from "../assets/icons8-marriage-64.png";
import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  const person = { name: "", amount: 0, family: false, friends: false };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) console.log(nameRef.current.value);
    if (numberRef.current !== null) console.log(numberRef.current.value);
  };
  return (
    <>
      <div className='d-flex mt-4 justify-content-around'>
        <h1 className='mt-3'>Svatba</h1>
        <img
          src={image}
          alt='weding-icon'
        />
      </div>
      <p className='m-0 pt-2 pb-2 text-secondary'>Tak koho si tam pozveme?</p>
      <form onSubmit={handleSubmit}>
        <div className='mb-1 form-floating'>
          <input
            ref={nameRef}
            id='name'
            type='text'
            className='form-control'
            placeholder='Jméno'
          />
          <label htmlFor='name'>Jméno</label>
        </div>
        <div className='form-floating'>
          <input
            ref={numberRef}
            id='number'
            type='number'
            className='form-control'
            placeholder='Počet'
          />
          <label htmlFor='number'>Počet</label>
        </div>
        <div className='pt-4'>
          <div className='form-check pb-2'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='family'
            />
            <label
              className='form-check-label'
              htmlFor='family'
            >
              Rodina
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='friends'
            />
            <label
              className='form-check-label'
              htmlFor='friends'
            >
              Kamarádi
            </label>
          </div>
        </div>

        <select
          className='form-select mt-3 mb-3 p-2'
          aria-label='Default select example'
        >
          <option defaultValue={0}>Z jaké strany?</option>
          <option value='1'>Hanička</option>
          <option value='2'>Tom</option>
        </select>
        <div className='form-check mt-3'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='defaultCheck1'
          />
          <label
            className='form-check-label'
            htmlFor='defaultCheck1'
          >
            Přespání
          </label>
        </div>
        <button
          className='btn btn-primary mt-4'
          type='submit'
        >
          Přidat
        </button>
      </form>
    </>
  );
};

export default Form;
