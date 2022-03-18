import PropTypes from "prop-types";
import React, { useEffect } from "react";

function Layout({ children }) {
  useEffect(() => {
    //Toggle mode
    const toggle = document.querySelector(".js-change-theme");
    const body = document.querySelector("body");
    const profile = document.getElementById("profile");

    toggle.addEventListener("click", () => {
      if (body.classList.contains("text-gray-900")) {
        toggle.innerHTML = "☀️";
        body.classList.remove("text-gray-900");
        body.classList.add("text-gray-100");
        profile.classList.remove("bg-white");
        profile.classList.add("bg-gray-900");
      } else {
        toggle.innerHTML = "🌙";
        body.classList.remove("text-gray-100");
        body.classList.add("text-gray-900");
        profile.classList.remove("bg-gray-900");
        profile.classList.add("bg-white");
      }
    });
  }, []);

  return <>{children}</>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
