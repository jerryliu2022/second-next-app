'use client'
import { useState } from 'react'

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

export default function UserCardList( {data}: Props){
	// 客户端本地选中状态
	const [activeId, setActiveId] = useState<number | null>(null)
	
	return (
    <div style={{ marginTop: 40 }}>
      <h3>用户列表（点击选中）</h3>
      {data.length === 0 ? (
        <p>暂无用户数据</p>
      ) : (
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>{
			data.map(
				(user) => ( 
								<div key={user.id} style={{width: '200px',height: '80px'}}>
									<div >{user.name}</div>
									<div >{user.email}</div>
									<div >{user.age}</div>
								</div>
							)
				
			)
		}</div>
      )}
      {activeId && (
        <p style={{ marginTop: 16, color: '#2563eb' }}>
          当前选中用户ID：{activeId}
        </p>
      )}
    </div>
  )
}