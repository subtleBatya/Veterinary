
import React from 'react'

function Divider(props) {
    return (
        <div className='flex w-full items-center gap-2'>
            {props.showleft &&
                < svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M5.07538 5.07539H19.9246V19.9246H5.07538V5.07539Z" stroke="#D3AA65" stroke-width="1.5" />
                    <path d="M12.5 2L23 12.5L12.5 23L2 12.5L12.5 2Z" stroke="#D3AA65" stroke-width="1.5" />
                </svg>
            }
            <hr className='w-full border-[1px] border-goldColor' />
            {props.showright &&

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M5.07538 5.07539H19.9246V19.9246H5.07538V5.07539Z" stroke="#D3AA65" stroke-width="1.5" />
                    <path d="M12.5 2L23 12.5L12.5 23L2 12.5L12.5 2Z" stroke="#D3AA65" stroke-width="1.5" />
                </svg>
            }
        </div >
    )
}

export default Divider
