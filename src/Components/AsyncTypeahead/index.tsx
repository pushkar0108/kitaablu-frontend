import React, { useState } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useRouter } from 'next/router';

import { IAsyncTypeahead } from "./AsyncTypeahead";
import { Http } from '../../Services/API/Http';

const SEARCH_URI = 'https://kitaablu.com/api/v1/search/';
const CustomAsyncTypeahead: React.FunctionComponent<IAsyncTypeahead.IProps> = (): JSX.Element => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSearch = async (query) => {
        setIsLoading(true);

        try {
            const options: any = await Http.Request(
                'GET',
                `${SEARCH_URI + query}`,
                {}
            );

            setOptions(options);
        } catch (error) {
            console.log("Error while fetching props: ", error);
        }

        setIsLoading(false);
    };

    const changeRoute = (options) => {
        if(options && options[0]) {
            router.push(`/company/${options[0].CIN}`);
        }
    };

    return (
        <AsyncTypeahead
            id="async-example"
            isLoading={isLoading}
            labelKey={option => `${option.name} | ${option.CIN}`}
            minLength={3}
            onSearch={handleSearch}
            options={options}
            placeholder="Search using company name or CIN ..."
            renderMenuItemChildren={(option, props) => (
                <div>
                    {`${option.name}`}
                </div>
            )}
            onChange={changeRoute}
        />
    );
};

export { CustomAsyncTypeahead as AsyncTypeahead };
