import React from "react";
import './contact.css'

    const users = [
            {
              name: 'Robert Reyes',
              avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
              online: false
            },
            {
              name: 'Nellie Caldwell',
              avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
              online: true
            },
            {
              name: 'Vernon Mason',
              avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
              online: true
            },
            {
              name: 'Erica Hunt',
              avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
              online: false
            },
            {
              name: 'Juanita Phillips',
              avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
              online: true
            }
          ];

   
        const ContactList = () => (
            
            <>
            {users.map(user => (

              <div class="Contact">
                    <div class="status-text">
                       <img class="avatar" src={user.avatar}/> 

                       <div class="status-text">
                          <h4 class="name">{user.name}</h4>

                       <div class="status">
                         <>
                          <span class={user.online ? "status-online" : "status-offline"}></span>
              
                        </>

                        
                       </div>
                   </div>
               </div>
              </div>
        ))}
    </>
        );
        
        
                        
export default ContactList;