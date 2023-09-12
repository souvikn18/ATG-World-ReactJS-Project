import React from 'react'
import DropdownArrow from '../Images/baseline-arrow_drop_down-24px.svg';
import JoinGroup from '../Images/baseline-group_add-24px.svg';

function Navbar2() {
    return(
        <>
        <div className='flex gap-[408px] justify-center mt-[35px] ml-[-26px]'>
            <div>
                    <ul className='list-none flex gap-[20px]'>
                        <li className='flex flex-col w-[93px] h-[21px] text-black text-[16px] font-[400] break-words'>All Posts(32)
                        <hr className='border-[0.5px] border-[#000000] w-[93px] mt-[29px]'></hr></li>
                        <li className='w-[47px] h-[21px] text-[#8a8a8a] text-[16px] font-[400] break-words'>Article</li>
                        <li className='w-[41px] h-[21px] text-[#8a8a8a] text-[16px] font-[400] break-words'>Event</li>
                        <li className='w-[72px] h-[21px] text-[#8a8a8a] text-[16px] font-[400] break-words'>Education</li>
                        <li className='w-[27px] h-[21px] text-[#8a8a8a] text-[16px] font-[400] break-words'>Job</li>
                    </ul>
                </div>
                <div className='flex gap-[16px]'>
                    <button className='flex gap-[10px] w-[133px] h-[36px] bg-[#edeef0] rounded-[4px] py-[8px] pl-[12px]'><p className='w-[83px] h-[20px] text-[15px] font-[500]'>Write a Post</p><img className='h-[22px] w-[22px]' src={DropdownArrow} alt='...'/></button>
                    <button className='flex gap-[6px] w-[125px] h-[36px] bg-[#2f6ce5] rounded-[4px] py-[7px] pl-[10px]'><img src={JoinGroup} alt='...'/><p className='text-white text-[15px] font-[500] w-[75px] h-[20px]'>Join Group</p></button>
                </div>
        </div>
        <hr className='border-[0.5px] border-[#E0E0E0] w-[1040px] mx-auto'></hr>
        
        </>
    )
}
export default Navbar2