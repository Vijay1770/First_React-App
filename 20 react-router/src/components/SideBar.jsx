import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "200px" }}
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg class="bi pe-none me-2" width="30" height="32">
          <use xlink:Href="#bootstrap"></use>
        </svg>
        <span class="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to="/" className="nav-link text-white " aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlink:Href="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link to="create-post" className="nav-link text-white ">
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:Href="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
