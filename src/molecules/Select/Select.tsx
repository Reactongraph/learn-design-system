import React, { useEffect, useRef, useState } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  label = "please select an option......",
  onOptionSelected: handler,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const labelRef = useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const [overlayTop, setOverlayTop] = useState<number>(0);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex);
      setSelectedIndex(optionIndex);
      setIsOpen(false);
    }
  };

  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);

  let selectedOption = null;

  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex];
  }

  return (
    <div className="dse-select">
      <button
      aria-controls="dse-select-list"
        aria-haspopup={true}
        aria-expanded = {isOpen ? true: undefined}
        ref={labelRef}
        className="dse-select__label"
        onClick={() => onLabelClick()}
      >
        {selectedOption == null ? label : selectedOption.label}
        <svg
          className={`dse-select__caret ${
            isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"
          }`}
          width="1rem"
          height="1rem"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen ? (
        <ul role = "menu" id = 'dse-select-list' style={{ top: overlayTop }} className="dse-select__overlay">
          {options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            return (
              <li
                className={`dse-select__option
                ${isSelected ? "dse-select__option--selected" : ""}`}
                onClick={() => onOptionSelected(option, optionIndex)}
                key={option.value}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
export default Select;
