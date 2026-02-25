
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

type HeaderParam = {
  onCartClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Header({ onCartClick }: HeaderParam) {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div>
              </div>

              {/* Cart */}
              <div className="ml-auto flow-root">
                <button className="group -m-2 flex items-center p-2" onClick={onCartClick}>
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                  <span className="sr-only">items in cart, view bag</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div >
  )
}
