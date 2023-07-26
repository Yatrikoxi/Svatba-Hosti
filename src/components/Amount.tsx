import { useState } from "react";

const Amount = () => {
  const person = [
    {
      id: 1,
      name: "Novákovic Pepík",
      number: 2,
      side: "H",
      family: true,
      sleep: false,
    },
  ];
  // const total = person.reduce((acc, number) => acc + number.value, 0);
  const [number, setNumber] = useState(2);
  return (
    <>
      <div className='d-flex justify-content-end gap-3'>
        <p className='h1'>Celkový počet:</p>
        <p className='h1'>{number}</p>
      </div>
      <ul className='list-group d-flex flex-column'>
        {person.map(({ id, name, number }) => (
          <li
            className='list-group-item d-flex justify-content-between'
            key={id}
          >
            <p className='m-0 py-2'>
              {name}, počet: {number}
            </p>
            <button className='btn btn-danger'>Smazat</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Amount;
