import React from "react";
import { render , fireEvent , cleanup } from "@testing-library/react";
import { Checkbox } from "../components/checkbox";

jest.mock("../firebase" , () => ({
    firebase : {
        firestore : jest.fn( () => ({
            collection : jest.fn(() => ({
                doc : jest.fn(() => ({
                    update : jest.fn()
                }))
            }))
        })) 
    }
}));

describe("<Checkbox />" , () => {
    describe("success", () => {
        test("render a checkbox", () => {
            const { queryByTestId, debug } = render(<Checkbox id="1" />);
            expect(queryByTestId("checkbox-action")).toBeTruthy()
        })

        test("test the click event on the checkbox", () => {
            const { queryByTestId, debug } = render(<Checkbox id="1" />);
            fireEvent.click(queryByTestId("checkbox-action"));
        })
    })
})
