import React from 'react';

/*export*/ interface FilterGroup {
    name: string,
    filters: string[]
}

const CheckboxGroup = ({name, filters}: FilterGroup) => {
    return (
        <>
            <h5>{name}</h5>
            {filters.map((item) => {
                const id = item.toLowerCase().replaceAll(" ", "");
                return <div className="form-check d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" id={id}/>
                    <label className="form-check-label fs-5 ms-2" htmlFor={id}>
                        {item}
                    </label>
                </div>;
            })}
        </>
    );
};

export default CheckboxGroup;