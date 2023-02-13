import React from 'react'
import PizzaCard from './PizzaCard'

function PizzaList() {
  return (
    <div className="flex flex-col items-center px-3 py-5 -container font-bold">
      <h1 className="text-3xl -title sm:text-center">THE BEST PIZZA IN TOWN</h1>
      <p className="-desc text-xl text-[#444] w-[70%] sm:w-11/12 sm:text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vero,
        quos nobis dignissimos quibusdam exercitationem unde fugit ad saepe a
        temporibus illo inventore dolore. Excepturi rerum doloremque repudiandae
        distinctio accusamus placeat eligendi incidunt modi, dolores, nostrum
        asperiores minus ipsa ab.
      </p>
      <div className="-wrapper flex items-center justify-center w-full flex-wrap">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  )
}

export default PizzaList
