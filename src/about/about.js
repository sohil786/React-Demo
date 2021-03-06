import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../layout/footer/footer'
class About extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <h2 class="featurette-heading"> ABOUT US</h2>
                    <h1></h1>
                    <div class="row featurette">
                        <div class="col-md-7">
                            <h2><span class="text-muted">State-of-the-art service provider with a clear
                        focus on integrated end to end outsourcing.</span></h2>
                            <p class="lead">
                                Grassroots BPO was founded in 2011 with the aim of delivering world class BPMS solutions to clients using a blend of domain experience, cutting edge technology and process excellence driven by industry best practices at competitive costs. Our core team consists of veterans from the telecommunication, BPO and Technology industries,
                                with a combined experience of over 200 years.
                                The vast experience that our leadership team brings to the table has steered
                                Grassroots from humble beginnings to grow exponentially to where we stand today.
                                With a client base that expands across varied fields like E-Commerce,
                                Retail and Education to Finance and Telecommunications, Grassroots holds a name
                                for itself in the BPO Industry. We have a constantly growing team of over
                                1400 resources, enabling us to service clients across India & globally, with four company owned delivery centers in Bangalore,
                                one in Mysore and strategic partners in Delhi, Mumbai, Pune , Noida & recently we have allied with a partner in China.
                                We pride ourselves in being able to
                                adapt to challenges real time irrespective of demographics, languages or domain,
                                enabling us to consistently deliver excellence.
                            </p>
                        </div>
                        <div class="col-md-5">
                            <img width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" src="https://www.grassrootsbpo.com/img/about-bpo.jpg" />
                        </div>
                    </div>
                </Container>
                <hr class="featurette-divider" />
                <Footer />
            </>
        )
    }
}
export default About