import * as React from "react";
import Link from 'next/link';

import { LayoutProps } from "./Layout";

const Layout: React.FunctionComponent<LayoutProps> = ({
    children,
}): JSX.Element => {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Kitaablu</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                            </a>
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
                { children }
            </div>
        </div>

        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
            </div>
        </footer>
    </div>;
};

export { Layout };
