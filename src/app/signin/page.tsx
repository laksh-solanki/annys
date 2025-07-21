import React from 'react';

const signpage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light py-5">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Sign in to your account</h2>
          <form action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="mb-3">
              <label
                htmlFor="email-address"
                className="form-label visually-hidden"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-control"
                placeholder="Email address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label visually-hidden">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="form-check-input"
                />
                <label htmlFor="remember-me" className="form-check-label">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-decoration-none">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-primary w-100">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signpage;