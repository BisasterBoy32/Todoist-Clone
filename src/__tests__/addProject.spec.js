import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { CreateProject } from "../components/addProject";

beforeEach(cleanup);

jest.mock("../context" , () => ({
    useProjectsValue : jest.fn(() => ({
        projects: [
            { name : "p1" , docId : "1"},
            { name: "p1", docId: "2" }
        ],
        setProjects: jest.fn()
    })),
    useSelectedProjectValue : jest.fn(() => ({
        selectedProject : "INBOX",
        setSelectedProject : jest.fn()
    }))
}))

jest.mock("../firebase", () => ({
    firebase : {
        firestore : jest.fn(() => ({
            collection : jest.fn(() => ({
                add : jest.fn(() => Promise.resolve("Add a new Project"))
            }))
        }))
    }
}))

describe("<CreateProject />" , () => {

    test("render createproject and show add then cancel", () => {
        const { queryByTestId } = render(<CreateProject />);
        expect(queryByTestId("add-project")).toBeTruthy();

        fireEvent.click(queryByTestId("add-project-action"));
        expect(queryByTestId("add-project-submit")).toBeTruthy();

        fireEvent.click(queryByTestId("hide-project-overlay"));
        expect(queryByTestId("add-project-submit")).toBeFalsy();
    }) 

    test("render createproject and create a new object", () => {
        const { queryByTestId ,debug } = render(<CreateProject />);
        expect(queryByTestId("add-project")).toBeTruthy();

        fireEvent.click(queryByTestId("add-project-action"));
        expect(queryByTestId("add-project-submit")).toBeTruthy();

        fireEvent.change(queryByTestId("project-name"), {
            target : { value : "new project"}
        });
        expect(queryByTestId("project-name").value).toBe("new project");

        fireEvent.click(queryByTestId("add-project-submit"));
    })
})