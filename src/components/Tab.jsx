import React from 'react';

const Tab = ({setActiveTab,carts}) => {
return (
<div>
    {/* name of each tab group should be unique */}
    <div className="tabs tabs-box justify-center w-80 rounded-full mx-auto">
        <input onClick={()=>setActiveTab('model')} type="radio" name="my_tabs_1" className="tab rounded-full w-32" aria-label="Model" defaultChecked />
        <input onClick={()=>setActiveTab('cart')} type="radio" name="my_tabs_1" className="tab rounded-full w-32" aria-label={`Cart (${carts.length})`}  />
    </div>
</div>
);
};

export default Tab;