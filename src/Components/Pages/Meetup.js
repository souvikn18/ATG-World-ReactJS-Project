import React from 'react'
import ThreeDots from '../Images/baseline-more_vert-24px.svg'
import ViewsIcon from '../Images/visibility_24px.svg'
import ShareIcon from '../Images/baseline-share-24px.svg'
import LocationIcon from '../Images/outline-location_on-24px.svg'
import CalenderIcon from '../Images/baseline-today-24px.svg'

const PrimaryCard = ({CardImage, CardType, CardTitle, CardOwnerPhoto, CardOwnerName, CardViews, LocationName, CustomDate}) => {
    return(
        <>
            <div className='w-[692px] h-[490px] border-[0.5px] border-[#e0e0e0] rounded-[4px] border-solid flex flex-col'>
                <div>
                    <img className='w-[692px] h-[220px]' src={CardImage} alt='...'/>
                </div>
                <div>
                    <p className='w-[110px] h-[25px] text-[18px] font-[500] ml-[20px] mt-[20px]'>{CardType}</p>
                </div>
                <div className='flex gap-[24px]'>
                    <div>
                        <h3 className='w-[600px] h-[29px] text-[22px] font-[600] leading-[29.52px] ml-[20px]'>{CardTitle}</h3>
                    </div>
                    <div>
                        <img src={ThreeDots} alt='...'/>
                    </div>
                </div>
                <div className='flex ml-[20px]'>
                    <div className='flex gap-[4px]'>
                        <img className='w-[20px] h-[20px]' src={CalenderIcon} alt='...'/>
                        <p className='w-[142px] h-[20px] text-[15px] font-[500]'>{CustomDate}</p>
                    </div>
                    <div className='flex'>
                        <img className='w-[20px] h-[20px]' src={LocationIcon} alt='...'/>
                        <p className='w-[128px] h-[20px] text-[15px] font-[500]'>{LocationName}</p>
                    </div>
                </div>
                <div>
                    <button className='w-[652px] h-[38px] border-[0.35px] border-[#a9aeb8] rounded-[8px] border-solid bg-white text-[#e56135] mx-[20px] text-[13px] font-[600] leading-[18.25px]'>Visit Website</button>
                </div>
                <div className='flex gap-[292px] my-4'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[48px] h-[48px] rounded-full ml-[20px]' src={CardOwnerPhoto} alt='...'/>
                        <p className='text-[18px] font-[600] w-[125px] h-[24px] mt-1'>{CardOwnerName}</p>
                    </div>
                    <div className='flex items-center gap-[40px]'>
                        <div className='flex mt-[5px] gap-[8px]'>
                            <img className='h-[18px] w-[18px] mt-[1.5px]' src={ViewsIcon} alt='...'/>
                            <p className='w-[69px] h-[18px] text-[#525252] text-[14px] font-[500]'>{CardViews}</p>
                        </div>
                        <div className='w-[42px] h-[36px] bg-[#edeef0] rounded-[2px]'>
                            <img className='h-[18px] w-[18px] mx-[12px] my-[9px]' src={ShareIcon} alt='...'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PrimaryCard