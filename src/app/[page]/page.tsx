type ParamsType = {
  page: string
}

export default async function SubPage({params}:{params:Promise<ParamsType>}){
	const p = await params

	return (
		<main>
			<div>
				这是一个分页面{p.page}
			</div>
		</main>
	)
}