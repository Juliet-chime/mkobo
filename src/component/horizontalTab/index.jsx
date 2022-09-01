import React, { useState, useEffect } from 'react'
import { HorizontalTabWrapper } from './style';

const HorizontalTab
    = ({ options, onChange, width }) => {
        const initialSelectedValue = options.map((item => item))

        const [selectedLabel, setSelectedLabel] = useState("");
        const [selectedValue, setSelectedValue] = useState(initialSelectedValue[0].value);

        const onTabClicked = (value) => () => {
            onChange(value);
            setSelectedValue(value);
        };

        useEffect(() => {
            const selectedOption = options.find((opt) => opt.value === selectedValue);
            setSelectedLabel(selectedOption?.label);
        }, [selectedValue]);
        return (
            <HorizontalTabWrapper width={width}>
                <ul>
                    {options.map((option) => (
                        <li
                            onClick={onTabClicked(option.value)}
                            key={option.value}
                            className={selectedLabel === option.label && "activeTab"}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            </HorizontalTabWrapper>
        )
    }

export default HorizontalTab