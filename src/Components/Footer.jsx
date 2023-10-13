import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#1d1e20] text-[#9da1a5] text-center py-6 text-lg border-t border-white border-opacity-50 px-4'>
            <p>© Copyrights <span className='text-white'>Elsayed Kewan</span> {new Date().getFullYear()}. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer