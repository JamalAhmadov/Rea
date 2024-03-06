import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.css"
import { DarkLogo } from './DarkLogo'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <Container>
          <Row>
            <Col lg={5}>
              <div>
                <DarkLogo />
                <div>
                  <p>Copyright © 2020 Landify UI Kit.</p>
                  <p>All rights reserved</p>
                </div>
              </div>
            </Col>
            <Col lg={7}>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Footer
