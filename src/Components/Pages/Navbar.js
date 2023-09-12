import React from 'react'
import SearchIcon from '../Images/baseline-search-24px.svg'
import DropdownArrow from '../Images/baseline-arrow_drop_down-24px.svg'

const Navbar = ({Logo}) => {
    return(
        <>
        <div className='flex justify-center gap-[280px] h-[72px] items-center'>
            <div>
                    <img className='my-[24px]' src={Logo} alt='Logo'/>
                </div>
                <div className='w-[360px] h-[42px] bg-[#f2f2f2] flex relative rounded-[21px]'>
                    <img className='py-[10px] pl-[14px] pr-[324px]' src={SearchIcon} alt='Searchicon'/>
                    <input className='h-[19px] w-[242px] absolute bg-[#f2f2f2] left-[50px] outline-none top-[10px] bottom-[11px] right-[68px]' id='placeholder' placeholder='Search for your favorite groups in ATG'/>
                </div>
                <div className='flex'>
                    <p className='text-[#2E2E2E] text-[16px] font-[IBM Plex Sans] font-[500] h-[21px] w-[193px]'>Create account. <span className='text-[#2F6CE5] font-[700]'><button>It's Free!</button></span></p>
                    <img className=' h-[24px] w-[24px]' src={DropdownArrow} alt='...'/>
                </div>
        </div>
            
        </>
    )
}
export default Navbar;