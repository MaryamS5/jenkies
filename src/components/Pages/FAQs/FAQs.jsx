import React, { useState } from "react";
import backgroundImage from '../FAQs/Images/Pizza+Dark.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import './FAQs.css';
import { Link } from 'react-router-dom';

import FooterSection from "../FAQs/FooterSection/FooterSection";

const faqData = [
  {
    question: "Can I return the product after purchase?",
    answer: "Yes, you can return any product within 30 days of purchase for a full refund. The item must be unused, in its original packaging, and accompanied by proof of purchase. If the return is due to a defect or an error on our part, we’ll cover the return shipping costs. Otherwise, standard shipping fees may apply. Once we receive and inspect the returned item, your refund will be processed within 3–5 business days. Refunds will be made to the original payment method. If the product is damaged or used, we may decline the return. Always contact our support team before sending anything back."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery generally takes between 3 to 5 business days, depending on your location and chosen shipping option. We process orders within 24 hours, and you’ll receive a confirmation email once your package has shipped. During peak seasons or public holidays, delivery may take slightly longer. You can track your shipment in real-time using the tracking number provided via email or SMS. For rural or remote areas, please allow an additional 1–2 business days. If you experience delays beyond this window, feel free to reach out to our support team for assistance."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer 24/7 customer support through email, live chat, and our support ticket system. Whether you need help tracking an order, making a return, or understanding a product, our team is here for you. Most inquiries are responded to within a few minutes on chat, and within 12–24 hours via email. You can also explore our Help Center for answers to frequently asked questions. Our goal is to ensure every customer has a smooth and satisfying experience. Feedback and suggestions are also welcome as we constantly strive to improve our service."
  },
  {
    question: "Is contactless delivery available?",
    answer: "Yes, we provide contactless delivery for added safety and convenience. At checkout, simply select the 'Contactless Delivery' option. Our delivery driver will leave your order at your doorstep, ring the bell (if needed), and maintain a safe distance. No signature is required, and you'll be notified once the package is delivered. We follow strict hygiene protocols during packaging and transit. This service is especially helpful during health concerns or for customers who prefer minimal contact. For any delivery instructions or special requests, you can add a note during checkout."
  },
  {
    question: "Can I track my order?",
    answer: "Absolutely! As soon as your order is shipped, you’ll receive a tracking number via email or SMS. You can click the link provided to view the real-time status of your delivery. If you have an account with us, you can also log in and check your order history to monitor progress. Tracking helps you plan your day and stay informed about delivery timing. If there are any delays or issues with the shipment, they’ll be visible in the tracking dashboard. And of course, our support team is always available if you need help interpreting the updates."
  },

  {
    question: "What should I do if I receive a damaged or wrong item?",
    answer: "We're sorry if your order didn’t arrive as expected. If you receive a damaged or incorrect item, please contact our support within 48 hours of delivery. Share a photo of the item and your order details. We’ll arrange a replacement or refund as soon as possible, with no extra cost to you."
  },
  {
    question: "Do you offer gift wrapping or personalized notes?",
    answer: "Yes, we offer optional gift wrapping and personalized notes at checkout. You can select the gift wrap option and add your custom message — perfect for birthdays, holidays, or special occasions. All gift items are wrapped with care to ensure a premium unboxing experience."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards, including Visa, MasterCard, and American Express. You can also pay via digital wallets like Apple Pay, Google Pay, and PayPal. For some locations, we also offer Cash on Delivery (COD). All transactions are encrypted and secure, ensuring your data remains safe."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within [insert your country/region]. However, international shipping is something we're actively exploring. If you're outside our service area and interested in our products, please contact our support — we may be able to arrange special delivery on request."
  },

];

const steps = [
  {
    step: "STEP 1",
    title: "Choose Location",
    description: "Enter your address or choose your current location using app."
  },
  {
    step: "STEP 2",
    title: "Order Food",
    description: "Choose your favorite food and a payment method."
  },
  {
    step: "STEP 3",
    title: "Fast Delivery",
    description: "Get it delivered right to your door in 1 hour or less."
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState();

 
  const toggleFAQ = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index); 
    }
  
  };

  return (
    <div className="faqs-container">
     <div
  className="faqs-header-section"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className="faqs-header">
    <h1 className="faqs-title">FAQs</h1>
    <p className="faqs-breadcrumb">
      <Link to="/" className="breadcrumb-link">Home</Link>
      <span className="breadcrumb-separator"> — </span>
      <Link to="/faqs" className="breadcrumb-link">FAQs</Link>
    </p>
  </div>
</div>

      <div className="faqs-content">
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-wrapper">
                <div className="faq-question">{faq.question}</div>
                <div className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </div>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="steps-section1">
          {steps.map((item, index) => (
            <div key={index} className="step-box">
              <div className="step-number">{item.step}</div>
              <div className="step-title">{item.title}</div>
              <div className="step-description">{item.description}</div> 
            </div>
          ))}

          <div className="help-section">
            <h2>Need Help?</h2>
            <p>If you have more questions, please let us know.</p>
            <button className="contact-us-button">Contact Us</button>
          </div>

          <div className="download-app">
            <h3>Download The App</h3>
            <div className="app-store-boxes">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="store-link-box"
              >
                <FontAwesomeIcon icon={faGooglePlay} size="lg" />
                <span>Google Play</span>
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="store-link-box"
              >
                <FontAwesomeIcon icon={faAppStoreIos} size="lg" />
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="faqs-footer-section">
        <FooterSection />
      </div>
    </div>
  );
};

export default FAQs;
