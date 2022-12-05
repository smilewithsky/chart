import React, { useState, useEffect, Fragment } from 'react';
import data from './data.json'
const Chart = (props) => {
    const [show, setShow] = useState(props?.isShow ? props?.isShow : "+");
    const [isUnique, setIsUnique] = useState(props.data?.length === 1 ? true : false);
    const [width, setWidth] = useState(props.data.length);
    const handleShow = () => {
        setShow((p) => p === "-" ? "+" : "-")
    }

    useEffect(() => {
        setShow("+")
    }, [props?.isShow])

    console.log("isUnique", isUnique)


    return (
        <ul className={`list-card-clone ${props.isShow === "-" ? "list-card-clone--show" : "list-card-clone--not-show"}`}>
            {props.data.map(item => {
                console.log("item ", item.children?.length)
                return (
                    <Fragment key={item.name}>
                        <li className={`card-clone ${isUnique ? "card-clone--unique" : ""} `} style={{ minWight: `${item.children?.length ? (item.children?.length * 300) + "px" : '250px'}` }} >
                            <div className='card-clone__header'>
                                {item.image ? <img src={item.image} alt="" /> : ""}
                            </div>
                            <div className='card-clone__body'>
                                <div className='card-clone__container'>
                                    <h3 className='card-clone__body-name'>{item.name}</h3>
                                    <p className='card-clone__body-position'>{item.position}</p>
                                    <p className='card-clone__body-department'>{item.department}</p>
                                </div>
                            </div>
                            {item.children?.length ? <div className='item'> <button className='show' onClick={handleShow} ><span>{show}</span></button> </div> : ""}
                            {item?.children?.length && <Chart isShow={show} data={item?.children} />}
                        </li>
                    </Fragment>
                )
            })}
        </ul>
    )
}

const ChartComponent = () => {
    return (
        <div className="org-tree">
            <Chart data={data} />
        </div>
    );
};

export default ChartComponent;