import  styled  from 'styled-components';

export const Container = styled.div`
background-color: #3D3F4D;
border-radius: 10px;
padding: 10px;
display: inline-grid;
img{
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
}

button{

    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row-reverse;
    cursor: pointer;
    &:hover{
        opacity: .9;
    } 
}
`