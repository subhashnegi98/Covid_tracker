import { useEffect, useState } from "react"
import React from 'react'

export const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <section>
                <h1 className="animate__animated animate__flash animate__slow animate__infinite">🔴LIVE</h1>
                <h2>COVID-19 STATISTICS</h2>
                <div className="main">
                    <ul className = "content">
                        <li className="card">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name">COUNTRY</p>
                                    <p className="card_total card_small">INDIA</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>TOTAL</span> RECOVERED</p>
                                    <p className="card_total card_small">{data.recovered}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>TOTAL</span> CONFIRMED</p>
                                    <p className="card_total card_small">{data.confirmed}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>TOTAL</span> DEATHS</p>
                                    <p className="card_total card_small">{data.deaths}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                                    <p className="card_total card_small">{data.active}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>LAST</span> UPDATE</p>
                                    <p className="card_total card_small">{data.lastupdatedtime}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Covid;
