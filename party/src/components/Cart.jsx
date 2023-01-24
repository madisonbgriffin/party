import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiOutlineXMark, HiOutlineShoppingBag } from 'react-icons/hi2'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { cartItems } from '../data';

import { useStateContext } from '../../context/StateContext';

const Cart = () => {
  const { totalPrice, totalQuantities, cartItems, showCart, setShowCart, toggleCartItemQuanitity, onRemove, onAdd } = useStateContext();

  return (
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart <span className='text-pink-600 ml-2.5'>({totalQuantities} items)</span> </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setShowCart(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {/* <button type="button" onClick={() => onAdd(product, qty)}>Add to Cart</button> */}

                      {cartItems.length < 1 && (
                        <div className="text-center m-10">
                          <div className='text-9xl flex justify-center'>
                            <HiOutlineShoppingBag/>
                          </div>
                          <h3 className='font-semibold text-xl'>Your shopping bag is empty</h3>
                          <button
                            type="button"
                            onClick={() => setShowCart(false)}
                            className="bg-pink-600 w-full px-6 py-3 mt-10 rounded-md text-white"
                          >
                            Continue Shopping
                          </button>
                        </div>
                      )}

                      <div className="mt-8">
                        {/* {products.length >= 1 && products.map((product) => (
                          <div className="product" key={product.id}>
                            <img src={product.imageSrc} alt={product.imageAlt} className="cart-product-image" />
                            <div className="item-desc">
                              <div className="flex top">
                                <h5>{product.name}</h5>
                                <h4>${product.price}</h4>
                              </div>
                              <div className="flex bottom">
                                <div>
                                <p className="quantity-desc">
                                  <span className="num">{product.quantity}</span>
                                </p>
                                </div>
                                <button
                                  type="button"
                                  className="remove-item"
                                  onClick={() => onRemove(item)}
                                >
                                  <TiDeleteOutline />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))} */}



                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={item.href}>{item.name}</a>
                                      </h3>
                                      <p className="ml-4">${item.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {item.quantity}</p>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-pink-600 hover:text-pink-500"
                                        onClick={() => onRemove(item)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-pink-600 hover:text-pink-500"
                            onClick={() => setShowCart(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Cart