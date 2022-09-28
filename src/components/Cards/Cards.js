
import React from 'react'
import './Cards.css';
import nft1 from './imgs/nfts/bored_nft_1.png'
import user_1 from './imgs/users/user_image.jpg'



const Cards = () => {
    return (
        <div>
            <h1 className="titulo_principal">NFT: Non fungible token</h1>
            

            <div>
            <div className="nfts_present">

                <div className="card color_card_nft">

                    <div className="card__head">
                        <div className="card__product-img">
                            <img src={nft1} alt="" />
                        </div>
                    </div>

                    <div className="card__body">
                        <a href="" className="card__title">Bored Ape Yacht Club #3424</a>
                        <p className="card__text">Top 10 collection of internet</p>
                        <div className="wrapper">
                            <div className="card__price">
                                <i className="fab fa-ethereum"></i>
                                <span>0.041 ETH</span>
                            </div>
                            <div> <a href="" className="button3">Comprar</a>

                            </div>
                        </div>
                    </div>

                    <div className="card__footer">
                        <img src={user_1}alt="" className="card__author-img" />
                        <p className="card__author-name"> Creation of <a href=""> Juan Saint</a></p>


                    </div>

                </div>
            </div>
            </div>

            


        </div>

    )
}

export default Cards