import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>

      <div className='descriptionbox-decription'>
         <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged.
         </p> 
         <p>
           You can store all your images in our built-in content studio for quick and easy access,
           while our drag-and-drop builder makes it simple to create your own landing page.
           Plus, your landing pages are automatically designed to look great on any device and optimized to be user-friendly.
         </p>
      </div>
    </div>
  )
}

export default DescriptionBox
