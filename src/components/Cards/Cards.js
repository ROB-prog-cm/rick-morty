import React from 'react';
import styles from './Card.module.scss'
import {Link} from "react-router-dom";

const Cards = ({results, page}) => {

  let display

  if (results) {
    display = results.map((res) => {
      let {id, image, name, status, location} = res;
      return (
        <Link
          style={{textDecoration: "none"}}
          to={`${page}${id}`}
          key={id}
          className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark'>
          <div className={styles.card}>
            <img src={image} className={`${styles.img} img-fluid`} alt="photo"/>
            <div style={{padding: '10px'}} className='content'>
              <div className='fs-2 fw-bold mb-4'>{name}</div>
              <div className=''>
                <div className="fs-5">Last location:</div>
                <div className='fs-4'>{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      )
    })
  } else {
    display = "No Characters !!!"
  }
  return <>{display}</>
};

export default Cards;
