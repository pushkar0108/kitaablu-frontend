import React, { useState } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useRouter } from 'next/router';

import { IAsyncTypeahead } from "./AsyncTypeahead";
import { Http } from '../../Services/API/Http';

const SEARCH_URI = 'v1/search/';
const CustomAsyncTypeahead: React.FunctionComponent<IAsyncTypeahead.IProps> = (props): JSX.Element => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSearch = async (query) => {
        setIsLoading(true);

        try {
            const options: any = await Http.Request(
                'GET',
                `${SEARCH_URI + query}`,
                {
                    type: props.type
                }
            );

            setOptions(options);
        } catch (error) {
            console.log("Error while fetching props: ", error);
        }

        setIsLoading(false);
    };

    const changeRoute = (options) => {
        if(options && options[0]) {
            if(props.type == 'director') {
                router.push(`/director/${options[0].value}`);
            } else {
                router.push(`/company/${options[0].value}`);
            }
        }
    };

    return (
        <AsyncTypeahead
            id="async-example"
            isLoading={isLoading}
            labelKey={option => `${option.name} | ${option.value}`}
            minLength={3}
            onSearch={handleSearch}
            options={options}
            placeholder={props.placeholder}
            renderMenuItemChildren={(option, props) => (
                <div>
                    {`${option.name}`}
                </div>
            )}
            onChange={changeRoute}
            // size={props.size || 'large'}
        />
    );
};

export { CustomAsyncTypeahead as AsyncTypeahead };
