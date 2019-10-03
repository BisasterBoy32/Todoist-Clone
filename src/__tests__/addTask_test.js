import React from "react";
import { render , cleanup , fireEvent } from "@testing-library/react";
import { AddTask } from "../components/addTask";
import { firebase } from "../firebase";
import { useSelectedProjectValue , useProjectsValue } from "../context";

jest.mock("../firebase", () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection : jest.fn( () => ({
                add : jest.fn(() => Promise.resolve("value changed succefully"))
            }))
        }))
    }
}));

jest.mock("../context", () => ({
    useSelectedProjectValue : jest.fn(() => ({
        selectedProject: "1",
    })),
    useProjectsValue: jest.fn(() => ({
        projects: [],
        setProjects: jest.fn()
    }))
}))

describe("<AddTAsk />" , () => {

    afterEach(() => {
        jest.clearAllMocks();
    })
    test("render addtask",() => {
        const { queryByTestId, debug } = render(<AddTask />);
        expect(queryByTestId("show-main-action")).toBeTruthy();
    })

    test("render addtask and check main cancel", () => {
        const { queryByTestId, debug } = render(<AddTask />);
        expect(queryByTestId("show-main-action")).toBeTruthy();

        fireEvent.click(queryByTestId("show-main-action"));
        expect(queryByTestId("add-task-main")).toBeTruthy();
        expect(queryByTestId("add-task-main-cancel")).toBeTruthy();
    })

    test("render addtask and show project ovelay", () => {
        const { queryByTestId, debug } = render(<AddTask />);
        expect(queryByTestId("show-main-action")).toBeTruthy();

        fireEvent.click(queryByTestId("show-main-action"));
        expect(queryByTestId("add-task-main")).toBeTruthy();

        fireEvent.click(queryByTestId("show-project-overlay"));
        expect(queryByTestId("project-overlay")).toBeTruthy();  
    })

    test("render addtask and show task date overlay", () => {
        const { queryByTestId, debug } = render(<AddTask />);
        expect(queryByTestId("show-main-action")).toBeTruthy();

        fireEvent.click(queryByTestId("show-main-action"));
        expect(queryByTestId("add-task-main")).toBeTruthy();

        fireEvent.click(queryByTestId("show-task-date-overlay"));
        expect(queryByTestId("task-date-overlay")).toBeTruthy();
    })

    test("render addtask show main and then click cancel", () => {
        const { queryByTestId, debug } = render(<AddTask />);
        expect(queryByTestId("show-main-action")).toBeTruthy();

        fireEvent.click(queryByTestId("show-main-action"));
        expect(queryByTestId("add-task-main")).toBeTruthy();

        fireEvent.click(queryByTestId("add-task-main-cancel"));
        expect(queryByTestId("add-task-main")).toBeFalsy();
    })

    test("render add quick task and then click quick cancel", () => {
        const showQuickAddTask = true
        const setShowQuickAddTask = jest.fn(() => !showQuickAddTask)

        const { queryByTestId, debug } = render(<AddTask
            showQuickAddTask
            setShowQuickAddTask={setShowQuickAddTask}
            />);

        expect(queryByTestId("add-task-main")).toBeTruthy();
        fireEvent.click(queryByTestId("add-task-quick-cancel"));
        expect(setShowQuickAddTask).toHaveBeenCalled();
    })

    test("render add task and create task with selected project TODAY", () => {
        useSelectedProjectValue.mockImplementation(() => ({ selectedProject: "TODAY" }));

        const { queryByTestId } = render(<AddTask />);
        expect(queryByTestId("show-main-action")).toBeTruthy();
        fireEvent.click(queryByTestId("show-main-action"));
        expect(queryByTestId("add-task")).toBeTruthy();

        fireEvent.change(queryByTestId("add-task-content") , {
            target : {value : "I'm a New Task"},
        });
        expect(queryByTestId("add-task-content").value).toBe("I'm a New Task");

        fireEvent.click(queryByTestId("add-task"));
    })


})