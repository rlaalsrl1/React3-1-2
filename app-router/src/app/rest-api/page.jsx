'use client';
import axios from "axios";
import { useState, useEffect } from "react";

export default  function RestApi(){

    const [users, setUsers]=useState(null)//상태 관리
    const [loading, setLoading] = useState(null)//로딩 상태

    useEffect(()=>{
        const fetchUsers = async() =>{
            try{
            const res = await axios.get("http://localhost:3001/test");
            setUsers(res.data)
            }catch(error){
                console.error("에러",error)
            }finally{
                setLoading(false)//로딩 완료
            }
        }
        fetchUsers()
    },[])//컴포넌트가 마운트 될때만 실행

    if(loading) return<h1>Loading...</h1>//로딩 중일 때
    if(!users) return<h1>No Users Found</h1>//로딩 중일 때
  
    return(
        <>
        <h1>axios</h1>
        {
            users.map((user,id)=>{
                return(
                    <div key={id}>
                        <h2>{user.id}</h2>
                        <h2>{user.name}</h2>
                        <h2>{user.title}</h2>
                        <h2>{user.bidy}</h2>
                    </div>
            )
            })

        }
        </>
    )
}