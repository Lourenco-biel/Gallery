import * as C from './styles'



type PhotoItemProps ={
    url:string,
    name:string
}

export const PhotoItem = ({url,name,}:PhotoItemProps ) =>{
return (
    <C.Container>
        <img src={url} alt={name}/>
        {name} <button><i className="fa-solid fa-trash"></i></button>
    </C.Container>
)
}