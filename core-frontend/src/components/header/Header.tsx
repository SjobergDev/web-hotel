import "./Header.scss";
function Header() {
    return (
        <div className="header d-flex justify-content-center align-items-center p-2 flex-row">
            <div className="p-4"><h5><a className="nav-item" href="/create-testimonials">Add testimonial</a></h5></div>
            <div className="p-4"><h5><a className="nav-item" href="/list-testimonials">View testimonials</a></h5></div>
        </div>
    );
}

export default Header;
