"use client";

import { createContext, useState } from "react";

const selectedValues: string[] = []; // avoid TS error Type 'string[]' is not assignable to type 'never[]'

const SelectContext = createContext({
    selectedVals: selectedValues,
    selectAndRemoveValue: (val: string) => console.log(val),
    clearValues: () => {},
});

const SelectProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedVals, setSelectedVals] = useState<string[]>([]);

    const selectAndRemoveValue = (val: string) => {
        if (selectedVals.includes(val)) {
            setSelectedVals(selectedVals.filter((v) => v !== val));
        } else {
            setSelectedVals([...selectedVals, val]);
        }
    };

    const clearValues = () => {
        setSelectedVals([]);
    };

    return (
        <SelectContext.Provider
            value={{ selectedVals, selectAndRemoveValue, clearValues }}
        >
            {children}
        </SelectContext.Provider>
    );
};

export { SelectContext, SelectProvider };
