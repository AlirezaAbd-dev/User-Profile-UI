import { Menu } from "@headlessui/react";
export default function DropdownItems({ name }: { name: string }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? "bg-button text-white" : "text-white"
          } group flex w-full items-center rounded-sm px-2 py-2 text-xs md:text-sm`}
        >
          {name}
        </button>
      )}
    </Menu.Item>
  );
}
