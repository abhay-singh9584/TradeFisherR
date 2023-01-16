import '../App.css'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Home() {

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
    navigate('/Aregis',{state:data})
  }
  
  return (
    <main>
      <div id="nav">
        <div id="leftnav">
            
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/tradefisher-29821.appspot.com/o/xyz.png?alt=media&token=944bf04b-19a3-4805-a475-9f6692beadf7" alt="none"/>
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
      <div id="top1">
        <div id="p">
            <h3>Welcome to Stock Market Investing</h3>
            <h2>A FINTECH PLATFORM WITH 15,000+ INVESTORS</h2>
        </div>
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
      <div id="top2">
        <p>
          <h1>8</h1><br />
          Year Existence
        </p>
        <p>
          <h1>3</h1><br />
          Offices Across India
        </p>
        <p>
          <h1>200+</h1><br />
          Team Strength
        </p>
        <p>
          <h1>3,900+</h1><br />
          Premium Customers
        </p>
        <p>
          <h1>15,000+</h1><br />
          Happy Customers
        </p>
        <p>
          <h1>1,00,000+</h1><br />
          Registered Users
        </p>
      </div>
      <div id="top3">
        <p>Services</p>
        <br />
        <h2>Maximizing profits in the real trading<br />account-through our expert advise</h2>
        <br />
        <i>The best Stock Advisory Firm You Can Count On!</i>
        <div id="ser">
          <div className="boxes">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
            </svg>
            <br />
            <h2>Equity Market</h2>
            <br />
            <Link to='/Service1'>Read More</Link>
          </div>
          <div className="boxes">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
            </svg>
            <br />
            <h2>Commodity Market</h2>
            <br />
            <Link to='/Service2'>Read More</Link>
          </div>
          <div className="boxes">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16">
              <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
            </svg>
            <br />
            <h2>Option & Future <br /> Market</h2>
            <br />
            <Link to='/Service3'>Read More</Link>
          </div>
          <hr />
          <hr />
          <hr />
          <div className="boxes">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16">
              <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
            </svg>
            <br />
            <h2>Portfolio<br />Management</h2>
            <br />
            <Link to='/Service4'>Read More</Link>
          </div>
          <div className="boxes">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
            <br />
            <h2>Combo Service</h2>
            <br />
            <Link to='/Service5'>Read More</Link>
          </div>
          <div className="boxes">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
            </svg>
            <br />
            <h2>Dhanwan Service</h2>
            <br />
            <Link to='/Service6'>Read More</Link>
          </div>
        </div>
      </div>
      <p id='centered'>
        <h1>Investment Advisory Services</h1>
        <br />
        Helping You to Be Better Prepared For Tomorrow. We help you build a stock portfolio consisting of fundamentally sound businesses that helps you create wealth in the long term.
      </p>
      <div id="top0">
        <div id="leftalign">
            <h1><b> 5 in 5 Wealth Creation Strategy</b></h1>
            <br />
            <h3>Build A Tailor-Made Portfolio Of Multibagger <br /> Stocks For You And Your Goals.</h3>
            <br />
            <p>This strategy is suitable for long term investors who wish to create wealth by investing <br /> in a tailor-made portfolio consisting of 20-25 fundamentally sound businesses.</p>
            <br />
            <h4><ul>Features:</ul></h4>
            <p>
              <li>Personalized portfolio of 20-25 stocks.</li>
              <li>Strong past track record of 4-5 times returns in 5-6 years.</li>
              <li>Complete handholding.</li>
            </p>
        </div>
        <img src="https://www.researchandranking.com/assets/right_mob2.png" alt="" />
      </div>
      <br />
      <div id="top0">
        <img src="https://www.researchandranking.com/assets/mispriced_mob2.png" alt="" />
        <div id="leftalign">
            <h1><b>Mispriced Opportunities</b></h1>
            <br />
            <h3>Invest Monthly In High-Growth Stocks & <br /> Multiply Your Wealth.</h3>
            <br />
            <p>Get access to a portfolio of fundamentally sound stocks where the intrinsic/real value is more<br /> than the current share price due to inevitable temporary hiccups.</p>
            <br />
            <h4><ul>Features:</ul></h4>
            <p>
              <li>Personalized portfolio of 20-25 stocks.</li>
              <li>Strong past track record of 4-5 times returns in 5-6 years.</li>
              <li>Complete handholding.</li>
            </p>
        </div>
      </div>
      <div id="centered">
        <h1>Benefits of Investing in Stock Market with <br />Trade Fisher</h1>
        <br />
        <br />
        <p>We are a preferred stock advisory company for 28,000+ investors worldwide, who trust us when it comes to creating wealth by investing in <br />all segments. We work relentlessly to offer you an unrivalled investing experience and fulfill your goals.</p>
      </div>
      <div id="four">
        <div className="first">
          <img src="https://www.researchandranking.com/assets/personalization.png" alt="" />
          <br />
          <h2>Personalization</h2>
          <br />
          <p>Using a unique methodology, we curate a portfolio that is designed to suit your risk profile and goals.</p>
        </div>
        <div className="first">
          <img src="https://www.researchandranking.com/assets/intelligence.png" alt="" />
          <br />
          <h2>Human Intelligence & Technology</h2>
          <br />
          <p>Let the best of human minds and technology do all the research to identify high-growth stocks for you.</p>
        </div>
        <div className="first">
          <img src="https://www.researchandranking.com/assets/all_in_one.png" alt="" />
          <br />
          <h2>All In One</h2>
          <br />
          <p>Experience 3 in 1, i.e. Constant support, easy & secure payment options and economical pricing.</p>
        </div>
        <div className="first">
          <img src="https://www.researchandranking.com/assets/support.png" alt="" />
          <br />
          <h2>Always By Your Side</h2>
          <br />
          <p>We monitor your portfolio, issue alerts & guide you on rebalancing, so you can live a stress-free life.</p>
        </div>
      </div>
      <br />
      {/* <button type="button" id='btnc' class="btn btn-info">Start Creating Wealth!</button> */}
      <div id="phone">
        <h1>STOP!</h1>
        <br />
        <h3>Don't Lose Money In Stock Market.</h3>
        <h3>Build Your Multibagger Portfolio Instead</h3>
        <br />
        <p id='bcolor'>Share Your WhatsApp Number To Get A Call</p>
        <form onSubmit={handelSubmit} method='post'>
          <input type="tel" name='number' onChange={changeHandler} placeholder='Phone No.' />
          <input type="Submit" className='btn btn-primary' />
        </form>
      </div>
      <div id="lastp">
        <div id="ltop">
          <p><h5>Call Us:</h5><a className='clink' href="tel:+917999286562">+91 7999286562</a></p>
          <p><h5>Email:</h5><a className='clink' href = "mailto:support@tradefisher.in">support@tradefisher.in</a></p>
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
          <h3>© Trade Fisher</h3>
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
            
            <div id="llll">
              <p>Trade Fisher <br /> Research & Resource</p>
            </div>
          </div>
          <br />
          <p>Copyright © 2022 Trade Fisher Research Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </main>
  )
}

export default Home