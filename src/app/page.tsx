'use client'

import Image from 'next/image';
import img from '@/app/pic/images.jpg';
import UserCardList from '@/app/components/UserCardList'
import StateFunction from '@/app/components/hooks/useState'
import UseEffect from '@/app/components/hooks/useEffect'
{/** import { useRouter } from 'next/navigation' **/}

// 定义用户TS类型
interface UserItem {
  id: number
  name: string
  email: string
  age: number | null
}

interface Props {
  data: UserItem[]
}

function getData(){
	const userItem: UserItem[] = [ {
		id: 1,
		name: "张三",
		email: "zhangsan@example.com",
		age: 22
	  },
	  {
		id: 2,
		name: "李四",
		email: "lisi@example.com",
		age: 28
	  },
	  {
		id: 3,
		name: "王五",
		email: "wangwu@example.com",
		age: null // 年龄为空的场景
	  },
	  {
		id: 4,
		name: "赵六",
		email: "zhaoliu@example.com",
		age: 35
	  }]
	  
	// 组装成Props结构
	const propsData: Props = {
		data: userItem
	};
	
	return propsData
}


export default function Home(){
	{/** 服务端模拟查询数据库中数据返回 **/}
	const userData = getData()
	
	console.log("userData: " + userData.data[0].name)

	return (
		<main>
			<h1>Hello</h1>
			<p>这是项目首页</p>
			<div>
				
				<div style={{ width: 1800, height: 800, position: 'relative' }}>
					<Image src={img} fill style={{objectFit: 'contain'}} alt="刘亦菲"/>
				</div>
			</div>
			<UserCardList data={userData.data}></UserCardList>
			<StateFunction></StateFunction>
			<UseEffect title="useEffect演示：\n"></UseEffect>
		</main>
	)
}