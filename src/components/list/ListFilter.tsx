interface Props {
  onSelectOption: (option: string) => void;
}

const ListFilter = ({ onSelectOption }: Props) => {
  return (
    <select
      className='form-select w-25 mb-3'
      onChange={(event) => onSelectOption(event.target.value)}
    >
      <option value=''>Výběr</option>
      <option value='family'>Rodina</option>
      <option value='friends'>Kamarádi</option>
      <option value='yes'>Spaní</option>
    </select>
  );
};

export default ListFilter;
