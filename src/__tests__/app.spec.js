import React from "react";
import { render , fireEvent , cleanup } from "@testing-library/react";
import { App } from "../App";

beforeEach(cleanup);


describe("<App />" , () => {
    test("render the App" , () => {
        const { queryByTestId } = render(<App />);
        expect(queryByTestId("application")).toBeTruthy();
    });

    test("render the App and active darkmode", () => {
        const { queryByTestId ,debug } = render(<App />);
        expect(queryByTestId("application")).toBeTruthy();
        expect(queryByTestId("header").classList.contains("darkmode")).toBeFalsy();

        fireEvent.click(queryByTestId("dark-mode-action"));
        expect(queryByTestId("header").classList.contains("darkmode")).toBeTruthy();
    });
})