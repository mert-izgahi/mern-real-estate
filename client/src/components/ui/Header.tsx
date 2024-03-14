import { Link, NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsPhone } from "react-icons/bs";
function Header() {
    return (
        <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 bg-zinc-900 text-white p-4 my-4 rounded-md">
                <div className="flex items-center justify-between">
                    <p>
                        We're always active all social media platform or live
                        call any time contact us!
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-zinc-200 text-black p-2 text-sm rounded-md hover:bg-zinc-300 transition duration-100">
                            <span>
                                <BsPhone size={16} />
                            </span>
                            <span>+44409874443434</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link
                                to="https://facebook.com"
                                className="bg-zinc-200 text-black p-2 rounded-md hover:bg-zinc-300 transition duration-100"
                            >
                                <BsFacebook size={16} />
                            </Link>{" "}
                            <Link
                                to="https://twitter.com"
                                className="bg-zinc-200 text-black p-2 rounded-md hover:bg-zinc-300 transition duration-100"
                            >
                                <BsTwitter size={16} />
                            </Link>{" "}
                            <Link
                                to="https://instagram.com"
                                className="bg-zinc-200 text-black p-2 rounded-md hover:bg-zinc-300 transition duration-100"
                            >
                                <BsInstagram size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 p-4">
                <Link to="/" className="text-2xl font-bold text-zinc-950">
                    MsTATE
                </Link>
                <div className="flex items-center justify-between flex-1">
                    <div className="flex items-center gap-4">
                        <NavLink to="/properties" className="nav-link">
                            Properties
                        </NavLink>
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </div>
                    <div className="flex">
                        <Link to="/auth/sign-in" className="btn btn-primary">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
