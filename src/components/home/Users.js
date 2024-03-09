import React,{useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const Wrap = styled.div`
    width:1440px;max-width:100%;margin:0 auto;padding:30px 20px;display:flex;flex-direction:column;row-gap:20px;
    & .head-wrap{
        display:flex;align-items:center;justify-content:space-between;
        & h1{background:linear-gradient(#ff2b2b, #c9c149);-webkit-text-fill-color:transparent;-webkit-background-clip:text;margin:0;}
        & .limit{font-size:16px;height:40px;width:100px;padding:0 15px;cursor:pointer;}
    }
    & .user-wrap{
        display:flex;flex-wrap:wrap;gap:20px;
        & .user-item{
            width:calc(25% - 15px);background:linear-gradient(#52fff4, #2d2c61);border-radius:10px;display:flex;align-items:center;column-gap:20px;padding:20px;transition:.2s;
            & .user-img{display:flex;width:80px;max-width:100%;display:flex;}
            & .content{
                & .name{font-size:20px;font-weight:500;color:#111;margin:0 0 5px;}
                & .text{font-size:14px;font-weight:500;color:#111;margin:0 0 10px;}
                & .view-more{color:orange;background:none;padding:0;margin:0;border:none;cursor:pointer;}
            }
            &:hover{transform:scale(1.04);z-index:1;}
        }
    }
`;

const userApi = "https://dummyjson.com/users";
const Users = ({page}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const onChange = (e) => {
        const {value} = e.target;
        getUsers(value);
    }
    useEffect(() => {
        getUsers(10);
    },[]);
    const getUsers = async(perPage) => {
        try{
            setLoading(true);
            const {data} = await axios.get(`${userApi}?limit=${perPage}`);
            if(data.users){
                setUsers(data.users);
            }
        }catch(e){
            console.error("Error Getting users:", e);
        }finally{
            setLoading(false);
        }
    }
    return (

            <Wrap>
                <div className="head-wrap">
                    <h1>Users</h1>
                    <select name="limit" className="limit" onChange={onChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div className="user-wrap">
                    {loading ? (
                        <div id="loader">
                            <div className="inner"><svg viewBox="0 0 38 38" width="40" height="40" stroke="#000"><g fill="none" fillRule="evenodd"><g transform="translate(1 1)" strokeWidth="2"><circle strokeOpacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g></svg></div>
                        </div>
                    ) : (
                        <>
                            {users.map(({id, image, firstName, lastName, email}) => (
                                <div key={id} className="user-item">
                                    <img src={image} className="user-img" alt={firstName}/>
                                    <div className="content">
                                        <div className="name">{`${firstName} ${lastName}`}</div>
                                        <div className="text">{email}</div>
                                        <button type="button" className="view-more">View Profile</button>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </Wrap>
    );
}
export default Users;
