import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Tasks  } from "../components/tasks";
import { useSelectedProjectValue } from "../context";

beforeEach(cleanup);

jest.mock("../context", () => ({
    useSelectedProjectValue: jest.fn(() => ({
        selectedProject: "1"
    })),
    useProjectsValue: jest.fn(() => ({
        projects: [
            { name: "p1", docId: "1" },
            { name: "p2", docId: "2" }
        ]
    }))
}))

jest.mock("../hooks", () => ({
    useTasks : jest.fn(() => ([
        [
            { task: "task1" , id: "1"},
            { task: "task2", id: "2" },
        ]
    ]))
}))


describe("<Tasks />", () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    
    test("render Tasks and check the project name with a normale project", () => {
        const { queryByTestId ,getByText } = render(<Tasks />)
        expect(queryByTestId("tasks")).toBeTruthy();

        expect(getByText("task1")).toBeTruthy();
        expect(queryByTestId("project-name").textContent).toBe("p1");
    })

    test("render Tasks and check the project name with a collated project", () => {
        useSelectedProjectValue.mockImplementation(() => ({ selectedProject: "TODAY"}));

        const { queryByTestId, getByText } = render(<Tasks />)
        expect(queryByTestId("tasks")).toBeTruthy();

        expect(getByText("task1")).toBeTruthy();
        expect(queryByTestId("project-name").textContent).toBe("TODAY");
    })

})