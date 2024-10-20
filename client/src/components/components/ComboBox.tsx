/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComboboxDemoPropsIF {
  value: string | number;
  label: string;
}

interface PropsIF {
  items: ComboboxDemoPropsIF[];
  valueSetter: (value: string) => void;
}

const ComboboxDemo: React.FC<PropsIF> = ({ items, valueSetter }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    valueSetter(value);
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between bg-black text-neutral-500 border-neutral-700 rounded-sm max-sm:w-fit"
        >
          {value
            ? items.find((items) => items.value === value)?.label
            : "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 border-neutral-700 rounded-sm bg-black">
        <Command className="bg-black text-white">
          <CommandInput
            placeholder="Search framework..."
            className="bg-black"
          />
          <CommandList className="bg-black">
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="bg-black">
              {items.map((items) => (
                <CommandItem
                  className="bg-black text-white"
                  key={items.value}
                  value={items.value.toString()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === items.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {items.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ComboboxDemo;
