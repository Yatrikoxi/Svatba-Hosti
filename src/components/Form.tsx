import image from "../assets/icons8-marriage-64.png";

const Form = () => {
  return (
    <>
      <div className='d-flex pt-4 justify-content-around'>
        <h1 className='mt-3'>Svatba</h1>
        <img
          src={image}
          alt='weding-icon'
        />
      </div>
      <form>
        <div className='mb-3 mt-3'>
          <label
            htmlFor='name'
            className='form-label mt-3'
          >
            Jméno
          </label>
          <input
            id='name'
            type='text'
            className='form-control'
          />
          <label
            htmlFor='number'
            className='form-label mt-3'
          >
            Počet
          </label>
          <input
            id='number'
            type='number'
            className='form-control w-50'
          />
          <div className='pt-3'>
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
            className='form-select mt-3'
            aria-label='Default select example'
          >
            <option selected>Od koho jsou?</option>
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
        </div>
        <button
          className='btn btn-primary'
          type='submit'
        >
          Přidat
        </button>
      </form>
    </>
  );
};

export default Form;
