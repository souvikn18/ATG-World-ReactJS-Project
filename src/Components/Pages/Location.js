import React from 'react'
import LocationIcon from '../Images/outline-location_on-24px.svg'
import EditIcon from '../Images/baseline-edit-24px.svg'
import InfoIcon from '../Images/baseline-error_outline-24px.svg'
function Location() {
    return(
        <>
        <div className='flex flex-col mt-[56px]'>
            <div className='flex border-[0.2px] border-transparent border-solid border-b-[#bbbbbb]'>
                    <div className='flex gap-[4px]'>
                        <img src={LocationIcon} alt='...'/>
                        <input className='outline-none' placeholder='Enter your location'></input>
                    </div>
                    <div>
                        <img src={EditIcon} alt='...'/>
                    </div>
                </div>
                <div className='flex mt-[32px] gap-[7px]'>
                    <img className='w-[16px] h-[16px] mt-1' src={InfoIcon} alt='...'/>
                    <p className='w-[220px] h-[32px] text-[12px] font-[400]'>Your location will help us serve better and extend a personalised experience.</p>
                </div>
        </div>
            
        </>
    )
}
export default Location