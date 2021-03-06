import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
class Services extends React.Component {
  render() {
    return (
      <>
      <Container style={{ marginTop: 20 }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

              <h2>BPO Consulting Services</h2>
              <p>Our Business Process Management Solutions help accelerate innovation, increase productivity, reduce costs, and optimize asset utilization.
OPERATIONS CONSULTING.</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

              <h2>Business Process Management Solutions</h2>
              <p>Our Business Process Management Solutions help accelerate
            innovation, increase productivity, reduce costs, and optimize asset utilization.</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

              <h2>Business Applications and Products</h2>
              <p>Our Business Applications and Products help accelerate
            innovation, increase productivity, reduce costs, and optimize asset utilization.</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
          </div>
        </div>
      </Container>
</>

    )
  }
}
export default Services
