import React from 'react';

interface GoProPopupProps {
    onClose: () => void;
}

const GoProPopup: React.FC<GoProPopupProps> = ({onClose}) => {

    // @ts-ignore
    // @ts-ignore
    return (
        <div
            className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
            <div className="relative z-10 w-11/12 p-2 bg-white md:w-1/3 md:p-8">
                <div className="flex items-center justify-center mb-2">
                    <i className="fas fa-coffee"></i>
                </div>
                <h1 className="mb-0 text-3xl font-bold text-center text-black md:text-4xl">There is no Pro Plan</h1>
                <div className="w-5/6 mx-auto my-4 text-justify md:w-3/4">
                <p className="mb-2"> If you're a fan of Quirky.ai, feel free to show your support by buying me a
                        coffee..or a beer ;) </p>
                    <p>
                        {' '}
                        Also if you have any questions or feature requests, don't be shy! Hit me up on {' '}
                        <a target="_blank" rel="noreferrer" className="font-bold text-purple-700"
                           href="https://twitter.com/QuirkySwirl">
                            Twitter
                        </a>
                    </p>
                    <div className="flex justify-center mt-10 justify-items-center">
                    <a href="https://www.buymeacoffee.com/quirkyswirl"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a beer&emoji=🍺&slug=quirkyswirl&button_colour=BD5FFF&font_colour=ffffff&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00" /></a>
                        <a href='https://www.buymeacoffee.com/quirkyswirl' target='_blank'>
                            <img height='36'
                                                                                   style={{border:0, height:'36px'}}
                                                                                   src='https://img.buymeacoffee.com/button-api/?text=Buy me a beer&emoji=🍺&slug=quirkyswirl&button_colour=BD5FFF&font_colour=ffffff&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00"'
                                                                                   alt='Buy Me a Coffee'/></a>
                    </div>
                </div>


                <button className="absolute text-xl font-bold top-2 right-2" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default GoProPopup;
