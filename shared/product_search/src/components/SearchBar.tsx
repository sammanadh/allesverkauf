import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type TopBarParam = {
  onSearchTermChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TopBar({ onSearchTermChange }: TopBarParam) {
  return (
    <div className="bg-white">
      {/* Search */}
      <div className="ml-auto flex justify-center">
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
    </div >
  )
}
