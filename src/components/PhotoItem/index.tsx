import * as C from './styles'

type PhotoItemProps ={
    url:string,
    name:string,
    onDelete: (name: string) => void;
}

export const PhotoItem = ({url,name, onDelete}:PhotoItemProps ) =>{
return (
    <C.Container>
        <img src={url} alt={name}/>
        {name} 
        <button onClick={()=>onDelete(name)}><i className="fa-solid fa-trash"></i></button>
    </C.Container>
)
}