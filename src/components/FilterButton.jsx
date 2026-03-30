function FilterButton ({ name, isPressed, setFilter }) {
  return (
    <button className="px-3 py-1 hover:bg-violet-500 text-violet-500 hover:text-white rounded-full"
            onClick={() => setFilter(name)} 
            aria-pressed={isPressed}>
      <span className="sr-only">Show</span>
      <span>{name}</span>
      <span className="sr-only">Tasks</span>
    </button>
  )
}

export default FilterButton;