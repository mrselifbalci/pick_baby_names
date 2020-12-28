selectNames=(e)=>{
    this.props.names.filter(item=>{
     if(item.name.includes(e.target.value.toLowerCase()) && item.sex === 'f'){
        <button key={item.id} style={{backgroundColor:'pink'}}>{item.name}</button>
        console.log('a')
     }else if (item.name.includes(e.target.value.toLowerCase()) && item.sex === 'm'){
        <button key={item.id} style={{backgroundColor:'#46CBE9'}}>{item.name}</button>
        console.log('b')
     }
       
    })
}

