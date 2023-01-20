import './Services/Service.css'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


function AML() {
  const navigate=useNavigate()
  const [data,setdata]=useState({name:'',number:'',email:''})
  const changeHandler=(e)=>{
    setdata((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  }
  const handelSubmit=(e)=>{
    e.preventDefault()
    // setdata({...data,name:e.target.name.value,email:e.target.email.value,number:e.target.number.value1});
    // console.log(data);
    navigate('/Aregis',{state:data})
  }
  return (
    <div>
       <div id="nav">
        <div id="leftnav">
            <img src="https://firebasestorage.googleapis.com/v0/b/tradefisher-29821.appspot.com/o/Trade_Fisher.png?alt=media&token=4a557974-246f-4f49-8e0d-19e6b4978901" alt="none"/>
            <Link to="/">Trade Fisher<br />Resarch & Resource</Link>
        </div>

        <div class="container-fluid" id='responsive'>
          {/* <a class="navbar-brand" href="#">Offcanvas navbar</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <div id="leftnav">
                  <img src="https://firebasestorage.googleapis.com/v0/b/tradefisher-29821.appspot.com/o/Trade_Fisher.png?alt=media&token=4a557974-246f-4f49-8e0d-19e6b4978901" alt="none"/>
                  <Link to="/">Trade Fisher<br />Resarch & Resource</Link>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item mb-3">
                  <Link to="/About" class="link">About</Link>
                </li>
                <li class="nav-item mb-3">
                  <Link class="dropdown link" id='dropdown' to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Service
                  </Link>
                
                  <ul class="dropdown-menu dropdown-menu-primary">
                      <li><Link class="dropdown-item" to='/Service1'>Equity Market Intraday</Link></li>
                      <li><Link class="dropdown-item" to='/Service2'>Commodity Market Intraday</Link></li>
                      <li><Link class="dropdown-item" to='/Service3'>Option & Future Market Intraday</Link></li>
                      <li><Link class="dropdown-item" to='/Service4'>Potfolio Management Service</Link></li>
                      <li><Link class="dropdown-item" to='/Service5'>Combo Service</Link></li>
                      <li><Link class="dropdown-item" to='/Service6'>Dhanwan Service</Link></li>
                  </ul>
                </li>
                <li class="nav-item mb-3">
                  <Link to="/Performence" class="link">Performance</Link>
                </li>
                <li class="nav-item dropdown mb-3">
                  <Link class="dropdown link" id='dropdown' to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resource
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-primary">
                      <li><Link class="dropdown-item" to="/ContactUs">Contact Us</Link></li>
                      <li><Link class="dropdown-item" to='/WCI'>Who Can Invest</Link></li>
                      <li><Link class="dropdown-item" to='/KYC'>KYC</Link></li>
                  </ul>
                </li>
              </ul>
              <h2 id='call'><b>Contact Us</b></h2>
              <p><a href = "mailto:support@tradefisher.in">support@tradefisher.in</a></p>
              <p><a href="tel:+917999286562">+91 7999286562</a></p>
            </div>
          </div>
        </div>

        <div id="rightnav">
            <Link to="/About" class="link">About</Link>
            <div class="dropdown">
                <Link class="dropdown link" id='dropdown' to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Service
                </Link>
                <ul class="dropdown-menu dropdown-menu-primary">
                    <li><Link class="dropdown-item" to='/Service1'>Equity Market Intraday</Link></li>
                    <li><Link class="dropdown-item" to='/Service2'>Commodity Market Intraday</Link></li>
                    <li><Link class="dropdown-item" to='/Service3'>Option & Future Market Intraday</Link></li>
                    <li><Link class="dropdown-item" to='/Service4'>Potfolio Management Service</Link></li>
                    <li><Link class="dropdown-item" to='/Service5'>Combo Service</Link></li>
                    <li><Link class="dropdown-item" to='/Service6'>Dhanwan Service</Link></li>
                </ul>
            </div>
            {/* <Link to="" class="link">Pricing</Link> */}
            <Link to="/Performence" class="link">Performance</Link>
            {/* <Link to="" class="link">Blog</Link> */}
            <div class="dropdown">
                <Link class="dropdown link" id='dropdown' to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resource
                </Link>
              
                <ul class="dropdown-menu dropdown-menu-primary">
                    <li><Link class="dropdown-item" to="/ContactUs">Contact Us</Link></li>
                    <li><Link class="dropdown-item" to='/WCI'>Who Can Invest</Link></li>
                    <li><Link class="dropdown-item" to='/KYC'>KYC</Link></li>
                </ul>
            </div>
            <span id='gayab'><button type="button" id='gayab' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Sign In
            </button></span>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Sign In</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={handelSubmit} method='post'>
                      <div class="mb-3">
                        <input type="name" onChange={changeHandler} name='name' placeholder='Name' class="form-control" id="exampleInputName1" aria-describedby="namelHelp"/>
                      </div>
                      <div class="mb-3">
                        <input type="email" onChange={changeHandler} name='email' placeholder='Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      </div>
                      <div class="mb-3">
                        <input type='tel' onChange={changeHandler} name='number' placeholder='Phone No.' class="form-control" id="exampleInputTelephone1"/>
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <span id='gayab'><p>Give a call<Link to="tel:+91 7999286562">+91 7999286562</Link></p></span>
        </div>
      </div>
        <div id='top'>
            <h1>Privacy Policy & Legal Disclaimer</h1>
        </div>
        <p id='centered'>
            <h2>Privacy Policy</h2>
            <br />
            We, the owners of the domain name – tradefisher.in and the creator of this Privacy Policy, ensure our commitment to your privacy vis-à-vis the protection of your information. In order to ensure uninterrupted use of services, we collect, and disclose, information about you. We hereby provide this notice explaining our information practices, and the choices you can make about the way your information is collected and used.
        </p>
        <p id='centered'>
            <h4>Overview</h4>
            <br />
            We are committed to respecting your online privacy data. We further recognize your need for appropriate protection and management of any personally identifiable information (“Personal Information”) you share with us. Information that is considered personal about you includes, but is not limited to, your name, address, email address or other contact information, your bank account / Credit / Debit Card details, your financial information, investment experience, investment objectives, your financial situation, KYC norms, etc. This privacy policy also applies to data we collect from users who are not registered as members of this site, but browse, access or view the site, for informational purposes or otherwise.
        </p>
        <div id="lastp">
        <div id="ltop">
          <p><h5>Call Us:</h5><a href="tel:+917999286562">+91 7999286562</a></p>
          <p><h5>Email:</h5><a href = "mailto:support@tradefisher.in">support@tradefisher.in</a></p>
          <div id="links">
            <h5>Follow Us:</h5>
            {/* <Link><img src="https://www.researchandranking.com/assets/fb_ico.png" alt="" /></Link> */}
            <a href="https://www.instagram.com/invites/contact/?i=1cmfgizch7u75&utm_content=md2k6fl"><img src="https://www.researchandranking.com/assets/instagram_ico.png" alt="" /></a>
            <a href="https://t.me/tradefisher"><img src="https://www.researchandranking.com/assets/telegram_ico.png" alt="" /></a>
          </div>
        </div>
        <hr />
        <div id="mid">
          <div id="f">
            <Link className='links' to='/ContactUs'>Contact Us</Link>
            <br />
            {/* <p>Research Report</p> */}
            <Link className='links' to='/AML'>Anti Money Laundering</Link>
            <br />
            <Link className='links' to='/KYC'>KYC</Link>
          </div>
          <div id="f">
            {/* <h2>Services</h2> */}
            <Link class="links" to='/Service1'>Equity Market Intraday</Link><br />
            <Link class="links" to='/Service2'>Commodity Market Intraday</Link><br />
            <Link class="links" to='/Service3'>Option & Future Market Intraday</Link><br />
            <Link class="links" to='/Service4'>Potfolio Management Service</Link><br />
            <Link class="links" to='/Service5'>Combo Service</Link><br />
            <Link class="links" to='/Service6'>Dhanwan Service</Link>
          </div>
          <div id="f">
            <Link className='links' to='/PP'>Privacy Policy Disclaimer</Link><br />
            <Link className='links' to='/Wdis'>Website Disclaimer</Link><br />
            <Link className='links' to='/WCI'>Who Can Invest</Link><br />
          </div>
        </div>
        <br />
        <div id="ll">
          <h4>© Trade Fisher</h4>
          <h5> SEBI Registered Research & Resource Details:</h5>
          <p>Registered Name: Trade Fisher Research Private Limited</p>
          <p>Type of Registration: Non-Individual</p>
          <p>Registration No.: INA000003672</p>  
          {/* <p>Validity: Dec 08, 2015 – Perpetual</p> */}
          <br />
          <div id="fadd">
            <div className="address">
              <h2>Gurgaon Office</h2>
                <p>Address: Trade Fisher Research Private Limited, Marathon Futurex, A-603 6th Floor, Mafatlal Mills Compound, N M Joshi Marg, South West Delhi, Gurgaon 110037</p>
                <p>Email: support@tradefisher.in | © Copyright 2021 Trade Fisher Research Pvt. Ltd. All Rights Reserved.</p>
                {/* <p>Principal Officer: Manish Goel, Email: manish@equentis.com, +91 22 61013800</p> */}
            </div>
            <div className="address">
              <h2>Gujrat Office</h2>

                <p>Address: Trade Fisher Research Private Limited, Marathon Futurex, A-603 6th Floor, Mafatlal Mills Compound, N M Joshi Marg, Lower Parel East, AK Road Gujrat 395008</p>
                <p>Email: support@tradefisher.in | © Copyright 2021 Trade Fisher Research Pvt. Ltd. All Rights Reserved.</p>
                {/* <p>Principal Officer: Manish Goel, Email: manish@equentis.com, +91 22 61013800</p> */}
            </div>
            <div className="address">
              <h2>Bihar Office</h2>
                <p>Address: Trade Fisher Research Private Limited, Marathon Futurex, A-603 6th Floor, Mafatlal Mills Compound, N M Joshi Marg, Lower Parel East, Chapra Bihar 841301</p>
                <p>Email: support@tradefisher.in | © Copyright 2021 Trade Fisher Research Pvt. Ltd. All Rights Reserved.</p>
                {/* <p>Principal Officer: Manish Goel, Email: manish@equentis.com, +91 22 61013800</p> */}
            </div>
          </div>
          <br />
          <br />
          {/* <h5>SEBI Office Details: SEBI Bhavan BKC</h5>
          <p>Address: Plot No.C4-A, 'G' Block Bandra-Kurla Complex, Bandra (East), Mumbai - 400051, Maharashtra | Tel : +91-22-26449000 / 40459000 | Fax : +91-22-26449019-22 / 40459019-22</p>
          <p>Email: sebi@sebi.gov.in | Toll Free Investor Helpline: 1800 22 7575</p>
          <br /> */}
          <hr />
          <br />
          <div id="leftnav">
            <img src="https://firebasestorage.googleapis.com/v0/b/tradefisher-29821.appspot.com/o/Trade_Fisher.png?alt=media&token=4a557974-246f-4f49-8e0d-19e6b4978901"  alt="none"/>
            <div id="llll">
              <p>Trade Fisher <br /> Research & Resource</p>
            </div>
          </div>
          <br />
          <p>Copyright © 2022 Trade Fisher Research Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default AML