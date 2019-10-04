import React from "react";
import { render , fireEvent , cleanup } from "@testing-library/react";
import { App } from "../App";

beforeEach(cleanup);


describe("<App />" , () => {
    test("render the App" , () => {
        const { queryByTestId, debug } = render(<App />);
        expect(queryByTestId("application")).toBeTruthy();
    })
})