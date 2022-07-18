import styled from "styled-components";

export const FormName = styled.form`
 background-color: #ca23ca;
 width:100%;
`
export const InputName = styled.input`
background-color: #e8e3e3;
     padding: 5px;
    width:90%;
    border:solid 2px black;
    margin-top:15px;
    margin-bottom:15px;
`
export const Label = styled.label`
font-size:20px;
color:yellowgreen;
text-align:center
`

export const Button = styled.button`
font-size:15px;
padding:5px 10px;
text-align:center;
border-radius:5px;
cursor: pointer;
transition:background-color 250ms linear;
:hover{
    background-color:bisque;
}
`