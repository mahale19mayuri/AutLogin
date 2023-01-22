import React from "react";

const Profile = () => {
   
  return (
    <>
      <h4>User Details</h4>
      <h4>
        Id: {""}
        {
          localStorage.getItem("id")
          ?localStorage.getItem("id")
          :""
        }
        </h4>
      <h4>
        Username: {""}
        {
          localStorage.getItem("username")
          ?localStorage.getItem("username")
          :""
        }
        </h4>
        <h4>
      FirstName: {""}
        {
          localStorage.getItem("firstName")
          ?localStorage.getItem("firstName")
          :""
        }
      </h4>
      <h4>
        LastName: {""}
        {
          localStorage.getItem("lastName")
          ?localStorage.getItem("lastName")
          :""
        }
        </h4>
        <h4>
        Email: {""}
        {
          localStorage.getItem("email")
          ?localStorage.getItem("email")
          :""
        }
        </h4>
        <h4>
        Gender: {""}
        {
          localStorage.getItem("gender")
          ?localStorage.getItem("gender")
          :""
        }
        </h4>
         <h4>
        TOken: {""}
        {
          localStorage.getItem("token")
          ?localStorage.getItem("token")
          :""
        }
        </h4>
    </>
  )
}

export default Profile