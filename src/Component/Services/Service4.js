import './Service.css'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Contact() {
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
    <main>
         <div id="nav">
        <div id="leftnav">
            <img src="https://i.imgur.com/MlTeCzJ.png" alt="none"/>
            <Link to="/">Trade Fisher<br />Resarch & Resource</Link>
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
        <section id='top'>
            <p>Potfolio Management  <br /> Service</p>
        </section>
        <div id="para">
            <p>Welcome to the Masteresearch Commodity Market Services to get Commodity or Gold Silver CurdeOil Market tips on technical basis, in this segment we gives only Intraday or BTST or STBT positions, we gives daily 3-4 calls in this segment, Mastersearch will give all calls on technical basis after anyalsis on charts through experence team of Masteresearch.</p>
            <p>Masteresearch belive in honest and actual services, we are very serious about stock market investors or traders, we promise to give our services to our all clients through whatsapp or call, masteresearch gives 1 week demo first then only ask you to join, its request to everyone dont join us without seeing our free trial or 1 week demo.</p>
            <p>We are very very genuine company and in stock market no one is like us, you can try us you will never ever get this kind of services in India.</p>
        </div>
        <br /><br />
        <div id="kpoint">
            <div id="hd">
                <h4 id='clr'>Key points before subscription</h4>
                <br />
                <h1>We make it easy</h1>
                <br />
            </div>
            <div id="parts">
                <div className="dpart">
                    <ul><h1>Features</h1></ul>
                    <li>All calls are with SL and target.</li>
                    <li>We will send you 3-4 tips everyday.</li>
                    <li>We send both Entry and Exit message.</li>
                    <li>Calls are sent through SMS or Whats App.</li>
                    <li>Maximum of 2-3 open positions at any given time.</li>
                    <li>We track all open positions and advise accordingly.</li>
                    <li>Calls will reach you on time always. WhatsApp Msg may take 6 to 10 seconds.</li>
                </div>
                <div className="dpart">
                    <ul><h1>Benefits</h1></ul>
                    <li>Get trading plans especially designed for your needs.</li>
                    <li>Get 24×7 dedicated customer support.</li>
                    <li>Advice from experts only.</li>
                    <li>Finally, huge profits and peace of mind.</li>
                    <li>Client satisfaction is our main moto.</li>
                    <li>Technically strong advise.</li>
                    <li>Technically strong advise.</li>
                </div>
                {/* <div className="dpart">
                    <ul><h1>Calls Format</h1></ul>
                    <li>All calls are with SL and target.</li>
                    <li>We will send you 3-4 tips everyday.</li>
                    <li>We send both Entry and Exit message.</li>
                    <li>Calls are sent through SMS or Whats App.</li>
                    <li>Maximum of 2-3 open positions at any given time.</li>
                    <li>We track all open positions and advise accordingly.</li>
                    <li>Calls will reach you on time always. WhatsApp Msg may take 6 to 10 seconds.</li>
                </div> */}
            </div>
            <br />
            <br />
            <div id="kpoint">
                <div id="hd">
                    <h4 id='clr'>Pricing</h4>
                    <h1>Pick a plan that fits your needs</h1>
                    <br />
                </div>
                <div id="pricing">
                    <div className="all">
                        <svg xmlns="http://www.w3.org/2000/svg" color='#712df8' width="56" height="50" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>
                        <br />
                        <h3>Short Term</h3>
                        <br />
                        <h1>INR 5,999 - 15,999</h1>
                        <p>per weekly and quaterly</p>
                    </div>
                    <div className="all">
                        <svg xmlns="http://www.w3.org/2000/svg" color='#712df8' width="56" height="50" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>
                        <h3>Long Term</h3>
                        <br />
                        <h1>INR 34,999 - 99,999</h1>
                        <p>per half-yearlt and yearly</p>
                    </div>
                </div>
            </div>
        </div>
        <p id='centered'>
            <h1>Bank Account Details</h1>
            <h3>NEFT / RTGS / IMPS / UPI</h3>
            <br />
            <img src="https://www.researchandranking.com/assets/services/bankico/hdfc.jpg" height={50} alt="" />
            <br /><br />
            <b>Account Holder</b>: TRADE FISHER <br />
            <b>Account Number</b> : 50200075767143 <br />
            <b>IFSC</b> : HDFC0000629 <br />
            <b>Account Type</b> : CURRENT <br />
            <b>PhonePay & Gpay</b>  - 7000554885 <br />
            <b>Upi ID</b>  - tradefisher@ybl
            <br />
            <br />
            <img src="https://i.imgur.com/IJXesxE.jpeg" height={200} alt="" />
        </p>
        <div id="lastp">
        <div id="ltop">
          <p><h5>Call Us:</h5>+91 7000554885</p>
          <p><h5>Email:</h5>support@tradefisher.in</p>
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
                <p>Address: Trade Fisher Research Private Limited, Marathon Futurex, A-603 6th Floor, Mafatlal Mills Compound, N M Joshi Marg, South West Delhi, Gurgaon 110037</p>
                <p>Telephone: +91 7672359232 | Email: support@tradefisher.in | © Copyright 2021 Trade Fisher Research Pvt. Ltd. All Rights Reserved. | GSTIN : 27BBDCE9006E1ZV</p>
                {/* <p>Principal Officer: Manish Goel, Email: manish@equentis.com, +91 22 61013800</p> */}
            </div>
            <div className="address">
                <p>Address: Trade Fisher Research Private Limited, Marathon Futurex, A-603 6th Floor, Mafatlal Mills Compound, N M Joshi Marg, Lower Parel East, AK Road Gujrat 395008</p>
                <p>Telephone: +91 7672359232 | Email: support@tradefisher.in | © Copyright 2021 Trade Fisher Research Pvt. Ltd. All Rights Reserved. | GSTIN : 27BBDCE9006E1ZV</p>
                {/* <p>Principal Officer: Manish Goel, Email: manish@equentis.com, +91 22 61013800</p> */}
            </div>
            <div className="address">
                <p>Address: Trade Fisher Research Private Limited, Marathon Futurex, A-603 6th Floor, Mafatlal Mills Compound, N M Joshi Marg, Lower Parel East, Chapra Bihar 841301</p>
                <p>Telephone: +91 7672359232 | Email: support@tradefisher.in | © Copyright 2021 Trade Fisher Research Pvt. Ltd. All Rights Reserved. | GSTIN : 27BBDCE9006E1ZV</p>
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
            <img src="https://i.imgur.com/MlTeCzJ.png" alt="none"/>
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

export default Contact