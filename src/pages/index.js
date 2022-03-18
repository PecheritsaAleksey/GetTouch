import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import profilePic from "../images/main.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`fullstack developer`, `youtube`]} title="Pecheritsa Alex" />
      <style>
        {`
            body {
              background-image: url(https://source.unsplash.com/1L71sPT5XKc);
            }
        `}
      </style>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <img
              className="object-cover block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              src={profilePic}
            />

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Aleksey Pecheritsa</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>{" "}
              Full-stack developing, Video making, Youtube, Fitness
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>{" "}
              Russia, Krasnoyarsk
            </p>
            <p className="pt-8 text-sm"> Hey! Welcome here! Open to any question </p>

            <div className="pt-12 pb-8">
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                <a className="link" href="https://t.me/pecheritsa_alex">
                  Get In Touch Via Telegram
                </a>
              </button>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a
                className="link"
                href="https://vk.com/pecheritsa_alex"
                data-tippy-content="@vk_handle"
              >
                <svg
                  className="h-8 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 30 30"
                  height="60px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>VK</title>
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.361,18.967l-1.868,0.026 c0,0-0.403,0.079-0.93-0.285c-0.699-0.48-1.358-1.729-1.872-1.567c-0.521,0.166-0.505,1.29-0.505,1.29s0.004,0.198-0.115,0.327 c-0.129,0.139-0.382,0.125-0.382,0.125h-0.837c0,0-1.846,0.153-3.473-1.543c-1.772-1.849-3.338-5.498-3.338-5.498 s-0.092-0.23,0.006-0.348c0.111-0.13,0.41-0.134,0.41-0.134l2-0.01c0,0,0.188,0.033,0.324,0.133 c0.111,0.082,0.174,0.236,0.174,0.236s0.323,0.819,0.752,1.561c0.836,1.446,1.224,1.763,1.508,1.608 c0.414-0.226,0.29-2.044,0.29-2.044s0.008-0.66-0.208-0.954c-0.168-0.229-0.484-0.297-0.622-0.314 c-0.113-0.015,0.071-0.277,0.311-0.395c0.36-0.176,0.996-0.186,1.747-0.179c0.585,0.006,0.754,0.042,0.982,0.098 c0.69,0.167,0.456,0.811,0.456,2.356c0,0.495-0.089,1.191,0.267,1.42c0.154,0.099,0.529,0.015,1.464-1.579 c0.445-0.756,0.778-1.644,0.778-1.644s0.073-0.158,0.186-0.226c0.116-0.07,0.272-0.048,0.272-0.048l2.105-0.013 c0,0,0.632-0.076,0.735,0.211c0.108,0.3-0.236,1.001-1.096,2.148c-1.412,1.884-1.569,1.709-0.396,2.799 c1.12,1.041,1.351,1.547,1.39,1.611C22.339,18.906,21.361,18.967,21.361,18.967z" />
                </svg>
              </a>
              <a
                className="link"
                href="https://instagram.com/pecheritsa_alex"
                data-tippy-content="@instagram_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                className="link"
                href="https://github.com/PecheritsaAleksey"
                data-tippy-content="@github_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                className="link"
                href="https://www.youtube.com/channel/UCHULLisd4Z4o-HPn1VwmqEA"
                data-tippy-content="@youtube_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>YouTube</title>
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <img
            src={profilePic}
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>

        <div className="absolute top-0 right-0 h-12 w-18 p-4">
          <button className="js-change-theme focus:outline-none">🌙</button>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
