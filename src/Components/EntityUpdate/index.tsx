import React, { useEffect, useState } from "react";
import MOMENT from "moment";

import { EntityUpdateProps } from "./EntityUpdate";
import { Http } from '../../../src/Services/API/Http';

const EntityUpdate: React.FunctionComponent<EntityUpdateProps> = ({
    lastUpdatedAt,
    entityType,
    entityId
}): JSX.Element => {
    const [showAlert, updateShowAlert] = useState(false);

    useEffect(() => { /* tslint:disable-next-line */
        $(function () { /* tslint:disable-next-line */
            ($('[data-toggle="tooltip"]') as any).tooltip()
        });

        ($('[data-toggle="tooltip"]') as any).tooltip({
            trigger : 'hover'
        });
    });

    const entityUpdateAllowed = MOMENT().diff(MOMENT(lastUpdatedAt), 'days') > 7;
    const handleClick = async () => {
        try {
            await Http.Request('POST', `https://kitaablu.com/api/v1/entity/${entityType}/update/${entityId}`);
            updateShowAlert(true);
            setTimeout(() => {
                updateShowAlert(false);
            }, 4000);
        } catch (error) {
            
        }
    };

    return <div className="mt-3">
        <div className="tool-tip" 
            data-toggle="tooltip" 
            data-placement="right" 
            title = {
                entityUpdateAllowed ? 
                "Click here to raise an updation request" : 
                "Information is already upto date, cannot raise request"
            }>
            <button 
                onClick={handleClick}
                disabled={!entityUpdateAllowed}
                type="button" 
                className="btn btn-secondary btn-sm btn-block">
                Request Data Updation
            </button>
        </div>
        <div className="mt-2 ml-1">
            <div>Info last updated on </div>
            <div>{MOMENT(lastUpdatedAt).format("MMMM Do, YYYY")}</div>
        </div>
        {
            showAlert && (
                <div className="mt-2 alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Request Raised Successfully!</strong> We will try to update the data as soon as possible, Kindly check after few minutes.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        }
        
    </div>;
};

export { EntityUpdate };
