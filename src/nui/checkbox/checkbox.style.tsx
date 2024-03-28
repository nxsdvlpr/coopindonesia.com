import { tv } from 'tailwind-variants'

export const checkboxStyle = tv({
  slots: {
    wrapper: 'inline-flex items-center',
    main: 'relative flex cursor-pointer items-center rounded-full p-3',
    checkbox: `before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-200 transition-all before:absolute before:left-2/4 before:top-2/4 before:bg-primary-500 checked:border-primary-500 checked:bg-primary-500  checked:before:bg-primary-500`,
    icon: 'pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100',
    label: 'mt-px cursor-pointer select-none font-medium text-gray-700',
  },
})
