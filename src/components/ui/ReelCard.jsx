import React from 'react'

const ReelCard = ({embed,url,platform}) => {
  console.log(embed,url,platform);
  
    return (
    <div className='object-cover object-left-top absolute h-full w-full inset-0 bg-black  transform -translate-x-5 -translate-y-10'>
        {
            platform === "instagram" ? (
                <div className='relative h-full w-full overflow-hidden'>
    <iframe
        src={`https://www.instagram.com/p/${embed}/embed`}
        width="100%"
        height="400"
        allowTransparency="true"
        scrolling="no"
        allow="encrypted-media"
        sandbox="allow-scripts allow-same-origin"
        className='absolute top-0 left-0 h-full w-full object-cover object-left-top inset-0 transform scale-150 -translate-x-28 -translate-y-52 '
        style={{ transformOrigin: 'top left' }}
    ></iframe>
    <div className="absolute top-0 left-0 h-14 w-full bg-black"></div> {/* Cover overlay */}
</div>
            ):(
                <blockquote
                className='object-cover object-left-top absolute h-full w-full inset-0 '
                cite={url}
                data-video-id={embed}
                style={{ maxWidth: '605px', minWidth: '325px' }}
                >
                    <section></section>
                </blockquote>
            )
        }
    </div>
  )
}

export default ReelCard