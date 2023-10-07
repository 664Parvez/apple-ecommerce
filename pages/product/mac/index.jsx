import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import productCss from "../../../styles/product.module.css"

import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import Heading from '../../../components/Heading'

export async function getServerSideProps () {
    const response = await fetch("http://localhost:3000/api/products")
    const data = await response.json()

    return {
        props : {
            data
        }
    }
}

const Mac = ({data}) => {

  return (
    <>

        <Navbar />
        <Heading />

        <div id={productCss.first_section}>

            <div className="container">
                <h1 className='text-left'>Shop Mac</h1>
                <h4 className='mb-5'>Mac Product. Take Your Pick</h4>
            </div>

            <div className="container">
                <div className="row">
                    {
                        data.map((items) => {
                            return items.category === "mac" ? <>
                                <div key={items.id} className='col-lg-4 col-md-6 mt-3'>
                                    <div id={productCss.mac_product_card}>
                                        <p>{items.version}</p>
                                        <h3>{items.name}</h3>
                                        <Image src={items.image} width="20" height="20" layout='responsive' alt="" />
                                        <div className="row">
                                            <div className="col-7">
                                                <h5>$ {items.price}</h5>
                                            </div>
                                            <div className="col-5 text-end">
                                                <Link href={items.slug} className="btn btn-outline-secondary">Buy</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </> : ""
                        })
                    }
                </div>
            </div>
        </div>

        <Footer />

    </>
  )
}

export default Mac