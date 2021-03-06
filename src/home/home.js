import React from 'react'
import Footer from '../layout/footer/footer'
import Services from './services'
import TopCarousel from './TopCarousel'
class Home extends React.Component {
    render() {
        return (
            <>
                <TopCarousel></TopCarousel>
                <Services />
                <Footer />
            </>
        )
    }
}
export default Home