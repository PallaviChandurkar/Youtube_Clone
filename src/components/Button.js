import React from "react";

const Button = () => {

    const list = [
        'All', 'Mixes', 'Music', 'Gardening', 'T-Series', 'Computer-Science', 'Music', 'Thoughts', 'News', 'Shopping' 
    ]

    return (
        <div>
            {
                list.map((btn,index) => {
                    return <button className="bg-gray-200 px-4 py-1 rounded-lg m-2" key={index}>{btn}</button>
                })
            }
        </div>
    )
};

export default Button;

