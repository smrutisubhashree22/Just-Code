'use client'

import { Listbox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { languageOptions } from '@/config/config'

export type selectedLanguageOptionProps = {
  language: string;
  version: string;
  aliases: string[];
  runtime?: string;
};

export default function SelectLanguages({
  onSelect,
  selectedLanguageOption,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect: any;
  selectedLanguageOption: selectedLanguageOptionProps;
}) {
  //const [selected, setSelected] = useState(languageOptions[0]);
  //console.log(selected);

  
  
  
  return (
    <Listbox value={selectedLanguageOption} onChange={onSelect}>
      <div className="relative">
     <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate capitalize">
                  {selectedLanguageOption.language} (
                  {selectedLanguageOption.version})
                </span>
              </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
    </Listbox.Button>

        <Listbox.Options
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {languageOptions.map((item) => (
            <Listbox.Option
              key={item.language}
              value={item}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{item.language}({item.version})</span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}
