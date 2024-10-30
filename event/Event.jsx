import React from 'react'
import Image from 'next/image'


export default function Event() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formImage}>
        <Image 
          src="/IMG-20240925-WA0007.jpg" 
          alt="Event Booking" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className={styles.formContent}>
        <h2>Book Your Event</h2>
        <form>
          <div className={styles.inputGroup}>
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className={styles.inputGroup}>
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" required />
          </div>
          <div className={styles.inputGroup}>
            <i className="fas fa-phone"></i>
            <input type="tel" placeholder="+91 Phone Number" required />
          </div>
          <div className={styles.inputGroup}>
            <i className="fas fa-calendar-alt"></i>
            <input type="date" required />
          </div>
          <div className={styles.inputGroup}>
            <i className="fas fa-users"></i>
            <input type="number" placeholder="Number of Attendees" min="1" required />
          </div>
          <div className={styles.inputGroup}>
            <i className="fas fa-comment"></i>
            <textarea placeholder="Additional Details or Message"></textarea>
          </div>
          <div className={styles.terms}>
            <input type="checkbox" required /> I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
          <button type="submit" className={styles.submitBtn}>Book Event</button>
        </form>
      </div>
    </div>
  )
}
