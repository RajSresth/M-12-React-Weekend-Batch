import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, removeItem, deleteItem, clearCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // quantity total
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // priceTotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = cartItems.length ? 49 : 0;
  const tax = cartItems.length ? +(subtotal * 0.05).toFixed(2) : 0;
  const grandTotal = +(subtotal + shipping + tax).toFixed(2);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);
  };

  const getImageUrl = (image) => {
    if (Array.isArray(image)) return image[0];
    return image || "https://via.placeholder.com/260x260?text=No+Image";
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 p-10 shadow-2xl shadow-slate-800/30 text-white mb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-2">
                Shopping Cart
              </p>
              <h1 className="text-4xl font-semibold leading-tight">
                Your Stylish Cart Awaits
              </h1>
              <p className="mt-3 text-slate-300 max-w-2xl">
                Review your items, adjust quantities, and continue to checkout
                with confidence.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 border border-white/10 p-6 sm:p-8 shadow-lg shadow-slate-900/20">
              <div className="text-sm text-slate-300">Cart Summary</div>
              <div className="mt-4 space-y-3 text-white">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Subtotal</span>
                  <span> {formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Shipping</span>
                  <span>{shipping ? formatCurrency(shipping) : "Free"}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Taxes</span>
                  <span>{formatCurrency(tax)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 shadow-xl shadow-slate-200/80 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-blue-500 mb-4">
              Your cart is empty
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Start Shopping for Dream Products
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Add items to your bag and they will appear here with an elegant
              summary and fast checkout options.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-400/20 hover:bg-blue-700 transition"
            >
              Browse Shop
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/70 ring-1 ring-slate-200"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-48 shrink-0 rounded-3xl overflow-hidden bg-slate-100">
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.title}
                        className="h-48 w-48 object-cover"
                      />
                    </div>

                    <div className="grow space-y-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                            {item.category || "Product"}
                          </p>
                          <h3 className="text-md font-semibold text-slate-900">
                            {item.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-slate-900">
                            {formatCurrency(item.price)}
                          </p>
                          {item.oldPrice && (
                            <p className="text-sm text-slate-400 line-through">
                              {formatCurrency(item.oldPrice)}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              dispatch(removeItem({ id: item.id }))
                            }
                            className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-slate-700 shadow-sm hover:bg-slate-100 transition text-md font-medium"
                          >
                            −
                          </button>
                          <span className="mx-4 min-w-8 text-center font-semibold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => dispatch(addItem(item))}
                            className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-slate-700 shadow-sm hover:bg-slate-100 transition text-md font-medium"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => dispatch(deleteItem({ id: item.id }))}
                          className="py-2 px-4 rounded-xl hover:cursor-pointer flex items-center justify-center text-red-600 shadow-sm bg-slate-100 hover:bg-slate-200 transition text-md font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-center">
                <button className="rounded-lg bg-blue-100 px-9 py-3 text-blue-700 font-semibold text-lg hover:cursor-pointer"
                onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <aside className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    Order Summary
                  </p>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Ready to checkout?
                  </h2>
                </div>
                <div className="rounded-2xl bg-blue-100 px-4 py-2 text-blue-700 font-semibold">
                  {cartItems.length} items
                </div>
              </div>

              <div className="space-y-4 text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>{shipping ? formatCurrency(shipping) : "Free"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated Tax</span>
                  <span>{formatCurrency(tax)}</span>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between text-lg font-semibold text-slate-900">
                  <span>Total</span>
                  <span>{formatCurrency(grandTotal)}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Taxes and shipping calculated at checkout. You can always
                  change your order before payment.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <button
                  type="button"
                  className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition"
                >
                  Checkout Now
                </button>
                <Link
                  to="/shop"
                  className="w-full inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
