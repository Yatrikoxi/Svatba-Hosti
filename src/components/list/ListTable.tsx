interface Individual {
  id: number;
  name: string;
  amount: number;
  family: boolean;
  sleep: boolean;
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
            <td>{indiv.name}</td>
            <td>{indiv.amount}</td>
            <td>{indiv.family ? "R" : "K"}</td>
            <td>{indiv.sleep ? "Ano" : "Ne"}</td>
            <td>
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
