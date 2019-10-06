import React from "react";
import { cleanup , fireEvent , render } from "@testing-library/react";
import { Projects } from "../components/projects";

beforeEach(cleanup);

jest.mock("../context", () => ({
    useProjectsValue : jest.fn(() => ({
        projects : [{
            name : "music",
            docId : "1"
        }]
    })),
    useSelectedProjectValue : jest.fn(() => ({
        setSelectedProject: jest.fn()
    }))
}));



describe("<Projects />", () => {

    test("render Projects and select a project using onclick" ,() => {

        const activeValue = {
            active : null,
            setActive : jest.fn()
        }

        const { queryByTestId } = render(<Projects activeValue={activeValue} />);
        expect(queryByTestId("project-action-parent-1")).toBeTruthy();

        fireEvent.click(queryByTestId("project-action-1"));
        expect(activeValue.setActive).toHaveBeenCalled();
    })

    test("render Projects and select a project using onkeydown", () => {

        const activeValue = {
            active: null,
            setActive: jest.fn()
        }

        const { queryByTestId } = render(<Projects activeValue={activeValue} />);
        expect(queryByTestId("project-action-parent-1")).toBeTruthy();

        fireEvent.keyDown(queryByTestId("project-action-1"));
        expect(activeValue.setActive).toHaveBeenCalled();
    })
})