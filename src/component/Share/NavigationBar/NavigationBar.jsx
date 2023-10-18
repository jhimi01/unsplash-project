import { BsSearch } from "react-icons/bs";
import "./NavigationBar.css";

const NavigationBar = () => {
  const NavLikes = (
    <>
      <div className="relative">
        <p className="absolute top-4 left-3 mx-2">
          <BsSearch />
        </p>
        <input
          type="text"
          placeholder="search image here"
          className="input input-bordered w-full px-10"
        />
      </div>
      <li>
        <a>Explore</a>
      </li>
      <li>
        <a>Collection</a>
      </li>
      <li>
        <a>Community</a>
      </li>
    </>
  );

  //   toggle button
  const togglemood = (
    <div className="flex gap-2">
      <p>Dark Mood</p>
      <div class="checkbox-wrapper-3">
        <input type="checkbox" id="cbx-3" />
        <label for="cbx-3" class="toggle">
          <span></span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start custom-width">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLikes}
            {togglemood}
          </ul>
        </div>
        <a className="cursor-pointer normal-case text-2xl custom-fontfamily">
          Image Gallery
        </a>
      </div>
      <div className="navbar-center hidden lg:flex flex-row">
        <ul className="menu menu-horizontal px-1">{NavLikes}</ul>
      </div>
      {/* <div className="navbar-end gap-4">
        <p>Dark Mood</p>
        <div class="checkbox-wrapper-3">
          <input type="checkbox" id="cbx-3" />
          <label for="cbx-3" class="toggle">
            <span></span>
          </label>
        </div>
      </div> */}
      <div className="hidden lg:flex navbar-end gap-4">{togglemood}</div>
    </div>
  );
};

export default NavigationBar;
