<template>
 <header>
   <nav class="navbar navbar-expand-lg ">
    <div class="container">
      <a class="navbar-brand" href="#">Stay<span>cation.</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">browse by</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">stories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">agents</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 </header>
  <router-view/>
  <footer class="footer-section-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row footer-top-wrap">
            <div class="col-md-4 col-sm-6">
              <div class="content-footer navbar-brand">
                <h1>
                  Stay<span>cation</span>
                </h1>
              <p>We kaboom your beauty holiday <br/> 
              instantly and memorable.</p>
              </div>
            </div>
            <div class="copy col-md-6 col-sm-6">
              <div class="row ">
                <div class="col-md-4 col-sm-6">
                  <div class="footer-list">
                    <h4>For Beginners</h4>
                    <ul class="nav flex-column">
                      <li class="nav-item nav-support">
                        <a>New Account</a>
                      </li>
                      <li class="nav-item nav-support">
                        <a>Start Booking a Room</a>
                      </li>
                      <li class="nav-item nav-support">
                        <a>Use Payments</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="footer-list">
                    <h4>Explore Us</h4>
                    <ul class="nav flex-column">
                      <li class="nav-item nav-support">
                        <a>Our Career</a>
                      </li>
                      <li class="nav-item nav-support">
                        <a>Privacy</a>
                      </li>
                      <li class="nav-item nav-support">
                        <a>Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="footer-list">
                    <h4>Connect Us</h4>
                    <ul class="nav flex-column">
                      <li class="nav-item nav-support">
                        <a>support@staycation.id</a>
                      </li>
                      <li class="nav-item nav-support">
                        <a>021-2208-1996</a>
                      </li>
                      <li class="nav-item nav-support">
                        <a>Staycation, Jakarta</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h6 class="pt-5" style="color: #B0B0B0;">Copyrights <span class="icn-copy-right"> © 2022.</span>All rights reserved by Staycation.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

