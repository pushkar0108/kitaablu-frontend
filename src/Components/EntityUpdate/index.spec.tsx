import * as React from "react";

import { render } from "@Test/utils";
import { EntityUpdate } from "@Components";

describe("EntityUpdate", () => {
    it("should render without fail", () => {
        const { container } = render(
            <EntityUpdate>
                <div>Content</div>
            </EntityUpdate>
        );

        expect(container).toMatchSnapshot();
    });
});
