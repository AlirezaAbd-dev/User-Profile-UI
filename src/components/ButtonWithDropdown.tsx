import { Fragment } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Menu, Transition } from "@headlessui/react";
import Button from "./Button";
import DropdownItems from "./DropdownItems";

export default function ButtonWithDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Button Container */}
      <div>
        <Menu.Button className="w-full h-full">
          <Button
            name="More"
            icon={
              <MoreHorizOutlinedIcon className="w-7 group-hover:scale-110" />
            }
          />
        </Menu.Button>
      </div>

      {/* Dropdown Container */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute font-bold tracking-widest left-[80%] top-0 mt-2 p-2 w-36 md:w-56 origin-top-right rounded-xl bg-blueAccent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <DropdownItems name="Login" />
            <DropdownItems name="Join" />
            <DropdownItems name="Change Language" />
            <DropdownItems name="Image & Video API" />
            <DropdownItems name="Apps & Plugins" />
            <DropdownItems name="FAQ" />
            <DropdownItems name="Partnerships" />
            <DropdownItems name="Inprint & Terms" />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
