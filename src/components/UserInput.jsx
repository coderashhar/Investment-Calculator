import { useState } from "react"

export default function UserInput({onChangeFn, details}){
    
    return (
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">initial investment</label>
                    <input type="text" name="initialInvestment" 
                     value={details.initialInvestment} onChange={onChangeFn} required/>
                </p>
                <p>
                    <label htmlFor="annualInvestment">annual investment</label>
                    <input type="text" name="annualInvestment" 
                     value={details.annualInvestment} onChange={onChangeFn} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">expected return</label>
                    <input type="number" name="expectedReturn" 
                     value={details.expectedReturn} onChange={onChangeFn} required/>
                </p>
                <p>
                    <label htmlFor="duration">duration</label>
                    <input type="number" name="duration"
                     value={details.duration} onChange={onChangeFn} required/>
                </p>
            </div>
        </section>
    )
}