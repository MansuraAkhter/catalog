import { useState } from 'react'
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react'

const LeftBar = ({
  checked,
  setChecked,
  applyFilter,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
}) => {
  const handleChange = (event) => {
    let key = event.target.value
    setChecked((prevState) => {
      let copy = { ...prevState }
      copy[key] = !copy[key]
      console.log(copy)
      return copy
    })
  }
  return (
    <div className="leftbar">
      <h5>
        <b>Price</b>
      </h5>
      <div className="pricewrapper">
        <div className="price">From {minValue} $</div>
        <div className="price">upto {maxValue} $</div>
      </div>
      <div className="range-container">
        <MultiRangeSlider
          min={0}
          max={9000}
          minValue={0}
          maxValue={5000}
          onChange={(e) => {
            setMinValue(e.minValue)
            setMaxValue(e.maxValue)
          }}
          label={false}
          ruler={false}
          style={{ border: 'none', boxShadow: 'none', padding: '15px 10px' }}
          barLeftColor="grey"
          barInnerColor="red"
          barRightColor="grey"
          thumbLeftColor="red"
          thumbRightColor="red"
        />
      </div>
      <div className="theme">
        <h5>
          <b>Theme</b>
        </h5>
        <input
          className="c"
          type="checkbox"
          name="theme1"
          value="men's clothing"
          checked={checked["men's clothing"]}
          onChange={handleChange}
        />
        <label className="checkb" htmlFor="theme1">
          men's clothing
        </label>
        <br />
        <input
          className="c"
          type="checkbox"
          name="theme2"
          value="electronics"
          checked={checked['electronics']}
          onChange={handleChange}
        />
        <label className="checkb" htmlFor="theme2">
          Electronics
        </label>
        <br />
        <input
          className="c"
          type="checkbox"
          name="theme3"
          value="jewelery"
          checked={checked['jewelery']}
          onChange={handleChange}
        />
        <label className="checkb" htmlFor="theme3">
        Jewelery
        </label>
        <br />
        <input
          className="c"
          type="checkbox"
          name="theme4"
          value="women's clothing"
          checked={checked["women's clothing" ]}
          onChange={handleChange}
        />
        <label className="checkb" htmlFor="theme4">
          Women's clothing
        </label>
        <br />
      </div>
      {/* <div className="age">
        <h5>
          <b>Age</b>
        </h5>
        <input className="c" type="checkbox" name="age1" value="Up to a year" /> */}
{/* 
        <label className="checkb" for="age1">
          Up to a year
        </label>
        <br />
        <input
          className="c"
          type="checkbox"
          name="age2"
          value="1 year - 2 years"
        />
        <label className="checkb" for="age2">
          1 year - 2 years
        </label>
        <br />
        <input
          className="c"
          type="checkbox"
          name="age3"
          value="3 years - 5 years"
        />
        <label className="checkb" for="age3">
          3 years - 5 years
        </label>
        <br />
        <input
          className="c"
          type="checkbox"
          name="age4"
          value="6 years - 10 years"
        />
        <label className="checkb" for="age4">
          6 years - 10 years
        </label>
        <br />
        <input
          className="c"
          type="checkbox"
          name="age5"
          value="Older than 12 years"
        />
        <label className="checkb" for="age5">
          Older than 12 years
        </label>
        <br />
      </div> */}
      <button onClick={applyFilter}>APPLY FILTER</button>
    </div>
  )
}

export default LeftBar
