import React from "react";
import { render, cleanup, fireEvent, queryByTestId } from "@testing-library/react";
import { IndividualProject  } from "../components/individualProject";

beforeEach(cleanup);

jest.mock("../firebase", () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                doc: jest.fn(() => ({
                    delete : jest.fn(() => Promise.resolve("this task is deleted successfully"))
                }))
            }))
        }))
    }
}));

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
}))


describe("<IndividualProject/>" , () => {

    test("render individual project and show condfirm delete modal" ,() => {
        const project = { name: "p1", docId: "1" }
        const { queryByTestId  } = render(<IndividualProject project={project} />)
        expect(queryByTestId("delete-project")).toBeTruthy();

        fireEvent.click(queryByTestId("delete-project"));
        expect(queryByTestId("project-delete-modal")).toBeTruthy();
    })

    test("render individual project and delete a task", () => {
        const project = { name: "p1", docId: "1" }

        const { queryByTestId, getByText  } = render(<IndividualProject project={project} />)
        expect(getByText("p1")).toBeTruthy();

        fireEvent.click(queryByTestId("delete-project"));
        expect(queryByTestId("project-delete-modal")).toBeTruthy();

        fireEvent.click(queryByTestId("delete-task-action"));
    })

    test("render individual project and show condfirm delete modal then cancel", () => {
        const project = { name: "p1", docId: "1" }

        const { queryByTestId, getByText } = render(<IndividualProject project={project} />)
        expect(getByText("p1")).toBeTruthy();

        fireEvent.click(queryByTestId("delete-project"));
        expect(queryByTestId("project-delete-modal")).toBeTruthy();

        fireEvent.click(getByText("Cancel"));
        expect(queryByTestId("project-delete-modal")).toBeFalsy();
    })
})