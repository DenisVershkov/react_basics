import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({ filter, setFilter }) => {
  return (
           <div>
        <MyInput placeholder="Поиск" value={filter.query} onChange={event => setFilter({...filter, query: event.target.value})}/>
        <MySelect
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          value={filter.sort}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
    </div>
  )
}

export default PostFilter
