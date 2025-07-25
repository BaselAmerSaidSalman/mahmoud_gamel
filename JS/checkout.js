// // Checkout functionality for ArivoStyle Store

// let currentStep = 1;
// const totalSteps = 3;

// // Initialize checkout page
// document.addEventListener('DOMContentLoaded', function() {
//     initializeCheckout();
//     setupEventListeners();
//     loadOrderSummary();
//     setupMobileMenu();
// });

// // Initialize checkout functionality
// function initializeCheckout() {
//     // Check if cart is empty
//     const cart = getCart();
//     if (cart.length === 0) {
//         showEmptyCartMessage();
//         return;
//     }
    
//     // Update progress steps
//     updateProgressSteps();
    
//     // Show first step
//     showStep(1);
// }

// // Setup event listeners
// function setupEventListeners() {
//     // Navigation buttons
//     document.getElementById('nextBtn').addEventListener('click', nextStep);
//     document.getElementById('prevBtn').addEventListener('click', previousStep);
//     document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);
    
//     // Form validation
//     setupFormValidation();
    
//     // Card number formatting
//     document.getElementById('cardNumber').addEventListener('input', formatCardNumber);
//     document.getElementById('expiryDate').addEventListener('input', formatExpiryDate);
//     document.getElementById('cvv').addEventListener('input', formatCVV);
// }

// // Mobile menu functionality
// function setupMobileMenu() {
//     const mobileMenuBtn = document.getElementById('mobileMenuBtn');
//     const mobileMenu = document.getElementById('mobileMenu');
    
//     if (mobileMenuBtn && mobileMenu) {
//         mobileMenuBtn.addEventListener('click', function() {
//             mobileMenuBtn.classList.toggle('active');
//             mobileMenu.classList.toggle('active');
//         });
        
//         // Close menu when clicking outside
//         document.addEventListener('click', function(e) {
//             if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
//                 mobileMenuBtn.classList.remove('active');
//                 mobileMenu.classList.remove('active');
//             }
//         });
//     }
// }

// // Show empty cart message
// function showEmptyCartMessage() {
//     const main = document.querySelector('.checkout-main');
//     main.innerHTML = `
//         <div class="empty-cart-message">
//             <div class="empty-cart-content">
//                 <i class="fas fa-shopping-cart"></i>
//                 <h2>Your cart is empty</h2>
//                 <p>Add some items to your cart before proceeding to checkout.</p>
//                 <a href="catalog.html" class="nav-btn primary">Continue Shopping</a>
//             </div>
//         </div>
//     `;
// }

// // Update progress steps
// function updateProgressSteps() {
//     const steps = document.querySelectorAll('.progress-step');
//     const lines = document.querySelectorAll('.progress-line');
    
//     steps.forEach((step, index) => {
//         if (index + 1 < currentStep) {
//             step.classList.add('completed');
//             step.classList.remove('active');
//         } else if (index + 1 === currentStep) {
//             step.classList.add('active');
//             step.classList.remove('completed');
//         } else {
//             step.classList.remove('active', 'completed');
//         }
//     });
    
//     lines.forEach((line, index) => {
//         if (index + 1 < currentStep) {
//             line.classList.add('active');
//         } else {
//             line.classList.remove('active');
//         }
//     });
// }

// // Show specific step
// function showStep(step) {
//     const sections = ['shippingSection', 'paymentSection', 'reviewSection'];
//     const nextBtn = document.getElementById('nextBtn');
//     const prevBtn = document.getElementById('prevBtn');
//     const placeOrderBtn = document.getElementById('placeOrderBtn');
    
//     // Hide all sections
//     sections.forEach(sectionId => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             section.classList.add('hidden');
//         }
//     });
    
//     // Show current section
//     const currentSection = document.getElementById(sections[step - 1]);
//     if (currentSection) {
//         currentSection.classList.remove('hidden');
//     }
    
//     // Update navigation buttons
//     if (step === 1) {
//         prevBtn.style.display = 'none';
//         nextBtn.style.display = 'inline-block';
//         placeOrderBtn.style.display = 'none';
//         nextBtn.textContent = 'Continue to Payment';
//     } else if (step === 2) {
//         prevBtn.style.display = 'inline-block';
//         nextBtn.style.display = 'inline-block';
//         placeOrderBtn.style.display = 'none';
//         nextBtn.textContent = 'Review Order';
//     } else if (step === 3) {
//         prevBtn.style.display = 'inline-block';
//         nextBtn.style.display = 'none';
//         placeOrderBtn.style.display = 'inline-block';
//     }
// }

// // Next step
// function nextStep() {
//     if (validateCurrentStep()) {
//         if (currentStep < totalSteps) {
//             currentStep++;
//             updateProgressSteps();
//             showStep(currentStep);
            
//             if (currentStep === 3) {
//                 populateReviewSection();
//             }
//         }
//     }
// }

// // Previous step
// function previousStep() {
//     if (currentStep > 1) {
//         currentStep--;
//         updateProgressSteps();
//         showStep(currentStep);
//     }
// }

// // Validate current step
// function validateCurrentStep() {
//     if (currentStep === 1) {
//         return validateShippingForm();
//     } else if (currentStep === 2) {
//         return validatePaymentForm();
//     }
//     return true;
// }

// // Validate shipping form
// function validateShippingForm() {
//     const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'country'];
//     let isValid = true;
    
//     requiredFields.forEach(fieldId => {
//         const field = document.getElementById(fieldId);
//         if (field && !field.value.trim()) {
//             showFieldError(field, 'This field is required');
//             isValid = false;
//         } else if (field) {
//             clearFieldError(field);
//         }
//     });
    
//     // Email validation
//     const emailField = document.getElementById('email');
//     if (emailField && emailField.value && !isValidEmail(emailField.value)) {
//         showFieldError(emailField, 'Please enter a valid email address');
//         isValid = false;
//     }
    
//     return isValid;
// }

// // Validate payment form
// function validatePaymentForm() {
//     const requiredFields = ['cardNumber', 'expiryDate', 'cvv', 'cardName'];
//     let isValid = true;
    
//     requiredFields.forEach(fieldId => {
//         const field = document.getElementById(fieldId);
//         if (field && !field.value.trim()) {
//             showFieldError(field, 'This field is required');
//             isValid = false;
//         } else if (field) {
//             clearFieldError(field);
//         }
//     });
    
//     // Card number validation
//     const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
//     if (cardNumber && !isValidCardNumber(cardNumber)) {
//         showFieldError(document.getElementById('cardNumber'), 'Please enter a valid card number');
//         isValid = false;
//     }
    
//     // Expiry date validation
//     const expiryDate = document.getElementById('expiryDate').value;
//     if (expiryDate && !isValidExpiryDate(expiryDate)) {
//         showFieldError(document.getElementById('expiryDate'), 'Please enter a valid expiry date');
//         isValid = false;
//     }
    
//     // CVV validation
//     const cvv = document.getElementById('cvv').value;
//     if (cvv && !isValidCVV(cvv)) {
//         showFieldError(document.getElementById('cvv'), 'Please enter a valid CVV');
//         isValid = false;
//     }
    
//     return isValid;
// }

// // Show field error
// function showFieldError(field, message) {
//     clearFieldError(field);
//     field.style.borderColor = '#dc3545';
//     const errorDiv = document.createElement('div');
//     errorDiv.className = 'field-error';
//     errorDiv.textContent = message;
//     errorDiv.style.color = '#dc3545';
//     errorDiv.style.fontSize = '0.8rem';
//     errorDiv.style.marginTop = '0.25rem';
//     field.parentNode.appendChild(errorDiv);
// }

// // Clear field error
// function clearFieldError(field) {
//     field.style.borderColor = '#e0e0e0';
//     const errorDiv = field.parentNode.querySelector('.field-error');
//     if (errorDiv) {
//         errorDiv.remove();
//     }
// }

// // Email validation
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Card number validation
// function isValidCardNumber(cardNumber) {
//     return cardNumber.length >= 13 && cardNumber.length <= 19;
// }

// // Expiry date validation
// function isValidExpiryDate(expiryDate) {
//     const [month, year] = expiryDate.split('/');
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear() % 100;
//     const currentMonth = currentDate.getMonth() + 1;
    
//     const expMonth = parseInt(month);
//     const expYear = parseInt(year);
    
//     if (expMonth < 1 || expMonth > 12) return false;
//     if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) return false;
    
//     return true;
// }

// // CVV validation
// function isValidCVV(cvv) {
//     return cvv.length >= 3 && cvv.length <= 4;
// }

// // Setup form validation
// function setupFormValidation() {
//     // Real-time validation for email
//     document.getElementById('email').addEventListener('blur', function() {
//         if (this.value && !isValidEmail(this.value)) {
//             showFieldError(this, 'Please enter a valid email address');
//         } else {
//             clearFieldError(this);
//         }
//     });
    
//     // Real-time validation for card number
//     document.getElementById('cardNumber').addEventListener('blur', function() {
//         const cardNumber = this.value.replace(/\s/g, '');
//         if (cardNumber && !isValidCardNumber(cardNumber)) {
//             showFieldError(this, 'Please enter a valid card number');
//         } else {
//             clearFieldError(this);
//         }
//     });
// }

// // Format card number
// function formatCardNumber(e) {
//     let value = e.target.value.replace(/\s/g, '');
//     value = value.replace(/\D/g, '');
//     value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
//     e.target.value = value;
// }

// // Format expiry date
// function formatExpiryDate(e) {
//     let value = e.target.value.replace(/\D/g, '');
//     if (value.length >= 2) {
//         value = value.substring(0, 2) + '/' + value.substring(2, 4);
//     }
//     e.target.value = value;
// }

// // Format CVV
// function formatCVV(e) {
//     let value = e.target.value.replace(/\D/g, '');
//     e.target.value = value;
// }

// // Load order summary
// function loadOrderSummary() {
//     const cart = getCart();
//     const orderItemsContainer = document.getElementById('orderItems');
    
//     if (cart.length === 0) {
//         orderItemsContainer.innerHTML = '<p>No items in cart</p>';
//         return;
//     }
    
//     orderItemsContainer.innerHTML = '';
    
//     cart.forEach(item => {
//         const itemDiv = document.createElement('div');
//         itemDiv.className = 'order-item';
        
//         // Fix image path
//         let imagePath = item.image;
//         if (imagePath && !imagePath.startsWith('http') && !imagePath.startsWith('/')) {
//             if (imagePath.startsWith('Images/')) {
//                 imagePath = imagePath;
//             } else if (imagePath.includes('Images/')) {
//                 const imagesIndex = imagePath.indexOf('Images/');
//                 imagePath = imagePath.substring(imagesIndex);
//             } else {
//                 imagePath = 'Images/default-product.jpg';
//             }
//         }
        
//         itemDiv.innerHTML = `
//             <img src="${imagePath}" alt="${item.name}" onerror="this.src='Images/default-product.jpg'">
//             <div class="order-item-details">
//                 <h4>${item.name}</h4>
//                 <div class="price">$${item.price.toFixed(2)}</div>
//                 <div class="order-item-quantity">Qty: ${item.quantity}</div>
//             </div>
//         `;
//         orderItemsContainer.appendChild(itemDiv);
//     });
    
//     updateOrderTotals();
// }

// // Update order totals
// function updateOrderTotals() {
//     const cart = getCart();
//     let subtotal = 0;
    
//     cart.forEach(item => {
//         subtotal += item.price * item.quantity;
//     });
    
//     const tax = subtotal * 0.08; // 8% tax
//     const total = subtotal + tax;
    
//     document.getElementById('orderSubtotal').textContent = subtotal.toFixed(2);
//     document.getElementById('orderTax').textContent = tax.toFixed(2);
//     document.getElementById('orderTotal').textContent = total.toFixed(2);
// }

// // Populate review section
// function populateReviewSection() {
//     // Shipping information
//     const shippingInfo = document.getElementById('reviewShippingInfo');
//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     const city = document.getElementById('city').value;
//     const state = document.getElementById('state').value;
//     const zipCode = document.getElementById('zipCode').value;
//     const country = document.getElementById('country').value;
    
//     shippingInfo.innerHTML = `
//         <p><strong>${firstName} ${lastName}</strong></p>
//         <p>${email}</p>
//         <p>${phone}</p>
//         <p>${address}</p>
//         <p>${city}, ${state} ${zipCode}</p>
//         <p>${country}</p>
//     `;
    
//     // Payment information
//     const paymentInfo = document.getElementById('reviewPaymentInfo');
//     const cardNumber = document.getElementById('cardNumber').value;
//     const cardName = document.getElementById('cardName').value;
//     const expiryDate = document.getElementById('expiryDate').value;
    
//     const maskedCardNumber = cardNumber.replace(/\d(?=\d{4})/g, '*');
    
//     paymentInfo.innerHTML = `
//         <p><strong>${cardName}</strong></p>
//         <p>${maskedCardNumber}</p>
//         <p>Expires: ${expiryDate}</p>
//     `;
// }

// // Place order
// function placeOrder() {
//     // Show loading state
//     const placeOrderBtn = document.getElementById('placeOrderBtn');
//     const originalText = placeOrderBtn.textContent;
//     placeOrderBtn.textContent = 'Processing...';
//     placeOrderBtn.disabled = true;
    
//     // Simulate order processing
//     setTimeout(() => {
//         // Clear cart
//         localStorage.removeItem('cart');
        
//         // Show success message
//         showOrderSuccess();
//     }, 2000);
// }

// // Show order success
// function showOrderSuccess() {
//     const main = document.querySelector('.checkout-main');
//     main.innerHTML = `
//         <div class="order-success">
//             <div class="success-content">
//                 <i class="fas fa-check-circle"></i>
//                 <h2>Order Placed Successfully!</h2>
//                 <p>Thank you for your purchase. You will receive an email confirmation shortly.</p>
//                 <div class="order-details">
//                     <p><strong>Order Number:</strong> #${generateOrderNumber()}</p>
//                     <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
//                 </div>
//                 <div class="success-actions">
//                     <a href="index.html" class="nav-btn primary">Continue Shopping</a>
//                     <a href="contact.html" class="nav-btn secondary">Contact Support</a>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// // Generate order number
// function generateOrderNumber() {
//     return 'ARV' + Date.now().toString().slice(-8);
// }

// // Get cart from localStorage
// function getCart() {
//     return JSON.parse(localStorage.getItem('cart')) || [];
// }

// // Add CSS for success page
// const successStyles = `
//     <style>
//         .order-success {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             min-height: 60vh;
//             padding: 2rem;
//         }
        
//         .success-content {
//             text-align: center;
//             background: white;
//             padding: 3rem;
//             border-radius: 16px;
//             box-shadow: 0 4px 24px rgba(0,0,0,0.08);
//             max-width: 500px;
//         }
        
//         .success-content i {
//             font-size: 4rem;
//             color: #28a745;
//             margin-bottom: 1rem;
//         }
        
//         .success-content h2 {
//             color: #333;
//             margin-bottom: 1rem;
//         }
        
//         .success-content p {
//             color: #666;
//             margin-bottom: 2rem;
//         }
        
//         .order-details {
//             background: #f8f9fa;
//             padding: 1.5rem;
//             border-radius: 8px;
//             margin-bottom: 2rem;
//             text-align: left;
//         }
        
//         .order-details p {
//             margin: 0.5rem 0;
//             color: #333;
//         }
        
//         .success-actions {
//             display: flex;
//             gap: 1rem;
//             justify-content: center;
//             flex-wrap: wrap;
//         }
        
//         .empty-cart-message {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             min-height: 60vh;
//             padding: 2rem;
//         }
        
//         .empty-cart-content {
//             text-align: center;
//             background: white;
//             padding: 3rem;
//             border-radius: 16px;
//             box-shadow: 0 4px 24px rgba(0,0,0,0.08);
//             max-width: 400px;
//         }
        
//         .empty-cart-content i {
//             font-size: 4rem;
//             color: #d6b017;
//             margin-bottom: 1rem;
//         }
        
//         .empty-cart-content h2 {
//             color: #333;
//             margin-bottom: 1rem;
//         }
        
//         .empty-cart-content p {
//             color: #666;
//             margin-bottom: 2rem;
//         }
//     </style>
// `;

// // Add styles to head
// document.head.insertAdjacentHTML('beforeend', successStyles);
