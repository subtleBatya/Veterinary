
import React from 'react'
import imager from './../../images/karasarimsak.png'
// import { t } from 'i18next'

function SalePrd() {
    return (
        <div className="flex">
            <div className="w-1/2">
                <div className="">25% OFF</div>
                <div className="">BLACK GARLIC OIL</div>
                <div className="">Gara sarymsak yagy bilen has guycli we galyn saclar.</div>
                <div className="s">600</div>
                <div className="">400</div>
            </div>
            <div className="w-1/2">
                <img src={imager} alt="" />
            </div>
        </div>
    )
}

export default SalePrd
