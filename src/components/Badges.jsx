
const Badges = ({title,list,color}) => {
  return (
    <div>
       <h1>{title}</h1>
       {
        list.map((item,i)=>(<p className={`badge ${color} me-2 mb-3`} key={i}>{item.name}</p>
        ))
       }
    </div>
  )
}

export default Badges
