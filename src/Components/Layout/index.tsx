import React, { useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AsyncTypeahead } from "@Components";
import { initGA, logPageView } from '@Services/analytics';
import { LayoutProps } from "./Layout";

const Layout: React.FunctionComponent<LayoutProps> = ({
    children,
}): JSX.Element => {

    useEffect(() => {
        if (!(window as any).GA_INITIALIZED) {
            initGA();
            (window as any).GA_INITIALIZED = true;
        }
        logPageView();
    });

    const router = useRouter()
    const handleClick = e => {
        e.preventDefault();
        let cin = (document.getElementById('cinInput') as HTMLInputElement).value;
        if(cin) {
            router.push('/company/[cin]', `/company/${cin}`);
            setTimeout(() => {
                window.scrollTo(0, 0);
                (document.getElementById('cinInput') as HTMLInputElement).value = '';
            }, 1000);
        }
    };

    const handleDinSearchClick = e => {
        e.preventDefault();
        let din = (document.getElementById('dinInput') as HTMLInputElement).value;
        if(din) {
            router.push('/director/[din]', `/director/${din}`);
            setTimeout(() => {
                window.scrollTo(0, 0);
                (document.getElementById('cinInput') as HTMLInputElement).value = '';
            }, 1000);
        }
    };

    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link href="/home" as="/home">
                    <a className="navbar-brand" href="#">Kitaablu</a>
                </Link>
                <div className="d-none d-md-block" style={{width: '50%'}}>
                    <AsyncTypeahead
                        type = 'company'
                        placeholder = "Search using company name or CIN ..."
                    />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link href="/home" as="/home">
                                <a className="nav-link" href="#">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/company" as="/company">
                                <a className="nav-link" href="#">Companies</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/director" as="/director">
                                <a className="nav-link" href="#">Directors</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {children}
                </div>
                <div className="col-md-4">
                    <div className="card my-4">
                        <h5 className="card-header">Documents Coming Soon</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            Form 3A
                                        </li>
                                        <li>
                                            ITR Return
                                        </li>
                                        <li>
                                            Form A
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            GST Return
                                        </li>
                                        <li>
                                            Form 3A
                                        </li>
                                        <li>
                                            Balance Sheet
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card my-4">
                        <h5 className="card-header">Search Company</h5>
                        <div className="card-body">
                            <div className="input-group">
                                <input id="cinInput" type="text" className="form-control" placeholder="Search using CIN/LLPIN" />
                                <span className="input-group-btn">
                                    <button 
                                        onClick={handleClick}
                                        className="btn btn-secondary" 
                                        type="button">
                                            Go!
                                    </button>
                                </span>
                            </div>
                            <AsyncTypeahead
                                type = 'company'
                                placeholder = "Search using company name ..."
                            />
                        </div>
                    </div>

                    <div className="card my-4 sticky-top">
                        <h5 className="card-header">Search Director</h5>
                        <div className="card-body">
                            <div className="input-group">
                                <input id="dinInput" type="text" className="form-control" placeholder="Search using DIN" />
                                <span className="input-group-btn">
                                    <button 
                                        onClick={handleDinSearchClick}
                                        className="btn btn-secondary" 
                                        type="button">
                                            Go!
                                    </button>
                                </span>
                            </div>
                            <AsyncTypeahead
                                type = 'director'
                                placeholder = "Search using director name ..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Kitaablu 2020</p>
            </div>
        </footer>
    </div>;
};

export { Layout };
