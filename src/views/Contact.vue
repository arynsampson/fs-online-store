<template>
  <Navbar />
    <div class="contact">
      <div class="main-container">
        <h3 class="secondary-heading">Contact us</h3>
        <div class="contact-content-section">
          <div class="form-wrapper">
            <form>
              <div class="name-inputs-wrapper">
                <div class="input-wrapper">
                  <label for="firstname">First name*</label>
                  <input type="text" name="firstname" placeholder="First name">
                </div>
                <div class="input-wrapper">
                  <label for="lastname">Last name*</label>
                  <input type="text" name="lastname" placeholder="Last name">
                </div>
              </div>
              <div class="input-wrapper">
                <label for="contact">Contact number</label>
                <input type="text" name="contact" placeholder="Contact number">
              </div>
              <div class="input-wrapper">
                <label for="email">Email*</label>
                <input type="email" name="email" placeholder="Email address">
              </div>
              <div class="input-wrapper">
                <label for="message">Message*</label>
                <textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
              </div>
              <input type="submit" value="Send message" class="button form-btn">
            </form>
          </div>
          <div class="map-wrapper">
            <div style="width: 100%"><iframe width="100%" height="520" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div>
          </div>
        </div>

        <div class="contact-items-wrapper">
          <div class="contact-item">
          <img src="http://via.placeholder.com/50" alt="address-icon">
          <h3 class="contact-item-heading">Address</h3>
          <p>170 Rotherbury Avenue <br />Cape Town, South Africa<br/> 7008</p>
        </div>
        <div class="contact-item">
          <img src="http://via.placeholder.com/50" alt="address-icon">
          <h3 class="contact-item-heading">Direct Contact</h3>
          <p><span class="font-bold">Phone</span>: 078 512 4936</p>
          <p><span class="font-bold">Email</span>: admin@fs.com</p>
        </div>
        <div class="contact-item">
          <img src="http://via.placeholder.com/50" alt="address-icon">
          <h3 class="contact-item-heading">Social</h3>
            <div class="social-icons-wrapper">
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-tiktok"></i> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
</script>