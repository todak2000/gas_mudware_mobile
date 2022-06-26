/**
 * Calculate the Gas Viscosity given the below parameters.
 *
 * @param pressure, @param temperature, @param den
 */


  export const gasBasedAI = (pressure,temperature,den) => {
      let p = parseFloat(pressure)
      let t = parseFloat(temperature)
      let d = parseFloat(den)

      let a = 0.00013*d
      let b = 0.00000137*p
      let c1 = 0.0000167*t
      let c = c1/(d+0.0000216)
      let d1 = -29.5*d
      let d2 = 9.57*d*d
      let d3 = d1/(-21.4-d2)
      let e = Math.sqrt((11.2+p))

    //   let f = 27.2*(Math.tanh(p+(t/p)-19.8))
    
     let x = a + b + c + d3 - 0.0367 - 0.000645*e
         return x.toFixed(2)
   };