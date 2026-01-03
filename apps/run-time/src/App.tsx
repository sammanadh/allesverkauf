import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";

let router = createBrowserRouter([
  {
    path: "/",
    Component: ShopPage,
  },
  {
    path: "/checkout",
    Component: CheckoutPage,
  },
]);

const App = () => {
  return (
    <div>
      <div
        id="sticky-banner"
        className="bg-red-900 sticky top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-default bg-neutral-primary-soft"
      >
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-body">
            <span className="inline-flex items-center justify-center w-6 h-1 shrink-0 me-2.5 bg-neutral-tertiary rounded-full">
              <span className="text-white">RUNTIME</span>
            </span>
          </p>
        </div>
      </div>
      <div className="content">
        <RouterProvider router={router} />,
      </div>
    </div>
  );
};

export default App;
