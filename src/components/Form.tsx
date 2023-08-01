import image from "../assets/icons8-marriage-64.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Ale no tak. Přece má delší jméno." })
    .max(15)
    .regex(new RegExp(/^[a-zA-Z0-9À-ž]+$/), "Tady používáme pouze písmena"),
  lastName: z
    .string()
    .min(3, { message: "Ale no tak. Přece má delší příjmení." })
    .max(15)
    .regex(new RegExp(/^[a-zA-Z0-9À-ž]+$/), "Tady používáme pouze písmena"),
  amount: z
    .number({ invalid_type_error: "Alespoň jeden!" })
    .min(1)
    .max(10, { message: "Deset by stačilo ne?" }),
  option: z.enum(["family", "friends"]),
  sleep: z.enum(["yes", "no"]),
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
    // reset,
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
            {...register("firstName")}
            id='name'
            type='text'
            className='form-control'
            placeholder='Jméno'
          />
          {errors.firstName && (
            <p className='text-danger'>{errors.firstName.message}</p>
          )}
          <label htmlFor='name'>Jméno</label>
        </div>
        <div className='mb-1 form-floating'>
          <input
            {...register("lastName")}
            id='name'
            type='text'
            className='form-control'
            placeholder='Příjmení'
          />
          {errors.lastName && (
            <p className='text-danger'>{errors.lastName.message}</p>
          )}
          <label htmlFor='name'>Příjmení</label>
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
              {...register("option")}
              type='radio'
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
        <div className='pt-4 ms-2'>
          <p className=''>Přespání?</p>
          <div className='form-check pb-2'>
            <input
              className='form-check-input'
              {...register("sleep")}
              type='radio'
              value='yes'
              id='yes'
            />
            <label
              className='form-check-label'
              htmlFor='yes'
            >
              Ano
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              {...register("sleep")}
              type='radio'
              value='no'
              id='no'
            />
            <label
              className='form-check-label'
              htmlFor='no'
            >
              Ne
            </label>
          </div>
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
