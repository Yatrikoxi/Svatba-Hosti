interface Individual {
  id: number;
  name: string;
  amount: number;
  option: string;
  sleep: string;
}

interface Props {
  summ: Individual[];
  onDelete: (id: number) => void;
}

const ListTable = ({ summ, onDelete }: Props) => {
  return (
    <table className='table table-bordered'>
      <thead className='table-dark'>
        <tr>
          <th>Jméno</th>
          <th>Počet</th>
          <th>R/K</th>
          <th>Spaní</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {summ.map((indiv) => (
          <tr key={indiv.id}>
            <td className='w-50'>{indiv.name}</td>
            <td className='w-auto'>{indiv.amount}</td>
            <td className='w-auto'>{indiv.option === "family" ? "R" : "K"}</td>
            <td className='w-auto'>{indiv.sleep === "yes" ? "Ano" : "Ne"}</td>
            <td className='w-auto'>
              <button
                className='btn btn-outline-danger'
                onClick={() => onDelete(indiv.id)}
              >
                Smazat
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
