'use client'
import { useState } from "react"


export default function StateFunction(){
	/**
		const [ count, setCount ] = useState(0)   
	**/
	let count = 0   //定义普通变量，只会在控制台，输出变化值，但在前端的<p>标签不会
	
	return (
		<main>
			<div>
				{/** <input type="text" value={count}> **/}
				<p>Count: {count}</p>
				{/**<button style={{width:100,height:30}} onClick={() => setCount(count + 1)}>increment</button>**/}
				<button 
					style={{width:100,height:30}} 
					onClick={() => {
						count = count + 1
						console.log(count)
					}}
				>
				increment
				</button>
			</div>
		</main>
	)
}