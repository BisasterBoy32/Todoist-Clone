import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Header } from "../components/layout/Header";

beforeEach(cleanup);


jest.mock("../context", () => ({
    useSelectedProjectValue: jest.fn(() => ({
        selectedProject: "1",
    })),
    useProjectsValue: jest.fn(() => ({
        projects: ["project1"],
        setProjects: jest.fn()
    }))
}))


describe("<Header />" , () => {

    test("render header and active dark mode" , () => {
        let darkMode = false;
        const setDarkMode = jest.fn();

        const { queryByTestId } = render(
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
        );
        expect(queryByTestId("header")).toBeTruthy();

        expect(queryByTestId("header").classList.contains("darkmode")).toBeFalsy();
        fireEvent.click(queryByTestId("dark-mode-action"));
        expect(setDarkMode).toHaveBeenCalled();
    });

    test("render header and show quick add task", () => {
        let darkMode = false;
        const setDarkMode = jest.fn();

        const { queryByTestId } = render(
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
        );
        expect(queryByTestId("header")).toBeTruthy();

        fireEvent.click(queryByTestId("quick-add-task-action"));
        expect(queryByTestId("add-task-main")).toBeTruthy();

        fireEvent.click(queryByTestId("add-task-quick-cancel"));
        expect(queryByTestId("add-task-main")).toBeFalsy();
    });

})