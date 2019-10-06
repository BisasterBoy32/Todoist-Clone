import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Sidebar } from "../components/layout/SideBar";

beforeEach(cleanup);


jest.mock("../context", () => ({
    useSelectedProjectValue: jest.fn(() => ({
        selectedProject: "1",
        setSelectedProject : jest.fn()
    })),
    useProjectsValue: jest.fn(() => ({
        projects: [
            { name: "p1", docId: "1" },
            { name: "p2", docId: "2" }
        ],
        setProjects: jest.fn()
    }))
}));

describe("<Sidebar />",() => {
    
    test("render sidebar and pick INBOX as selected project",() => {
        const { queryByTestId } = render( <Sidebar/> );
        expect(queryByTestId("sidebar")).toBeTruthy();

        fireEvent.click(queryByTestId("inbox-action"));
        expect(queryByTestId("inbox").classList.contains("active")).toBeTruthy();
        expect(queryByTestId("today").classList.contains("active")).toBeFalsy();
        expect(queryByTestId("next_7").classList.contains("active")).toBeFalsy();
    });

    test("render sidebar and pick TODAY as selected project", () => {
        const { queryByTestId } = render(<Sidebar />);
        expect(queryByTestId("sidebar")).toBeTruthy();

        fireEvent.click(queryByTestId("today-action"));
        expect(queryByTestId("inbox").classList.contains("active")).toBeFalsy();
        expect(queryByTestId("today").classList.contains("active")).toBeTruthy();
        expect(queryByTestId("next_7").classList.contains("active")).toBeFalsy();
    });

    test("render sidebar and pick NEXT_7 as selected project", () => {
        const { queryByTestId } = render(<Sidebar />);
        expect(queryByTestId("sidebar")).toBeTruthy();

        fireEvent.click(queryByTestId("next-action"));
        expect(queryByTestId("inbox").classList.contains("active")).toBeFalsy();
        expect(queryByTestId("today").classList.contains("active")).toBeFalsy();
        expect(queryByTestId("next_7").classList.contains("active")).toBeTruthy();
    });

    test("render sidebar and hide projects", () => {
        const { queryByTestId } = render(<Sidebar />);
        expect(queryByTestId("sidebar")).toBeTruthy();

        fireEvent.click(queryByTestId("sidebar-middle-action"));
        expect(queryByTestId("project-action-parent")).toBeFalsy();
        expect(queryByTestId("icon-action").classList.contains("hidden-projects")).toBeTruthy();
    });

    test("render sidebar and verify if there is a selected project", () => {
        const { queryByTestId ,debug } = render(<Sidebar />);
        expect(queryByTestId("sidebar")).toBeTruthy();
        
        expect(queryByTestId("project-action-parent-1").classList.contains("active")).toBeFalsy();
        fireEvent.click(queryByTestId("project-action-1"));

        expect(queryByTestId("project-action-parent-1").classList.contains("active")).toBeTruthy();
    });
})