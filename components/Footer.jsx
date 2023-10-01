import Container from "./container"
import Link from "next/link"

import footerCss from "../styles/footer.module.css"

const Footer = () => {
    return(
        <>
            <Container>

                <hr />

                <div className="row" id={footerCss.mainFooter}>
                    <div className="col-lg-3" id={footerCss.wid_20}>
                        <h6><b>Shop and Learn</b></h6>
                        <ul>
                            <li><Link href="">Store</Link></li>
                            <li><Link href="">Mac</Link></li>
                            <li><Link href="">iPad</Link></li>
                            <li><Link href="">iPhone</Link></li>
                            <li><Link href="">Watch</Link></li>
                            <li><Link href="">Vision</Link></li>
                            <li><Link href="">AirPods</Link></li>
                            <li><Link href="">TV & Home</Link></li>
                            <li><Link href="">AirTag</Link></li>
                            <li><Link href="">Accessories</Link></li>
                            <li><Link href="">Gift Cards</Link></li>
                        </ul>

                        <h6><b>Apple Wallet</b></h6>
                        <ul>
                            <li><Link href="">Wallet</Link></li>
                            <li><Link href="">Apple Card</Link></li>
                            <li><Link href="">Apple Pay</Link></li>
                            <li><Link href="">Apple Cash</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3" id={footerCss.wid_20}>
                        <h6><b>Account</b></h6>
                        <ul>
                            <li><Link href="">Manage Your Apple ID</Link></li>
                            <li><Link href="">Apple Store Account</Link></li>
                            <li><Link href="">iCloud.com</Link></li>
                        </ul>
                        <h6><b>Entertainment</b></h6>
                        <ul>
                            <li><Link href="">Apple One</Link></li>
                            <li><Link href="">Apple TV+</Link></li>
                            <li><Link href="">Apple Music</Link></li>
                            <li><Link href="">Apple Arcade</Link></li>
                            <li><Link href="">Apple Fitness+</Link></li>
                            <li><Link href="">Apple News+</Link></li>
                            <li><Link href="">Apple Podcasts</Link></li>
                            <li><Link href="">Apple Books</Link></li>
                            <li><Link href="">App Store</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3" id={footerCss.wid_20}>
                        <h6><b>Apple Store</b></h6>
                        <ul>
                            <li><Link href="">Find a Store</Link></li>
                            <li><Link href="">Genius Bar</Link></li>
                            <li><Link href="">Today at Apple</Link></li>
                            <li><Link href="">Apple Camp</Link></li>
                            <li><Link href="">Apple Store App</Link></li>
                            <li><Link href="">Certified Refurbished</Link></li>
                            <li><Link href="">Apple Trade In</Link></li>
                            <li><Link href="">Financing</Link></li>
                            <li><Link href="">Carrier Deals at Apple</Link></li>
                            <li><Link href="">Order Status</Link></li>
                            <li><Link href="">Shopping Help</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3" id={footerCss.wid_20}>
                        <h6><b>For Business</b></h6>
                        <ul>
                            <li><Link href="">Apple and Business</Link></li>
                            <li><Link href="">Shop for Business</Link></li>
                        </ul>

                        <h6><b>For Education</b></h6>
                        <ul>
                            <li><Link href="">Apple and Educations</Link></li>
                            <li><Link href="">Shop for K-12</Link></li>
                            <li><Link href="">Shop for College</Link></li>
                        </ul>

                        <h6><b>For Healthcare</b></h6>
                        <ul>
                            <li><Link href="">Apple in Healthcare</Link></li>
                            <li><Link href="">Health on Apple Watch</Link></li>
                            <li><Link href="">Health Records on iPhone</Link></li>
                        </ul>

                        <h6><b>For Government</b></h6>
                        <ul>    
                            <li><Link href="">Shop for Government</Link></li>
                            <li><Link href="">Shop for Veterans and Military</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3" id={footerCss.wid_20}>
                        <h6><b>Apple Values</b></h6>
                        <ul>    
                            <li><Link href="">Accessibility</Link></li>
                            <li><Link href="">Education</Link></li>
                            <li><Link href="">Environment</Link></li>
                            <li><Link href="">Inclusion and Diversity</Link></li>
                            <li><Link href="">Privacy</Link></li>
                            <li><Link href="">Racial Equity and Justice</Link></li>
                            <li><Link href="">Supplier Responsibility</Link></li>
                        </ul>
                        <h6><b>About Apple</b></h6>
                        <ul>    
                            <li><Link href="">Newsroom</Link></li>
                            <li><Link href="">Apple Leadership</Link></li>
                            <li><Link href="">Career Opportunities</Link></li>
                            <li><Link href="">Investors</Link></li>
                            <li><Link href="">Ethics & Compliance</Link></li>
                            <li><Link href="">Events</Link></li>
                            <li><Link href="">Contact Apple</Link></li>
                        </ul>
                    </div>
                </div>


                <p className="mt-4" id={footerCss.moreWay}>More ways to shop: <Link href="">Find an Apple Store</Link> or <Link href="">other retailer</Link> near you. Or call 1-800-MY-APPLE.</p>
                
                <hr />
                
                <div className="row" id={footerCss.privacySection}>
                    <div className="col-lg-4">
                        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><Link href="">Privacy Policy</Link></li>
                            <li><Link href="">Terms of use</Link></li>
                            <li><Link href="">Sales & Refunds</Link></li>
                            <li><Link href="">Legal</Link></li>
                            <li><Link href="">Site Map</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 text-end" id={footerCss.usa}>
                        <Link href="">United State</Link>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Footer