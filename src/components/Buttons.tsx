"use client";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Button from "./Button";
import ButtonWithDropdown from "./ButtonWithDropdown";

export default function Buttons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-2">
      <Button
        name="Set a status"
        icon={
          <SentimentSatisfiedOutlinedIcon className="w-7 group-hover:scale-110" />
        }
      />
      <Button
        name="Edit profile"
        icon={<CreateOutlinedIcon className="w-7 group-hover:scale-110" />}
      />

      {/* Button With Dropdown */}
      <ButtonWithDropdown />
    </div>
  );
}
