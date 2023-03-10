import { HiOutlineSearch } from "react-icons/hi"

function Search() {
  return (
    <section className="pb-16 text-2xl text-white">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="search..."
          className="glass w-full bg-transparent py-2 pr-10 pl-4 leading-tight"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <HiOutlineSearch />
        </div>
      </div>
    </section>
  )
}

export default Search
