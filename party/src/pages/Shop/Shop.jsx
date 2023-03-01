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
      <Search />
      <Sort />
      <Filter />
      <Product />
      <Pagination />
      <Preview />
    </>
  )
}

export default Shop
