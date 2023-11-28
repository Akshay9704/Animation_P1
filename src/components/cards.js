import React from 'react'

const Cards = () => {
    return (
        <div>
            <div id="cards-container">
                <div className='card' id="card-1">
                    <div className='overlay'>
                        <h4>Virtual Reality</h4>
                        <p>Virtual Reality gaming revolutionizes play, immersing users in lifelike 3D environments through cutting-edge headsets. This transformative experience blends sight, sound, and sometimes touch, offering unparalleled immersion. From heart-pounding adventures to mind-bending simulations, VR gaming transports players into a new dimension of entertainment, redefining the future of digital gameplay.</p>
                    </div>
                </div>
                <div className='card' id="card-2">
                    <div className='overlay'>
                        <h4>Gaming Consoles</h4>
                        <p>Gaming consoles are powerful entertainment hubs, bringing the joy of gaming to living rooms worldwide. With high-performance hardware, intuitive controls, and vast game libraries, consoles like PlayStation, Xbox, and Nintendo Switch deliver immersive experiences. These devices redefine home entertainment, offering a diverse range of games for players of all preferences and ages.</p>
                    </div>
                </div>
                <div className='card' id="card-3">
                    <div className='overlay'>
                        <h4>PC Gaming</h4>
                        <p>
                            PC gaming is a dynamic realm where enthusiasts harness the power of cutting-edge hardware and customizable setups. From graphics-intensive adventures to competitive esports, the PC platform offers a vast gaming landscape. With modding capabilities and a thriving community, PC gaming is a limitless space for innovation, creativity, and unparalleled gaming experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards