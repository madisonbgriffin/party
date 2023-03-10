import { useEffect } from "react"

import {
  Carousel,
  Search,
  Sort,
  Filter,
  Product,
  Pagination,
  Preview,
} from "../../pages"

const Shop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  return (
    <>
      <Carousel />
      <div className="section-container">
        <Search />
      </div>
      <div className="section-container">
        <Sort />
      </div>
      <div className="section-container">
        <Filter />
      </div>
      <div className="section-container">
        <Product />
      </div>
      <div className="section-container">
        <Pagination />
      </div>
      <div className="section-container">
        <Preview />
      </div>
    </>
  )
}

export default Shop
