
import React, { PureComponent } from 'react'

export default class AgeComponents extends PureComponent {
  render() {

    const { day, month, year, dayOtp, monthOtp, yearOtp, errorMessages, handleChange,handleSubmit } = this.props;

    return (
      <>
        <div className='card'>
        <div className='container'>
                <form onSubmit={handleSubmit}>
                <div className='form_container'>
               {console.log(day)}
                    <div className='block'>
                        <label htmlFor="day">DATE</label>
                        <input type="number" name='day' value={day} onChange={handleChange}  placeholder='DD'  min={1} />
                        <small style={{color:"red"}}>{errorMessages.day}</small>
                    </div>
                    <div className='block'>
                        <label htmlFor="month">MONTH</label>
                        <input type="number" name='month' value={month} onChange={handleChange}  placeholder='MM' min={1}/>
                        <small style={{color:"red"}}>{errorMessages.month}</small>
                    </div>
                    <div className='block'>
                        <label htmlFor="year">YEAR</label>
                        <input type="number" name='year' value={year} onChange={handleChange} 
                         placeholder='YYYY' min={1}/>
                        <small style={{color:"red"}}>{errorMessages.year}</small>
                    </div>
                
              </div>
              <div className='submit_block'>
                       <hr />
                    <button type='submit' className='submit_btn'>
                    <img src="https://img.favpng.com/5/6/2/download-icon-down-arrow-icon-arrows-icon-T97Nnyk4.jpg" alt="icon" />
                    </button>
                    <hr className='hr2'/>
                    
                </div>
                </form>

                <div className='output'>
                    <h1><span id="DD">{yearOtp!=="" ? yearOtp:"--"} </span>years</h1>
                    <h1><span id="MM" >{monthOtp!=="" ? monthOtp:"--"} </span>months</h1>
                    <h1><span id="YY">{dayOtp!=="" ? dayOtp:"--"} </span>day</h1>
                </div>

        </div>
        </div>
      
      </>
    )
  }
}
