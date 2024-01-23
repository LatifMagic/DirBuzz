import { Outlet, Navigate } from "react-router-dom";

function AuthLayout() {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="flex">
            <section className="flex flex-1 justify-center items-center flex-col py-10 xl:py-1">
              <Outlet />
            </section>
            <img
              src="/src/img/Problem solving-bro.svg"
              alt="logo"
              className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat  "
            />
          </div>
        </>
      )}
    </>
  );
}

export default AuthLayout;
