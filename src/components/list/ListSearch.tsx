interface Props {
  onSearchOption: (option: string) => void;
}

const ListSearch = ({ onSearchOption }: Props) => {
  return (
    <input
      type='search'
      placeholder='Koho hledáš?'
      onChange={(e) => onSearchOption(e.target.value)}
      className='form-control w-25'
    />
  );
};

export default ListSearch;
