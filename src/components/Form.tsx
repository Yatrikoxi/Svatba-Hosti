import image from "../assets/icons8-marriage-64.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  id: z.number().min(1).max(150),
  name: z.string().min(1, { message: "Ale no tak. Přece má jméno." }).max(25),
  amount: z.number({ invalid_type_error: "Alespoň jeden!" }).min(1).max(10),
  option: z.union([z.enum(["family", "friends"]), z.null()]).nullable(),
  sleep: z.union([z.enum(["yes", "no"]), z.null()]).nullable(),
});

type PersonFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: PersonFormData) => void;
}

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonFormData>({ resolver: zodResolver(schema) });

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-1 form-floating'>
          <input
            {...register("name")}
            id='name'
            type='text'
            className='form-control'
            placeholder='Jméno'
          />
          {errors.name && <p className='text-danger'>{errors.name.message}</p>}
          <label htmlFor='name'>Jméno</label>
        </div>
        <div className='form-floating'>
          <input
            {...register("amount", { valueAsNumber: true })}
            id='amount'
            type='number'
            className='form-control'
            placeholder='Počet'
          />
          {errors.amount && (
            <p className='text-danger'>{errors.amount.message}</p>
          )}
          <label htmlFor='amount'>Počet</label>
        </div>
        <div className='pt-4 ms-2'>
          <div className='form-check pb-2'>
            <input
              className='form-check-input'
              type='radio'
              {...register("option")}
              name='flexRadioDefault'
              value='family'
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
              {...register("option")}
              type='radio'
              value='friends'
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

        <div className='form-check mt-3 ms-2'>
          <input
            className='form-check-input'
            type='checkbox'
            value='yes'
            id='defaultCheck1'
            {...register("sleep")}
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
