import React from 'react';

function Account() {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-6 mb-4 mb-lg-0">
          <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
            <div className="row g-0">
              <div 
                className="col-md-4 gradient-custom text-center text-white" 
                style={{ 
                  borderTopLeftRadius: '.5rem', 
                  borderBottomLeftRadius: '.5rem', 
                  background: "linear-gradient(to right bottom, rgba(180, 28, 86, 1), rgba(253, 160, 133, 1))" 
                }}
              >
                <img 
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" 
                  alt="Avatar" 
                  className="img-fluid my-5" 
                  style={{ width: '80px' }} 
                />
                <h5>Marie Horwitz</h5>
                <p>Customer</p>
                <i className="far fa-edit mb-5"></i>
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>Account Information</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">marie.horwitz@example.com</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Phone</h6>
                      <p className="text-muted">123-456-789</p>
                    </div>
                  </div>
                  <h6>Shipping Address</h6>
                  <hr className="mt-0 mb-4" />
                  <p className="text-muted">123 Main St, Apt 4B, New York, NY, 10001</p>
                  <h6>Order History</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="text-muted mb-3">Recent Order: <strong>Order #123456</strong></div>
                  <div className="text-muted mb-3">Date: <strong>2024-10-15</strong></div>
                  <h6>Wishlist</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="text-muted">1. Stylish Jacket</div>
                  <div className="text-muted">2. Classic Sneakers</div>
                  <div className="text-muted">3. Elegant Handbag</div>
                  <div className="d-flex justify-content-start mt-4">
                    <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
