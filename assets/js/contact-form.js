// Contact Form Handler with EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("VF7FvHZPYqNPxIcHd"); // Public key của bạn
    
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formMessages = document.getElementById('form-messages');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        showLoading();
        
        // Get form data
        const formData = new FormData(contactForm);
        const templateParams = {
            user_name: formData.get('user_name'),
            user_email: formData.get('user_email'),
            user_phone: formData.get('user_phone'),
            user_location: formData.get('user_location'),
            user_message: formData.get('user_message'),
            to_email: 'Foliaoriginalvietnam@gmail.com', // Email nhận thông tin
            from_name: 'FOLIA Website Contact Form',
            reply_to: formData.get('user_email') // Email để reply lại khách hàng
        };
        
        // Send email using EmailJS
        emailjs.send('service_4d4ig2h', 'template_ydnmxng', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showSuccess();
                contactForm.reset();
            })
            .catch(function(error) {
                console.error('FAILED...', error);
                showError();
            });
    });
    
    function showLoading() {
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        hideMessages();
    }
    
    function hideLoading() {
        btnText.style.display = 'inline-block';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    }
    
    function showSuccess() {
        hideLoading();
        formMessages.style.display = 'block';
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            hideMessages();
        }, 5000);
    }
    
    function showError() {
        hideLoading();
        formMessages.style.display = 'block';
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            hideMessages();
        }, 5000);
    }
    
    function hideMessages() {
        formMessages.style.display = 'none';
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    }
    
    // Form validation
    const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                validateField(this);
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Trường này là bắt buộc';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Email không hợp lệ';
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[0-9+\-\s()]+$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Số điện thoại không hợp lệ';
            }
        }
        
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
            removeFieldError(field);
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
            showFieldError(field, errorMessage);
        }
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        removeFieldError(field);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
    
    function removeFieldError(field) {
        const existingError = field.parentNode.querySelector('.invalid-feedback');
        if (existingError) {
            existingError.remove();
        }
    }
});

// Smooth scroll for form focus
function scrollToForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}
