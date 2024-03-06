import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from "../../Asssets/slider_img.svg"
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Button } from '../../Components/Button'
import { Pagination } from 'swiper/modules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from '../../Components/Card';
import { openModal } from '../../slices/modalSlice';
import { useDispatch } from 'react-redux';


const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <section id="lessons">
        <Container>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <div className='sliderBox'>
                <Row>
                  <Col lg={6}>
                    <div>
                      <h1>Lessons and insights <br /> <span>from 8 years</span></h1>
                      <p>Where to grow your business as a photographer: site or social media?</p>
                      <Button onClick={()=> dispatch(openModal())} width="95px" height="36px" text="Register" />
                    </div>
                  </Col>
                  <Col lg={6} className='d-flex align-items-center'>
                    <div className='img-box m-auto'>
                      <img src={image} alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderBox'>
                <Row>
                  <Col lg={6}>
                    <div>
                      <h1>Lessons and insights <br /> <span>from 8 years</span></h1>
                      <p>Where to grow your business as a photographer: site or social media?</p>
                      <Button onClick={()=> dispatch(openModal())} width="95px" height="36px" text="Register" />
                    </div>
                  </Col>
                  <Col lg={6} className='d-flex align-items-center'>
                    <div className='img-box m-auto'>
                      <img src={image} alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderBox'>
                <Row>
                  <Col lg={6}>
                    <div>
                      <h1>Lessons and insights <br /> <span>from 8 years</span></h1>
                      <p>Where to grow your business as a photographer: site or social media?</p>
                      <Button onClick={()=> dispatch(openModal())} width="95px" height="36px" text="Register" />
                    </div>
                  </Col>
                  <Col lg={6} className='d-flex align-items-center'>
                    <div className='img-box m-auto'>
                      <img src={image} alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
      <section id='client'>
        <Container>
          <div className='client-box'>
            <h2>Our Clients</h2>
            <p>We have been working with some Fortune 500+ clients</p>
            <div className='client-logo'>
              <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389082/project/Logoclients-6_by5ftv.svg" alt="Client Logo" />
              <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389081/project/Logoclients-5_eflnpo.svg" alt="Client Logo" />
              <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389080/project/Logoclients_bmcna9.svg" alt="Client Logo" />
              <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389080/project/Logoclients-2_rblcvs.svg" alt="Client Logo" />
              <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389080/project/Logoclients-1_w6jagg.svg" alt="Client Logo" />
              <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389080/project/Logoclients-4_ihedyx.svg" alt="Client Logo" />
              <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389080/project/Logoclients-3_jxadpr.svg" alt="Client Logo" />
            </div>
          </div>
        </Container>
      </section>
      <section id='community'>
        <Container>

          <div className='text-header'>
            <h2>Manage your entire community in a single system</h2>
            <p>Who is Nextcent suitable for?</p>
          </div>
          <div className='card-container'>
            <Row>
              <Col lg={4} md={4} sm={6}>
                <Card
                  image="https://res.cloudinary.com/dllku99ao/image/upload/v1709389415/project/card/Iconcard-icon_bkxn56.svg"
                  title="Membership Organisations"
                />
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Card
                  image="https://res.cloudinary.com/dllku99ao/image/upload/v1709389416/project/card/Iconcard-icon-1_won9px.svg"
                  title="National Associations"
                />
              </Col>
              <Col lg={4} md={4}>
                <Card
                  image="https://res.cloudinary.com/dllku99ao/image/upload/v1709389416/project/card/Iconcard-icon-2_vxuih9.svg"
                  title="Membership Organisations"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section id="unlock">
        <Container>
          <Row>
            <Col lg={5} md={5}>
              <div className='img-box'>
                <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709392005/project/rafikimobile-login_snfj6j.svg" alt=" mobile login" />
              </div>
            </Col>
            <Col lg={7} md={7}>
              <div>
                <h2>The unseen of spending three years at Pixelgrade</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <Button width="105px" height="36px" text="Learn More" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="achievements">
        <Container>
          <Row>
            <Col lg={6}>
              <h2>Helping a local <br /> <span>business reinvent itself</span></h2>
              <p>We reached here with our hard work and dedication</p>
            </Col>
            <Col lg={6}>
              <div>
                <Row>
                  <Col>
                    <div className='count-box'>
                      <div>
                        <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709395934/project/count-icons/Iconcount-icons_hrotqc.svg" alt="" />
                      </div>
                      <div>
                        <h2>2,245,341</h2>
                        <p>Members</p>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className='count-box'>
                      <div>
                        <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709395933/project/count-icons/Iconcount-icons-3_pqg36p.svg" alt="" />
                      </div>
                      <div>
                        <h2>1,926,436</h2>
                        <p>Payments</p>
                      </div>
                    </div></Col>
                </Row>
                <Row>
                  <Col>
                    <div className='count-box'>
                      <div>
                        <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709395935/project/count-icons/Iconcount-icons-1_r6vv2g.svg" alt="" />
                      </div>
                      <div>
                        <h2>46,328</h2>
                        <p>Clubs</p>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className='count-box'>
                      <div>
                        <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709395935/project/count-icons/Iconcount-icons-2_qnvcsh.svg" alt="" />
                      </div>
                      <div>
                        <h2>828,867</h2>
                        <p>Event Bookings</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="unlock">
        <Container>
          <Row>
            <Col lg={5} md={5}>
              <div className='img-box'>
                <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709397208/project/panamobile-login_vnambi.svg" alt="mobile register" />
              </div>
            </Col>
            <Col lg={7} md={7}>
              <div>
                <h2>How to design your site footer like we did</h2>
                <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <Button width="105px" height="36px" text="Learn More" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="customers">
        <Container>
          <Row>
            <Col lg={5} md={5}>
              <div className='img-box'>
                <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709397346/project/image_9siteimage_ow4kln.svg" alt="tesla logo tf" />
              </div>
            </Col>
            <Col lg={7} md={7}>
              <div className='customers-box'>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h2>Tim Smith</h2>
                <span>British Dragon Boat Racing Association</span>
                <div className='customers-logo'>

                  <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389082/project/Logoclients-6_by5ftv.svg" alt="Client Logo" />
                  <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389081/project/Logoclients-5_eflnpo.svg" alt="Client Logo" />
                  <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389080/project/Logoclients_bmcna9.svg" alt="Client Logo" />
                  <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389080/project/Logoclients-2_rblcvs.svg" alt="Client Logo" />
                  <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389080/project/Logoclients-1_w6jagg.svg" alt="Client Logo" />
                  <img src="https://res.cloudinary.com/dllku99ao/image/upload/v1709389080/project/Logoclients-4_ihedyx.svg" alt="Client Logo" />
                  <div>
                    <a href="">Meet all customers</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home

