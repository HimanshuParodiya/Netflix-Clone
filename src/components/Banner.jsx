import React from 'react'
import "./Banner.css"

const Banner = () => {
    // Function if the lenth of text is more then show .....
    const truncate = (string, n) =>{
        return string?.length > n ? string.substr(0, n - 1) + "...." : string;
    }
    return (
        <>
        <header className='banner' style={{
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    Movie Name
                </h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className="banner_description">
                    {
                        truncate(`
                        This is test description
                        `,150 )
                    }
                    </h1>
            </div>
            <div className="banner--fadeButton" />
        </header>
            </>
    )
}

export default Banner