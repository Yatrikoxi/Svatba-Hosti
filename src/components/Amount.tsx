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
    {
      id: 2,
      name: "Novákovic Pepík",
      number: 2,
      side: "H",
      family: true,
      sleep: false,
    },
    {
      id: 3,
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
      <table className='table table-bordered'>
        <tr>
          <th scope='col'>Jméno</th>
          <th scope='col'>Počet</th>
          <th scope='col'>R/K</th>
          <th scope='col'>Spaní</th>
        </tr>
        {person.map(({ id, name, side, number, sleep }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{number}</td>
            <td>{side}</td>
            <td>{sleep}</td>
            <button className='btn btn-primary'>Smazat</button>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Amount;
