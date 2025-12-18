import { ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type TopBarParam = {
  onSearchTermChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TopBar({ onSearchTermChange }: TopBarParam) {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Search */}
              <div className="ml-auto flex">
                <div>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="size-4 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                      </div>
                      <input
                        id="price"
                        name="price"
                        type="text"
                        placeholder="Search"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        onChange={onSearchTermChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div >
  )
}
