'use client'
import { useState,useEffect } from "react"

type Properties = {
	title: string
}

export default function UseEffect(props: Properties){
	const [ retValue,setRetValue ] = useState("未返回")
	const [ count,setCount ] = useState(0)
	useEffect(
			()=>{
					const fetchData = async ()=>{
						const resp = await fetch("https://free.mockerapi.com/post", {
									method: "POST",
									headers: { 'Content-Type': "application/json"},
									body: JSON.stringify({name: "John"})
								}
							)
						const data = await resp.json()
						console.log(data)
						setRetValue(data['method'])
					}
					fetchData()
					//setRetValue
				}, [])
	console.log("title: " + props.title)
	
	return (
		<main>
			<div>
				<h1>{props.title}</h1>
				<p>Http Post返回： {retValue}</p>
				<p>Count: {count}</p>
				<button style={{background:'green'}}
					onClick={
						()=>{ setCount(count+1) }
					}
				>
					加1
				</button>
			</div>
		</main>
	)
}

